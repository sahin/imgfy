var async = require('async');
var colors = require('colors');
var emoji = require('node-emoji');
var opn = require('opn');

var BASE_URL = 'https://imgfy.xyz/';

module.exports = function (content = null, file = false, open = false) {
  return new Promise(function(resolve, reject) {
    if (file) {
      var fs = require('fs');
      content = fs.readFileSync(file)
      content = JSON.parse(content);
    }
    if (content !== null) {
      var url = `${BASE_URL}?content=${JSON.stringify(content)}`;
      if (open) {
        opn(url);
        process.exit();
      } else {
        console.log(colors.green(url))
      }
      resolve(url);
    } else {
      console.log(colors.red('Content shouldn\'t null.'))
      reject('Content shouldn\'t null.');
    }
  });
}
