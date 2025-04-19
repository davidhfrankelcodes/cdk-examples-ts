# CDK Examples (TypeScript)

This repository showcases several AWS CDK stacks written in TypeScript. It serves as a collection of practical, deployable infrastructure-as-code examples using the AWS Cloud Development Kit (CDK).

> ✨ **Why this project exists**: This repository is part of my personal portfolio. I use it to demonstrate infrastructure-as-code skills, TypeScript usage, and modern cloud automation techniques with AWS.

---

## 📦 Stacks Included

Each stack lives in its own file under the `lib/` directory. You can deploy one at a time by editing the entry point at `bin/cdk-examples-ts.ts`.

| Stack Name | Description |
|------------|-------------|
| `LambdaApiStack` | A basic AWS Lambda function fronted by an API Gateway REST endpoint |
| `DynamoDBTableStack` | A DynamoDB table with on-demand billing and string partition key |
| `S3BucketStack` | A versioned S3 bucket with automatic cleanup on stack removal |
| `EC2InstanceStack` | Launches a t2.micro instance in the default VPC |
| `VpcSetupStack` | Creates a new VPC with public and private subnets |

---

## 🛠 Setup Instructions

### 1. 📥 Install CDK and Dependencies
```bash
npm install -g aws-cdk
npm install
```

### 2. 🧱 Bootstrap Your AWS Environment
```bash
cdk bootstrap
```

### 3. 🚀 Deploy a Stack
Edit `bin/cdk-examples-ts.ts` to enable the stack you want, then:
```bash
npx cdk deploy LambdaApiStack
```
To destroy the deployed stack:
```bash
npx cdk destroy LambdaApiStack
```

---

## 🔄 Switching Stacks
Only one stack should be active in `bin/cdk-examples-ts.ts` at a time to avoid deploying all of them at once. Comment/uncomment as needed:
```ts
new LambdaApiStack(app, 'LambdaApiStack');
// new DynamoDBTableStack(app, 'DynamoDBTableStack');
```

---

## 💡 Ideas for Extension

- CloudFront + S3 static site
- Lambda triggered by SQS
- RDS instance with Secrets Manager
- EventBridge-triggered workflow
- Custom IAM roles and managed policies

---

## 🧪 CI/CD (Optional)
You can use GitHub Actions to automatically validate the stacks:
```yaml
# .github/workflows/cdk.yml
name: CDK Synth Check

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - run: npx cdk synth
```

---

## 🧑‍💻 Author
**David Frankel**  
[github.com/davidhfrankelcodes](https://github.com/davidhfrankelcodes)

---

## 📜 License
This project is licensed under the MIT License.
