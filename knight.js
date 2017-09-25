class Move {
  constructor(pos, depth, parent = null, children = []) {
    this.pos = pos;
    this.depth = depth;
    this.children = children;
    this.parent = parent;
  }
}

class MoveTree {
  constructor(startingPos, maxDepth) {
    this.startingPos = new Move(startingPos, 0);
    this.maxDepth = maxDepth;
    this.nodes = 0;
    this.tree = null;

    this.generate();
  }

  generate() {
    const possibilities = [
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2]
    ];

    let remainingNodes = [this.startingPos];
    let node = remainingNodes[0];

    while (node && node.depth < this.maxDepth) {
      possibilities.forEach(pos => {
        let possPos = [node.pos[0] + pos[0], node.pos[1] + pos[1]];
        if (
          !(possPos[0] < 0) &&
          !(possPos[0] > 7) &&
          !(possPos[1] < 0) &&
          !(possPos[1] > 7)
        ) {
          let newNode = new Move(possPos, node.depth + 1, node);
          node.children.push(newNode);
          remainingNodes.push(newNode);
          this.nodes++;
        }
      });
      remainingNodes.shift();
      node = remainingNodes[0];
    }
  }

  inspect() {
    console.log(
      `Your tree has ${this.nodes} Move nodes and a maximum depth of ${this
        .maxDepth}`
    );
  }
}

class KnightSearcher {
  constructor(tree) {
    this.tree = tree;
  }

  bfsFor(target) {
    let searchArray = [this.tree.startingPos];
    let node = searchArray[0];
    let found = null;
    while (searchArray.length && !found) {
      if (node.pos[0] === target[0] && node.pos[1] === target[1]) {
        found = node;
      }
      searchArray = searchArray.concat(node.children);
      searchArray.shift();
      node = searchArray[0];
    }

    let currentNode = found;
    let moves = [];
    while (currentNode.depth) {
      moves.unshift(currentNode.pos);
      currentNode = currentNode.parent;
    }
    // console.log(" ");
    moves.forEach((move, i) => {
      // console.log(`Move ${i + 1}:`, move);
    });
    // console.log("Required", moves.length, "moves.");
    // console.log(" ");
  }

  dfsFor(target) {
    let searchArray = [this.tree.startingPos];
    let node = searchArray[0];
    let found = null;
    while (searchArray.length && !found) {
      if (node.pos[0] === target[0] && node.pos[1] === target[1]) {
        found = node;
      }
      searchArray.shift();
      searchArray = node.children.concat(searchArray);
      node = searchArray[0];
    }

    let currentNode = found;
    let moves = [];
    while (currentNode.depth) {
      moves.unshift(currentNode.pos);
      currentNode = currentNode.parent;
    }
    //console.log(" ");
    moves.forEach((move, i) => {
      //console.log(`Move ${i + 1}:`, move);
    });
    //console.log("Required", moves.length, "moves.");
    //console.log(" ");
  }
}

const tree = new MoveTree([0, 0], 6);
// tree.inspect();

const knight = new KnightSearcher(tree);
// different results:
// [0, 0] => [1, 3]
// [0,0] => [7, 7]   // HOOOLY COW

let coord = [7, 7];
let diff = 0;
let diffCoord;

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    coord = [i, j];

    const start = Date.now();
    for (let k = 0; k < 40; k++) {
      // console.log("depth:");
      knight.dfsFor(coord);
    }
    const end = Date.now();
    const time = end - start;

    const brStart = Date.now();
    for (let k = 0; k < 40; k++) {
      // console.log("breadth:");
      knight.bfsFor(coord);
    }
    const brEnd = Date.now();
    const brTime = brEnd - brStart;

    const ratio =
      time / brTime > brTime / time
        ? Math.floor(time / brTime)
        : Math.floor(brTime / time);

    // console.log(ratio);
    if (ratio > diff && isFinite(ratio)) {
      diff = ratio;
      diffCoord = coord;
    }
  }
}

console.log("Time difference: ", diff, " times as long");
console.log("Coordinates: ", diffCoord);
