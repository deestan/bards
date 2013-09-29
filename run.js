var instructions = require('./instructionset');
var lev = require('./levenshtein');

function findNearestCommand(command) {
  var matches = [];
  for (var i in instructions)
    matches.push([i, lev.getEditDistance(command, i)]);
  matches.sort(function(a, b) { return (a[1] - b[1]); });
  return matches[0][0];
}

module.exports = function run(client, lines) {
  var lineNo = 0;

  client.takeoff(function takenOff() {
    console.log('START');
    setTimeout(step, 2000);
  });

  function step() {
    if (lineNo >= lines.length)
      return process.nextTick(end);
    var rawLine = lines[lineNo];
    var line = rawLine.replace(/#.*/,'').replace(/^ */, '').replace(/ *$/, '');
    lineNo++;

    if (line == '')
      return process.nextTick(step);

    console.log('>', line);
    
    var droneArgs = instructions[line];
    if (droneArgs == undefined) {
      var possiblyMeant = findNearestCommand(line);
      var error = 'Unknown command on line ' + lineNo + ': "' + rawLine + '"';
      if (possiblyMeant)
        error += ' did you mean "' + possiblyMeant + '"?';
      throw new Error(error);
    }
    var command = droneArgs[0];
    var params = droneArgs.slice(1);
    if (command != 'animate')
      params = [droneArgs[1]];
    var duration = droneArgs[droneArgs.length - 1];
    
    client.stop();
    client[command].apply(client, params);
    setTimeout(step, duration);
  }

  function end() {
    console.log("END");
    setTimeout(function() { process.exit(0); }, 2000);
  }
};
