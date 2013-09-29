var z = function(name){};

module.exports = {
  takeoff: function(next) { if (next) setTimeout(next, 2000); },
  land: function(next) { if (next) setTimeout(next, 2000); },
  clockwise: z,
  counterClockwise: z,
  stop: z,
  up: z,
  down: z,
  back: z,
  front: z,
  left: z,
  right: z,
  animate: z,
  udpControl: { ref: z, flush: z }
};
