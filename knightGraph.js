class Move {
	constructor(pos, depth, parent = null, children = []) {
		this.pos = pos;
		this.depth = depth;
		this.children = children;
		this.parent = parent;
	}
}
