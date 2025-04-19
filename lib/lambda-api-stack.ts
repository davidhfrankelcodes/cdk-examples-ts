import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export class LambdaApiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const helloFunction = new lambda.Function(this, 'HelloFunction', {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromInline('exports.handler = async () => ({ statusCode: 200, body: "Hello from Lambda!" });'),
      handler: 'index.handler',
    });

    new apigateway.LambdaRestApi(this, 'Endpoint', {
      handler: helloFunction,
    });
  }
}

