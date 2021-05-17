'use strict';

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2'});
const faker = require('faker')
const sns = new AWS.SNS();
const topic = 'arn:aws:sns:us-west-2:961968393209:Pickup.fifo';

setInterval(async () => {

  try{ 
    const payload = {
  Message: `orderID: ${faker.datatype.uuid()}, customer: ${faker.datatype.uuid()}`,
  orderID: faker.datatype.uuid(),
  customer: faker.name.findName(),
  vendorID: 'arn:aws:sqs:us-west-2:961968393209:1-206-flowers',
  topicArn: topic,
    }; const response = await sns.publish(payload)
    console.log(payload);
  } catch (error) {
    console.error(error)
  }
//  return response
}, 5000);

