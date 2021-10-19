# Reproduce it in Oct 18 2021
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

# Error logs
1.
```
...
2021-10-19T18:04:33.716Z [INFO]: Failed to compile.
2021-10-19T18:04:33.716Z [INFO]: ./src/index.js
                                 Cannot find file './aws-exports' in './src'.
...
```
- Need to set up CI/CD of the front end and backend

- ref: https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-three/?e=gs2020&p=build-a-react-app-two


### Reference
https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
