class Move {
  constructor(pos, depth, children = null, parent = null) {
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

    let depth = 0;

    while ()
    possibilities.forEach(pos => {
      let possPos = [
        node[0] + pos[0],
        node[1] + pos[1]
      ];

      if (
        !possPos[0] < 0 &&
        !possPos[0] > 7 &&
        !possPos[1] < 0 &&
        !possPos[1] > 7
      ) {
        //possPos
        depth++
        node.children.push(new Move(possPos, depth))
      }
    });
  }

  inspect() {
    console.log(
      `Your tree has ${this.nodes} Move nodes and a maximum depth of ${this
        .maxDepth}`
    );
  }
}

const tree = new MoveTree([0, 1], 1);
