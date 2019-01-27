const brain = require('brain.js');
const request = require('request');
const fs = require('fs');

const dataId = process.argv[2] || 10;

const dataMapper = require('./data-mapper');

const net = new brain.NeuralNetwork({});

console.log('started to download the training data');
request(`https://s3.eu-central-1.amazonaws.com/bersling-ai/data-${dataId}.json`, function (error, response, body) {
  const trainingData = JSON.parse(body);
  console.log('downloaded the training data, starting to train the model');
  net.trainAsync(trainingData.map(elt => dataMapper.mapPoint(elt)), {})
        .then(res => {
          console.log('finished training');
          fs.mkdirSync('./models', {recursive: true})
          fs.writeFileSync(`./models/model-${dataId}.json`, JSON.stringify(net.toJSON()));
          console.log('written model to file');
        })
        .catch((err) => {
          console.error(err);
        });
});

