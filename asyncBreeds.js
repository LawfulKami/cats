const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {

  console.log('breedDetailsFromFile: Calling readFile...');
  
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {

    console.log("In readFile's Callback: it has the data.");

    if (!error) callback(data);
  });
};

const callback = (data) => {
  console.log(data);
};



// we try to get the return value
breedDetailsFromFile('Bombay', callback);
// console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!