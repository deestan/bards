module.exports = {
  'go forward' : ['front', 0.3, 1000],
  'go backward': ['back' , 0.3, 1000],
  'go left'    : ['left' , 0.3, 1000],
  'go right'   : ['right', 0.3, 1000],
  'GO FORWARD' : ['front', 1.0, 1000],
  'GO BACKWARD': ['back' , 1.0, 1000],
  'GO LEFT'    : ['left' , 1.0, 1000],
  'GO RIGHT'   : ['right', 1.0, 1000],

  'turn left'  : ['counterClockwise', 0.3, 1000],
  'turn right' : ['clockwise'       , 0.3, 1000],
  'TURN LEFT'  : ['counterClockwise', 1.0, 1000],
  'TURN RIGHT' : ['clockwise'       , 1.0, 1000],

  'go up'      : ['up'  , 0.3, 1000],
  'go down'    : ['down', 0.3, 1000],
  'GO UP'      : ['up'  , 1.0, 1000],
  'GO DOWN'    : ['down', 1.0, 1000],

  'dance'      : ['animate', 'phiDance'  , 3000],
  'flip'       : ['animate', 'flipAhead' , 1000],
  'backflip'   : ['animate', 'flipBehind', 1000],
  'roll right' : ['animate', 'flipRight' , 1000],
  'roll left'  : ['animate', 'flipLeft'  , 1000],
  'wave'       : ['animate', 'wave'      , 3000]
}
