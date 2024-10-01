
variable "AWS_ACCESS_KEY" {
    default = "AWS_ACCESS_KEY"
}
variable "AWS_SECRET_KEY" {
    default = "AWS_SECRET_KEY"
}

variable "REFER_SECRET" {
  type = string
  description = "A secret string to authenticate CF requests to S3"
  default = "REFER_SECRET"
}