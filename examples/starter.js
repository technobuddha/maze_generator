import {Maze, solve} from "../mod.js"

// 12x12 maze using Eeller's algorithm
let mazeSettings = {
  width: 12,
  height: 12,
  algorithm: "hunt and kill"
}

//initialize the maze
let m = Maze.create(mazeSettings);

//generate it
m.generate();

console.log(JSON.stringify(m));