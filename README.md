# Portfoilo website
- Frontend: React.js
- Backend: GraphQL, DynamoDB, AWS Amplify
- Repository: Github
- Template cloned https://github.com/nordicgiant2/react-nice-resume and changed a design slightly

# Developemnt logs
## 10182021
### configure and pull
- If you don't have a aws-amplify/cli on your Mac, type below command on Terminal.
  npm install -g @aws-amplify/cli
- To configure the CLI, run the configure command and follow the instruction (create the IAM role for this)
  amplify configure
- Connect your app to this backend environment using the Amplify CLI by running the following command from your project root folder.
  amplify pull --appId xxxx --envName staging
- https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-two/

### add api
- Add a GraphQL API to your app by running the the following command from the root of your app directory:
  amplify add api
- It will build all your local backend resources and provision it in the cloud
  amplify push
    amplify push create AppSync API, DynamoDB table, src/graphql
- It will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
  amplify publish
- Update amplify/backend/api/myapi/schema.graphql
- To view it
  amplify console or amplify console api
- https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-four/

### The data, schema, content can be edited in Amplify Admin UI
- https://docs.amplify.aws/console/adminui/intro/


### Link Admin UI with the current application in Amplify CLI
- https://docs.amplify.aws/console/adminui/extend-cli/#to-configure-the-amplify-cli-for-use-without-an-aws-account

## 10192021
### set up CI/CD of the front end and backend
- On Amplify Console inside AWS, From the navigation sidebar, App settings > Build settings <br>
and modify it to add the backend section to the amplify.yml

# Error logs
## 1.
### Issue
```
...
2021-10-19T18:04:33.716Z [INFO]: Failed to compile.
2021-10-19T18:04:33.716Z [INFO]: ./src/index.js
                                 Cannot find file './aws-exports' in './src'.
...
```
### Solution
- Need to set up CI/CD of the front end and backend

- ref: https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-three/?e=gs2020&p=build-a-react-app-two

## 2.
### Issue
```
2021-10-19T22:23:18.665Z [WARNING]: ✖ An error occurred when pushing the resources to the cloud
2021-10-19T22:23:18.666Z [WARNING]: ✖ There was an error initializing your environment.
2021-10-19T22:23:18.763Z [INFO]: [0mGraphQLError: Syntax Error: Unexpected <EOF>[0m
                                 [0m    at syntaxError (/root/.nvm/versions/node/v12.21.0/lib/node_modules/@aws-amplify/cli/node_modules/graphql/error/syntaxError.js:15:10)[0m
```
### Solution
- private/log1.text
- Need to pull the data from the backend. This error caused since I pushed the data to the backend <br>
and didn't pull the data from the cloud storage that unsync data between them

## 3.
### Issue
- The files in /public/images are not deployed.
- There are files uploaded in github repo but not deployed to Amplify.
### Solution
- Downsiz the image file from 8MB to 512KB

## 4.
### Issue
- emailjs works on local but didn't on server
### Suspect
- yarn might not work with emailjs, because .yml file for docker using the yarn not npm.
- There will be a email service on AWS in a serverless lambda way

### Solution
