class Coord {
  constructor(pos) {
    this.pos = pos;
  }
}

class Edge {
  constructor(data) {
    this.data = data;
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
        this.list[coord.pos[0]] = this.list[coord.pos[0]] || [];
        currentVertex = this.list[coord.pos[0]][coord.pos[1]];

        let possPos = [coord.pos[0] + pos[0], coord.pos[1] + pos[1]];
        if (
          !(possPos[0] < 0) &&
          !(possPos[0] > 7) &&
          !(possPos[1] < 0) &&
          !(possPos[1] > 7)
        ) {
          if (!currentVertex) {
            this.list[coord.pos[0]][coord.pos[1]] = new Edge(possPos);
          } else {
            while (currentVertex.next) {
              currentVertex = currentVertex.next;
            }
            currentVertex.next = new Edge(possPos);
          }
        }
      });
    });
  }

  inspect() {
    console.log(
      `Your tree has ${this.nodes} Move nodes and a maximum depth of ${this
        .maxDepth}`
    );
  }
}

class KnightSearcher {
  constructor(adjacencyList, start) {
    this.list = adjacencyList;
    this.start = start;
  }

  bfsFor(target) {
    let queue = [this.start];
    let results = [];

    let edge = this.list[queue[0][0]][queue[0][1]];
    let found = null;
    while (queue.length && !found) {
      if (edge.data[0] === target[0] && edge.data[1] === target[1]) {
        found = edge;
      }
      queue.push(edge.data);
      while (edge.next) {
        edge = edge.next;
        if (edge.data[0] === target[0] && edge.data[1] === target[1]) {
          found = edge;
        }
        queue.push(edge.data);
      }
      queue.shift();
      edge = this.list[queue[0][0]][queue[0][1]];
    }
    return found.data;
  }
}

let coords = [];
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    coords.push(new Coord([i, j]));
  }
}

const newList = new AdjacencyList(coords);
const knight = new KnightSearcher(newList.list, [0, 0]);
console.log(knight.bfsFor([7, 7]));
