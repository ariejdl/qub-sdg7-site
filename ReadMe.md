
# TODO

- test mobile and different browsers

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
- quiz
- observable HQ integration
- navigation
  - test urls work
- footnotes
- test other browsers
- animate 2d graphics
- images/genAI/unsplash
  - halftone background image?
  - feint bootstrap electricity icon
- some CSS animations, e.g. for text and buttons

# time permitting
- nice 3d blob
  - box - https://codesandbox.io/p/sandbox/rrppl0y8l4?file=%2Fsrc%2FApp.js%3A29%2C11
  - https://codesandbox.io/p/sandbox/pj7zjq?file=%2Fsrc%2FApp.js%3A20%2C1
  - distort - https://codesandbox.io/p/sandbox/l03yb?file=%2Fsrc%2FApp.js%3A14%2C6-14%2C10
- og links
- more mobile friendliness

## Design

- https://www.adobe.com/express/learn/blog/design-trends-2024
- https://www.youtube.com/watch?v=F74c_1nwVbY
  - gradients
  - bento-box aesthetic (home page?)
- React Three fiber
- Google web font
  - display font
  - body font
- partly serious business/corporate aesthetic
- generative AI?