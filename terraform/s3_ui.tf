

# Variables
variable "fqdn" {
  description = "The fully-qualified domain name of the resulting S3 website."
  default     = "www.sdg7.online"
}

variable "domain" {
  description = "The domain name."
  default     = "sdg7.online"
}

# Using this module
module "main" {
  source = "./terraform-aws-s3-cloudfront-website-master"
  # source  = "riboseinc/s3-cloudfront-website/aws"
  bucket_name = "sdg7-site"
  #version = "3.0.1"

  fqdn = var.fqdn
  aliases = [var.domain]
  ssl_certificate_arn = aws_acm_certificate_validation.cert.certificate_arn

  index_document = "index.html"
  # error_document = "index.html" # SPA
  # single_page_application = true

  refer_secret = base64sha512("REFER-SECRET-${var.fqdn}-${var.REFER_SECRET}")

  force_destroy = "true"

  # Optional override for PriceClass, defaults to PriceClass_100
  cloudfront_price_class = "PriceClass_200"

  providers = {
    aws.main = aws.main
    aws.cloudfront = aws.cloudfront
  }

  # Optional WAF Web ACL ID, defaults to none.
  #web_acl_id = "${data.terraform_remote_state.site.waf-web-acl-id}"
}


# ACM Certificate generation

resource "aws_acm_certificate" "cert" {
  provider          = aws.cloudfront
  domain_name       = var.domain
  validation_method = "DNS"
  subject_alternative_names = [var.fqdn]

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "cert_validation" {
  provider = aws.cloudfront
  name = tolist(aws_acm_certificate.cert.domain_validation_options).0.resource_record_name
  type = tolist(aws_acm_certificate.cert.domain_validation_options).0.resource_record_type
  records = [tolist(aws_acm_certificate.cert.domain_validation_options).0.resource_record_value]
  ttl = 60
  zone_id  = aws_route53_zone.main.id
}

# hopefully verify www.x
resource "aws_route53_record" "cert_validation2" {
  provider = aws.cloudfront
  name = tolist(aws_acm_certificate.cert.domain_validation_options).1.resource_record_name
  type = tolist(aws_acm_certificate.cert.domain_validation_options).1.resource_record_type
  records = [tolist(aws_acm_certificate.cert.domain_validation_options).1.resource_record_value]
  ttl = 60
  zone_id  = aws_route53_zone.main.id
}

resource "aws_acm_certificate_validation" "cert" {
  provider                = aws.cloudfront
  certificate_arn         = aws_acm_certificate.cert.arn
  validation_record_fqdns = [
    aws_route53_record.cert_validation.fqdn,
    aws_route53_record.cert_validation2.fqdn
  ]
}

# Route 53 record for the static site

resource "aws_route53_zone" "main" {
  provider     = aws.main
  name         = var.domain
}

resource "aws_route53_record" "web" {
  provider = aws.main
  zone_id  = aws_route53_zone.main.zone_id
  name     = var.fqdn
  type     = "A"

  alias {
    name                   = module.main.cf_domain_name
    zone_id                = module.main.cf_hosted_zone_id
    evaluate_target_health = false
  }
}

# TODO: make this a proper redirect
resource "aws_route53_record" "bare-to-www" {
  provider = aws.main
  zone_id  = aws_route53_zone.main.zone_id
  name     = var.domain
  type     = "A"

  alias {
    name                   = aws_route53_record.web.name
    zone_id                = aws_route53_record.web.zone_id
    evaluate_target_health = false
  }
}

# Outputs

output "s3_bucket_id" {
  value = module.main.s3_bucket_id
}

output "s3_bucket_arn" {
  value = module.main.s3_bucket_arn
}

output "s3_domain" {
  value = module.main.s3_website_endpoint
}

output "s3_hosted_zone_id" {
  value = module.main.s3_hosted_zone_id
}

output "cloudfront_domain" {
  value = module.main.cf_domain_name
}

output "cloudfront_hosted_zone_id" {
  value = module.main.cf_hosted_zone_id
}

output "cloudfront_distribution_id" {
  value = module.main.cf_distribution_id
}

# output "route53_fqdn" {
#   value = aws_route53_record.web.fqdn
# }

output "acm_certificate_arn" {
  value = aws_acm_certificate_validation.cert.certificate_arn
}