if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }
  
myStorage = localStorage;

var imgFile = myStorage.getItem('imageFileKey');

console.log(imgFile);