var async = require('async');
var colors = require('colors');
var emoji = require('node-emoji');
var opn = require('opn');

var BASE_URL = 'https://imgfy.xyz/';

module.exports = function (obj) {
  return new Promise(function(resolve, reject) {
    if (obj.file) {
      var fs = require('fs');
      var content = fs.readFileSync(obj.file)
      content = JSON.parse(content);
      obj.content = content;
    }
    if (obj.content !== null) {
      var url = `${BASE_URL}?content=${JSON.stringify(obj.content)}`;
      if (obj.open) {
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
