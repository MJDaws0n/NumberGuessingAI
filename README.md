# Number guessing AI

## What is it
The number guessing AI is a small program that allows you to enter a number from 0 - 9 that looks like:
```
########
      ##
      ##
########
      ##
      ##
########
```

and will return the number it think's it is.

It is built using brain.js.
For some reason I decided to use the browser version rather than the NodeJS version, meaning that training is not done via the GPU so if trained could take longer I suppose.

## How to use
Run the run.js file with
```javascript
node run.js
```
The example code should output a large 3 and output the word `three`. To set it to your own number, simply change the `testData` variable. Ensure that it's in an 8 across and 7 down grid pattern using only `#` (pound or hashtag) and ` ` (space). Running here will take from the pre-trained model in model.json.

## How to train
Train just as you would run it with:
```javascript
node train.js
```
except of course using train.js rather than run.js. This may take a while deppending on your CPU speed, but more me and most people will most likley be instant as there is not much example data.

In the console you will see something that looks like this:
```
PS E:\Workspace\AI\v3> node train.js
Test Output:
Input: 4
Output:
{
  zero: 0.005149041302502155,
  one: 0.007542275357991457,
  two: 0.006511406507343054,
  three: 0.011429022066295147,
  four: 0.9054743051528931,
  five: 0.006638395134359598,
  six: 0.0017491196049377322,
  seven: 0.006832881364971399,
  eight: 0.1540626734495163,
  nine: 0.06508921086788177
}
PS E:\Workspace\AI\v3>
```
This is the output the model gives to the example data provided. The larger the result, the more it leans towards that decision. So in this example, the hash symbol of 4 is entered, and the ai is around 90% sure that it's a 4 as that is by far the larest number. The results should add to a total of 1.

After this has ran, the `model.json` file will be updated with the newly trained model. If you want to train the model with new data, you can simply modify the `trainingData` variable. The more data, the more acurate the AI will be. With enough data, the AI sould be able to prediect the input even if it's entered slightly differnt to the data as it will pick the closest one to the data, (or that's kind of the idear, does not always work that way).
