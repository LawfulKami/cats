const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {

  
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {


    if (!error) callback(data);
    if (error) callback(undefined);
  });
};

const callback = (data) => {
  console.log(data);
};



module.exports = breedDetailsFromFile;