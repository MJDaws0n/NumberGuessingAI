// Import necessary modules
// const fs = require('fs');
// const { NeuralNetwork } = require('brain.js');

// // Check if the model file exists
// let net;
// const modelFile = 'model.json';
// if (fs.existsSync(modelFile)) {
//     // Load the model from model.json if it exists
//     const modelJson = fs.readFileSync(modelFile, 'utf8');
//     net = new NeuralNetwork().fromJSON(JSON.parse(modelJson));
// } else {
//     // Create a new neural network if the model file doesn't exist
//     const config = {
//         hiddenLayers: [10]
//     };
//     net = new NeuralNetwork(config);
// }

// // Define training data for XOR operation
// const trainingData = [
//   { input: [0], output: [0] },

// ];

// // Train the neural network with the training data
// net.train(trainingData, {
//     log: (details) => console.log(details),
//     iterations: 1000000
// });

// // Save the trained model to model.json
// const modelJson = net.toJSON();
// fs.writeFileSync(modelFile, JSON.stringify(modelJson), 'utf8');

console.log(convert('#   #   '));

function convert(input){
    input = input.replace(/#/, '1').replace(/ /, '0');
    return input.split('');
}