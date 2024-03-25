const brain = require('./brain.js');
const fs = require('fs');

function preprocessInput(input) {
  return input.replace(/#/g, '1').replace(/ /g, '0').split('').map(str => parseInt(str, 10));
}
function getKeyByMaxValue(obj) {
  return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
}

// Define training data
const trainingData = [
  { input: preprocessInput(
    "########" +
    "#      #" +
    "#      #" +
    "#      #" +
    "#      #" +
    "#      #" +
    "########"
  ), output: { zero: 1 } },
  { input: preprocessInput(
    "#####   " +
    "   ##   " +
    "   ##   " +
    "   ##   " +
    "   ##   " +
    "   ##   " +
    "########"
  ), output: { one: 1 } },
  { input: preprocessInput(
    "   ##   " +
    "   ##   " +
    "   ##   " +
    "   ##   " +
    "   ##   " +
    "   ##   " +
    "   ##   "
  ), output: { one: 1 } },
  { input: preprocessInput(
    "    #   " +
    "    #   " +
    "    #   " +
    "    #   " +
    "    #   " +
    "    #   " +
    "    #   "
  ), output: { one: 1 } },
  { input: preprocessInput(
    "  ##### " +
    "##    ##" +
    "      ##" +
    "   #### " +
    "##      " +
    "##      " +
    " #######"
  ), output: { two: 1 } },
  { input: preprocessInput(
    "########" +
    "      ##" +
    "      ##" +
    "########" +
    "      ##" +
    "      ##" +
    "########"
  ), output: { three: 1 } },
  { input: preprocessInput(
    "########" +
    "       #" +
    "       #" +
    "########" +
    "       #" +
    "       #" +
    "########"
  ), output: { three: 1 } },
  { input: preprocessInput(
    "##    ##" +
    "##    ##" +
    "##    ##" +
    "########" +
    "      ##" +
    "      ##" +
    "      ##"
  ), output: { four: 1 } },
  { input: preprocessInput(
    "#      #" +
    "#      #" +
    "#      #" +
    "########" +
    "       #" +
    "       #" +
    "       #"
  ), output: { four: 1 } },
  { input: preprocessInput(
    "########" +
    "##      " +
    "##      " +
    "########" +
    "      ##" +
    "      ##" +
    "########"
  ), output: { five: 1 } },
  { input: preprocessInput(
    "########" +
    "#       " +
    "#       " +
    "########" +
    "       #" +
    "       #" +
    "########"
  ), output: { five: 1 } },
  { input: preprocessInput(
    "########" +
    "##      " +
    "##      " +
    "########" +
    "##    ##" +
    "##    ##" +
    "########"
  ), output: { six: 1 } },
  { input: preprocessInput(
    "########" +
    "#       " +
    "#       " +
    "########" +
    "#      #" +
    "#      #" +
    "########"
  ), output: { six: 1 } },
  { input: preprocessInput(
    " ###### " +
    "##    ##" +
    "     ## " +
    "    ##  " +
    "  ##    " +
    " ##     " +
    "##      "
  ), output: { seven: 1 } },
  { input: preprocessInput(
    "########" +
    "#      #" +
    "#      #" +
    "########" +
    "#      #" +
    "#      #" +
    "########"
  ), output: { eight: 1 } },
  { input: preprocessInput(
    "########" +
    "##    ##" +
    "##    ##" +
    "########" +
    "##    ##" +
    "##    ##" +
    "########"
  ), output: { eight: 1 } },
  { input: preprocessInput(
    "########" +
    "#      #" +
    "#      #" +
    "########" +
    "       #" +
    "       #" +
    "       #"
  ), output: { nine: 1 } },
  { input: preprocessInput(
    "########" +
    "##    ##" +
    "##    ##" +
    "########" +
    "      ##" +
    "      ##" +
    "      ##"
  ), output: { nine: 1 } },
  { input: preprocessInput(
    "########" +
    "#     ##" +
    "#     ##" +
    "########" +
    "      ##" +
    "      ##" +
    "      ##"
  ), output: { nine: 1 } },
  { input: preprocessInput(
    "########" +
    "##     #" +
    "##     #" +
    "########" +
    "      ##" +
    "      ##" +
    "      ##"
  ), output: { nine: 1 } },
  { input: preprocessInput(
    "########" +
    "##    ##" +
    "##    ##" +
    "########" +
    "       #" +
    "       #" +
    "       #"
  ), output: { nine: 1 } },
  { input: preprocessInput(
    "########" +
    "#     ##" +
    "#     ##" +
    "########" +
    "      ##" +
    "      ##" +
    "      ##"
  ), output: { nine: 1 } },
  { input: preprocessInput(
    "########" +
    "#     ##" +
    "#     ##" +
    "########" +
    "      ##" +
    "      ##" +
    "########"
  ), output: { nine: 1 } },
  { input: preprocessInput(
    "########" +
    "#      #" +
    "#      #" +
    "########" +
    "       #" +
    "       #" +
    "########"
  ), output: { nine: 1 } }
];

// Create a neural network
const net = new brain.NeuralNetwork();

// Train the neural network
net.train(trainingData);

// Test the neural network
const testData = preprocessInput(
  "#      #" +
  "#      #" +
  "#      #" +
  "########" +
  "       #" +
  "       #" +
  "       #"
);

const modelJSON = net.toJSON();
fs.writeFileSync('model.json', JSON.stringify(modelJSON));

const output = net.run(testData);

console.log('Test Output:\nInput: 4\nOutput: '+getKeyByMaxValue(output));