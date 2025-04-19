import { App } from 'aws-cdk-lib';
import { LambdaApiStack } from '../lib/lambda-api-stack';
import { DynamoDBTableStack } from '../lib/dynamodb-table-stack';
import { S3BucketStack } from '../lib/s3-bucket-stack';
import { EC2InstanceStack } from '../lib/ec2-instance-stack';
import { VpcSetupStack } from '../lib/vpc-setup-stack';

const app = new App();

new LambdaApiStack(app, 'LambdaApiStack');
// new DynamoDBTableStack(app, 'DynamoDBTableStack');
// new S3BucketStack(app, 'S3BucketStack');
// new EC2InstanceStack(app, 'EC2InstanceStack');
// new VpcSetupStack(app, 'VpcSetupStack');

