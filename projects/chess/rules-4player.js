game.board = [
  [0,0,0,{piece:"rook",team:0},{piece:"knight",team:0},{piece:"bishop",team:0},{piece:"king",team:0},{piece:"queen",team:0},{piece:"bishop",team:0},{piece:"knight",team:0},{piece:"rook",team:0},0,0,0],
  [0,0,0,{piece:"pawn",team:0},{piece:"pawn",team:0},{piece:"pawn",team:0},{piece:"pawn",team:0},{piece:"pawn",team:0},{piece:"pawn",team:0},{piece:"pawn",team:0},{piece:"pawn",team:0},0,0,0],
  [0,0,0,null,null,null,null,null,null,null,null,0,0,0],
  [{piece:"rook",team:1},{piece:"pawn",team:1},null,null,null,null,null,null,null,null,null,null,{piece:"pawn",team:3},{piece:"rook",team:3}],
  [{piece:"knight",team:1},{piece:"pawn",team:1},null,null,null,null,null,null,null,null,null,null,{piece:"pawn",team:3},{piece:"knight",team:3}],
  [{piece:"bishop",team:1},{piece:"pawn",team:1},null,null,null,null,null,null,null,null,null,null,{piece:"pawn",team:3},{piece:"bishop",team:3}],
  [{piece:"king",team:1},{piece:"pawn",team:1},null,null,null,null,null,null,null,null,null,null,{piece:"pawn",team:3},{piece:"queen",team:3}],
  [{piece:"queen",team:1},{piece:"pawn",team:1},null,null,null,null,null,null,null,null,null,null,{piece:"pawn",team:3},{piece:"king",team:3}],
  [{piece:"bishop",team:1},{piece:"pawn",team:1},null,null,null,null,null,null,null,null,null,null,{piece:"pawn",team:3},{piece:"bishop",team:3}],
  [{piece:"knight",team:1},{piece:"pawn",team:1},null,null,null,null,null,null,null,null,null,null,{piece:"pawn",team:3},{piece:"knight",team:3}],
  [{piece:"rook",team:1},{piece:"pawn",team:1},null,null,null,null,null,null,null,null,null,null,{piece:"pawn",team:3},{piece:"rook",team:3}],
  [0,0,0,null,null,null,null,null,null,null,null,0,0,0],
  [0,0,0,{piece:"pawn",team:2},{piece:"pawn",team:2},{piece:"pawn",team:2},{piece:"pawn",team:2},{piece:"pawn",team:2},{piece:"pawn",team:2},{piece:"pawn",team:2},{piece:"pawn",team:2},0,0,0],
  [0,0,0,{piece:"rook",team:2},{piece:"knight",team:2},{piece:"bishop",team:2},{piece:"king",team:2},{piece:"queen",team:2},{piece:"bishop",team:2},{piece:"knight",team:2},{piece:"rook",team:2},0,0,0]
];

game.piece = {
  king: {
    text: "l",
    royalty: true,
    move: [
      {x: -1, y: -1, max: 1, move: true, end: "kill"},
      {x: -1, y: 0, max: 1, move: true, end: "kill"},
      {x: -1, y: 1, max: 1, move: true, end: "kill"},
      {x: 0, y: -1, max: 1, move: true, end: "kill"},
      {x: 0, y: 1, max: 1, move: true, end: "kill"},
      {x: 1, y: -1, max: 1, move: true, end: "kill"},
      {x: 1, y: 0, max: 1, move: true, end: "kill"},
      {x: 1, y: 1, max: 1, move: true, end: "kill"}
    ]
  },
  queen: {
    text: "w",
    royalty: false,
    move: [
      {x: -1, y: -1, move: true, end: "kill"},
      {x: -1, y: 0, move: true, end: "kill"},
      {x: -1, y: 1, move: true, end: "kill"},
      {x: 0, y: -1, move: true, end: "kill"},
      {x: 0, y: 1, move: true, end: "kill"},
      {x: 1, y: -1, move: true, end: "kill"},
      {x: 1, y: 0, move: true, end: "kill"},
      {x: 1, y: 1, move: true, end: "kill"}
    ]
  },
  rook:{
    text: "t",
    royalty: false,
    move: [
      {x: 0, y: -1, move: true, end: "kill"},
      {x: 1, y: 0, move: true, end: "kill"},
      {x: -1, y: 0, move: true, end: "kill"},
      {x: 0, y: 1, move: true, end: "kill"}
    ]
  },
  bishop: {
    text: "v",
    royalty: false,
    move: [
      {x: -1, y: -1, move: true, end: "kill"},
      {x: 1, y: -1, move: true, end: "kill"},
      {x: -1, y: 1, move: true, end: "kill"},
      {x: 1, y: 1, move: true, end: "kill"}
    ]
  },
  knight: {
    text: "m",
    royalty: false,
    move: [
      {x: -2, y: -1, max: 1, move: true, end: "kill"},
      {x: -1, y: -2, max: 1, move: true, end: "kill"},
      {x: -2, y: 1, max: 1, move: true, end: "kill"},
      {x: 1, y: -2, max: 1, move: true, end: "kill"},
      {x: 2, y: -1, max: 1, move: true, end: "kill"},
      {x: -1, y: 2, max: 1, move: true, end: "kill"},
      {x: 2, y: 1, max: 1, move: true, end: "kill"},
      {x: 1, y: 2, max: 1, move: true, end: "kill"}
    ]
  },
  pawn: {
    text: "o",
    royalty: false,
    promote: ["queen","rook","bishop","knight"],
    move: [
      {x: 1, y: 0, max: 1, move: true},
      {x: 1, y: 0, max: 2, move: true, maxPreviousUses: 0},
      {x: 1, y: -1, max: 1, move: false, end: "kill"},
      {x: 1, y: 1, max: 1, move: false, end: "kill"}
    ]
  }
};

game.team = [{color:"white",rotate:0},{color:"blue",rotate:1},{color:"red",rotate:2},{color:"black",rotate:3}];
start();