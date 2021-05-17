'use strict';

const uuid = require ('uuid').v4;
const { Producer } = require('sqs-producer');
const { Consumer } = require('sqs-consumer');

const app = Producer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/961968393209/packages.fifo',
  handlerMessage: async (handler) => {
    console.log(message.body)
  }
})
const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/961968393209/1-206-flowers',
  handlerMessage: async (handler) => {
    console.log(message.body)
  }
})


app.on('error', (error) => {
  console.error(error.message);
})
app.on('processing_error', (error) => {
  console.error(error.message);
})

app.start();