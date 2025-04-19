# CDK Examples (TypeScript)

This repository showcases several AWS CDK stacks written in TypeScript. It serves as a collection of practical, deployable infrastructure-as-code examples using AWS Cloud Development Kit.

## 📦 Stacks Included

- **Lambda + API Gateway** (`lambda-api-stack.ts`)
- **DynamoDB Table** (`dynamodb-table-stack.ts`)
- **S3 Bucket** (`s3-bucket-stack.ts`)
- **EC2 Instance** (`ec2-instance-stack.ts`)
- **Custom VPC** (`vpc-setup-stack.ts`)

## 🛠 Setup
```bash
npm install -g aws-cdk
npm install
cdk bootstrap
cdk deploy # deploy default stack
```

## 🔄 Switching Stacks
Edit `bin/cdk-examples-ts.ts` and comment/uncomment the stack you'd like to deploy.

