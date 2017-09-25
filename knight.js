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
          console.log(possPos);
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
    const searchArray = [tree.startingPos];
    let node = searchArray[0];
    while (searchArray.length) {
      if (node.pos === target) {
        //break and do a thing
      }

      searchArray.concat(node.children);
      searchArray.shift();
      node = searchArray[0];
    }
  }
}

const tree = new MoveTree([0, 1], 1);
tree.inspect();
