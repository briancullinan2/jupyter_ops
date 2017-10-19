var fs = require('fs');
var path = require('path');
var exec = require('child_process').execSync;
var sourceCmd = exec('npm install dotenv imap-simple mime', {stdio: [0, 1, 2]});

var dotenv = require('dotenv').config;
var imaps = require('imap-simple');
var mime = require('mime');

var output = path.join(process.cwd(), 'output');
var credentials = path.join(process.cwd(), 'google_credentials.txt');
var from = 'michelle@thesosmethod.com';
var days = 7;

dotenv({path: credentials});
console.log(process.env.GOOGLE_USER);
