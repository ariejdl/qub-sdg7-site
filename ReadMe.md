
## Terraform notes

**setup**

- terraform apply to create Route53Zone and link records to namecheap
  - <https://www.namecheap.com/support/knowledgebase/article.aspx/10371/2208/how-do-i-link-my-domain-to-amazon-web-services/>
- Visit certificate manager's created certificates in console, click button to import them to route 53
- Visit S3 bucket, click on permissions and enable public access
- update cloudfront id in `release.sh` script

`terraform init` after add new modules etc.

```
terraform plan -var-file vars.tfvars
terraform refresh -var-file vars.tfvars
terraform apply -var-file vars.tfvars
terraform destroy -var-file vars.tfvars
```

### Terraform helpful links

S3 with cert: - <https://medium.com/modern-stack/5-minute-static-ssl-website-in-aws-with-terraform-76819a12d412> - <https://github.com/riboseinc/terraform-aws-s3-cloudfront-website/tree/dd85d7f6218190b5a1a9298af136311c2ef8dd14>%

# TODO:

- *record various chatGPT prompts for references
  - https://students.unimelb.edu.au/academic-skills/resources/academic-integrity/acknowledging-AI-tools-and-technologies

# time permitting
- og links

## Design

- https://www.adobe.com/express/learn/blog/design-trends-2024
- replicate some of this
  - https://www.sustain-ability.com/#WhoWeAre
- https://www.youtube.com/watch?v=F74c_1nwVbY
  - gradients
  - bento-box aesthetic (home page?)
  - https://cssgradient.io
- React Three fiber
- Google web font
  - display font
  - body font
- partly serious business/corporate aesthetic
- generative AI?

# Licenses

- this project uses bootstrap icons https://github.com/twbs/bootstrap/blob/v4.0.0/LICENSE