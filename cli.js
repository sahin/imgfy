#!/usr/bin/env node
var app = require('./index');
var colors = require('colors');
var emoji = require('node-emoji');
var opn = require('opn');

var program = require('commander');

program
  .option('-o, --open', 'Open url in browser')
  .option('-c, --content <content>', 'Content file dir')
  .option('-s, --save <save>', 'Save output image')
  .parse(process.argv);

if (program.content) {
  var fs = require('fs');
  var content = fs.readFileSync(program.content.trim())
  content = JSON.parse(content);
} else {
  var content = null;
}

var obj;

if (program.save) {
  obj = {content: content, save: program.save.trim()}
}

app(obj)
  .then((value) => {
    program.open ? opn(value) : console.log(colors.green(value));
    process.exit();
  })
  .catch((err) => {console.log(colors.red(err));process.exit();})
