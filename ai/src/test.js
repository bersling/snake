const brain = require('brain.js');

const dataId = process.argv[2] || 10;

const model = require(`../models/model-${dataId}.json`);

const net = new brain.NeuralNetwork({});

net.fromJSON(model);

const doLog = (inpt) => {
  console.log(JSON.stringify(inpt) + " : " + JSON.stringify(net.run(inpt)));
}

for (let i = 0; i < 10; i++) {
  console.log(`======== i=${i}  ========`);
  for (let j = 0; j < 10; j++) {
    doLog({headX: j / 10, headY: i / 10});
  }
}

