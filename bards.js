#!/usr/bin/env node

var fs = require('fs');
var run = require('./run');

var args = require('optimist')
  .usage('Usage: $0 [-v] [-n] PROGRAM')
  .boolean('n').describe('n', 'Dry run.  Do not connect to drone, but go through program.')
  .boolean('v').describe('v', 'Verbose error messages.')
  .demand(1)
  .argv;

var program = ('' + fs.readFileSync(args._[0])).split('\n');

var client;

if (args.n)
  client = require('./mock-client');
else
  client = require('ar-drone').createClient();

process.on('uncaughtException', function(err) {
  if (args.v) console.log(err);
  console.log('Error detected.  Landing.');
  client.udpControl.ref({'emergency': true});
  client.udpControl.flush();
  setTimeout(function() { process.exit(1); }, 2000);
});

run(client, program);
