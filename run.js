const fs = require('fs');
const brain = require('./brain.js');

function preprocessInput(input) {
    if(input.length != 56){
        throw new Error('String number must total 56 characters');
    }
    return input.replace(/#/g, '1').replace(/ /g, '0').split('').map(str => parseInt(str, 10));
}
function getKeyByMaxValue(obj) {
    return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
}

const modelJSON = JSON.parse(fs.readFileSync('model.json', 'utf-8'));
const restoredNet = new brain.NeuralNetwork();
restoredNet.fromJSON(modelJSON);

const testData = (
  "########" +
  "      ##" +
  "      ##" +
  "########" +
  "      ##" +
  "      ##" +
  "########"
);

const output = restoredNet.run(preprocessInput(testData));

console.log("Input:\n"+ testData.replace(/(.{8})/g, '$1\n'));
console.log("Ai thinks it's a:", getKeyByMaxValue(output));