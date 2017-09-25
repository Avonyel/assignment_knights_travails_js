class Coord {
  constructor(pos) {
    this.pos = pos;
  }
}

class Edge {
  constructor() {
    this.data;
    this.next;
  }
}

class AdjacencyList {
  constructor(allCoords) {
    this.nodes = 0;
    this.graph = null;
    this.list = [];

    this.generate(allCoords);
  }

  generate(allCoords) {
    let currentVertex;
    const possibilities = [
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1]
    ];

    allCoords.forEach(coord => {
      possibilities.forEach(pos => {
        currentVertex = this.list[coord.pos[0]][coord.pos[1]];

        let possPos = [coord.pos[0] + pos[0], coord.pos[1] + pos[1]];
        if (
          !(possPos[0] < 0) &&
          !(possPos[0] > 7) &&
          !(possPos[1] < 0) &&
          !(possPos[1] > 7)
        ) {
          while (currentVertex.next) {
            currentVertex = currentVertex.next;
          }
          currentVertex.next = new Edge(possPos);
        }
      });
    });
    console.log(this.list);
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

let coords = [];
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    coords.push(new Coord([i, j]));
  }
}

const newList = new AdjacencyList(coords);
