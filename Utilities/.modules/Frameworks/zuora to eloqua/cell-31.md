# Install

http://www.oracle.com/technetwork/java/javase/downloads/index.html

https://jenkins.io/doc/pipeline/tour/getting-started/

https://nodejs.org

http://docs.aws.amazon.com/cli/latest/userguide/installing.html


Or use Docker

https://github.com/jenkinsci/docker

`docker run -p 8080:8080 -p 50000:50000 -n jenkins jenkins/jenkins:lts`


`docker exec -it -u root jenkins wget -O - https://deb.nodesource.com/setup_8.x | bash && apt-get install -y nodejs zip aws`


# Setup

Create a pipeline and copy the Jenkinsfile, or import from Github

After 61 build tries you should have a screen that looks all green!


# Test

`npm run test`

# Deploy

Create an access key for AWS: https://console.aws.amazon.com/iam/home?nc2=h_m_sc#/security_credential

http://docs.aws.amazon.com/AWSGettingStartedContinuousDeliveryPipeline/latest/GettingStarted/CICD_Jenkins_Pipeline.html

`aws configure`

`aws lambda update-function-code --function-name eloqua_test --zip-file fileb://index.zip`


