var promise = new Promise(function(resolve, reject) {
  var fs = require('fs');
  fs.readFile('test.txt', 'utf8', function(err, data) {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

promise.then(function(data) {
  console.log(data);
}).catch(function(err) { 
    debugger;
    console.log(err.code);
    console.log(err);
});