
# www.sdg7.online
aws s3 sync ./site/build s3://sdg7-site
# update cloudfront
aws cloudfront create-invalidation --distribution-id E2E4U4U1BOUI63 --paths '/*'
