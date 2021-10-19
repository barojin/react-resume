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
# React Nice Resume :page_with_curl:

### [LIVE DEMO](https://nordicgiant2.github.io/react-nice-resume-page/index.html)

![img](https://github.com/nordicgiant2/react-nice-resume/blob/master/public/images/img.jpg?raw=true)

# About [`particles-bg`](https://github.com/lindelof/particles-bg) Library
#### This project uses the react particle background component library [https://github.com/lindelof/particles-bg](https://github.com/lindelof/particles-bg). It's very simple. Anyone can be a Musketeer with it.

![img](https://github.com/lindelof/particles-bg/raw/master/image/03.jpg?raw=true)

# Description
This project forks from [https://github.com/tbakerx/react-resume-template](https://github.com/tbakerx/react-resume-template), I made some modifications and adjustments, thanks to the [author](https://github.com/tbakerx).

![img](https://github.com/nordicgiant2/react-nice-resume/blob/master/public/images/img2.jpg?raw=true)

# Run Project
### 1. Clone the project

### 2. Run the project
```shell
npm i
npm start
```

### 3. Build
```shell
npm run build
```

### Reference
https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
