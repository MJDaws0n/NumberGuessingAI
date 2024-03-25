const brain = require('./brain.js');

// Function to convert '#' to 1 and ' ' to 0
function preprocessInput(input) {
  return input.replace(/#/g, '1').replace(/ /g, '0').split('').map(str => parseInt(str, 10));
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
    "   #    " +
    "   #    " +
    "   #    " +
    "   #    " +
    "   #    " +
    "   #    " +
    "   #    "
  ), output: { one: 1 } }
];

// Create a neural network
const net = new brain.NeuralNetwork();

// Train the neural network
net.train(trainingData);

// Test the neural network
const testData = preprocessInput(
    "   #    " +
    "   #    " +
    "   #    " +
    "   #    " +
    "   #    " +
    "   #    " +
    "   #    "
);

const output = net.run(testData);

console.log(output);