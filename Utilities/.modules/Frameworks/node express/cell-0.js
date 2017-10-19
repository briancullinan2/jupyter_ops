var exec = require('child_process').execSync;
var fs = require('fs');
var sourceCmd = exec('npm install jsdom express request mime', {stdio: [0, 1, 2]});
var express = require('express');
var mime = require('mime');
var path = require('path');
var request = require('request');
var JSDOM = require('jsdom').JSDOM;

var output = path.join(process.cwd(), 'output');
var port = process.env.PORT || 3000;
var host = 'localhost';
var query = '.w-gallery-list img';

$$.done('express is ready');