node {
   def npmHome
   stage('Preparation') { // for display purposes
      npmHome = 'npm'
      repo = 'https://{username}:{password}@github.com/Swiftpage/act.subscription.management'

      // clear the install directory
      if (isUnix()) {
         sh "rimraf act.subscription.management"
      } else {
         bat(/rimraf act.subscription.management/)
      }
      
      // Get some code from a GitHub repository
      if (isUnix()) {
         sh "git clone -b B-11542_Automate_Renewals_Eloqua '${repo}'"
      } else {
         bat(/git clone -b B-11542_Automate_Renewals_Eloqua "${repo}"/)
      }
   }
   stage('Install') {
      project = "act.subscription.management/subscription.services/Subscription.Services.EloquaImport"
      if (isUnix()) {
         sh "cd '${project}' && '${npmHome}' install"
      } else {
         bat(/cd "${project}" && "${npmHome}" install/)
      }
   }
   stage('Build') {
      // Run the maven build
      if (isUnix()) {
         sh "cd '${project}' && '${npmHome}' run build"
      } else {
         bat(/cd "${project}" && "${npmHome}" run build/)
      }
   }
   stage('Test') {
      if (isUnix()) {
         sh "ls '../../.credentials/' || mkdir ../../.credentials"
      } else {
         bat(/dir ..\/..\/.credentials\/ || mkdir ..\/..\/.credentials/)
      }
      if (isUnix()) {
         sh "mv '${project}/eloqua_production.json' ../../.credentials/"
      } else {
         bat(/mv "${project}\/eloqua_production.json" ..\/..\/.credentials/)
      }
      if (isUnix()) {
         sh "mv '${project}/zuoraRest_sandbox.json' ../../.credentials/zuoraRest_sandbox.json"
      } else {
         bat(/mv "${project}\/zuoraRest_sandbox.json" ..\/..\/.credentials\/zuoraRest_sandbox.json/)
      }
      if (isUnix()) {
         sh "cd '${project}' && '${npmHome}' run test"
      } else {
         bat(/cd "${project}" && "${npmHome}" run test/)
      }
   }
   stage('Deploy') {
      if (isUnix()) {
         sh "cd '${project}' && rimraf index.zip"
      } else {
         bat(/cd "${project}" && rimraf index.zip/)
      }
      if (isUnix()) {
         sh "cd '${project}' && zip ./index.zip -r index.js eloqua-service.js eloqua-create.js https-request-polyfill.js zuora-service.js zuora-renewals-query.js package.json package-lock.json"
      } else {
         bat(/cd "${project}" && zip .\/index.zip -r index.js eloqua-service.js eloqua-create.js https-request-polyfill.js zuora-service.js zuora-renewals-query.js package.json package-lock.json/)
      }
      if (isUnix()) {
         sh "cd '${project}' && aws lambda update-function-code --function-name eloqua_test --zip-file fileb://index.zip"
      } else {
         bat(/cd "${project}" && aws lambda update-function-code --function-name eloqua_test --zip-file fileb:\/\/index.zip"/)
      }
   }
}