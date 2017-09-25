# assignment_knights_travails_js
Do not go gentle into that good knight.

Ian and Stephanie

1. A stack

2. A queue

3. DFS

4. BFS

5. A tree is directed and has a single root node. A graph does not have a "root" node and can be directed or undirected


Pseudocode

1.

search = (searchTerm, node = this.head) => {
	if !node.children return null

	for each of the node's children (but not in a forEach because reasons) {
		if child.data === searchTerm
			return child

		next = search(searchTerm, child)

		if (next) {
			return next
		}
	}
}


2.

search = (searchTerm) => {
	searchArray = [this.head]

	while searchArray.length {
		if searchArray[0] matches searchTerm
			return searchArray[0]

		if searchArray[0] has children
			push all the children onto the end of searchArray

		searchArray.shift()
	}
}

3.

search = (searchTerm) => {
	loop through outerArray
		while currentNode
			if node matches searchTerm return node
			currentNode = currentNode.nextNode
}

4. 

search = (searchTerm) => {
	searchArray = outerArray

	while searchArray.length {
		if searchArray[0] matches searchTerm
			return searchArray[0]

		if searchArray[0] has a next
			push the next onto the end of searchArray

		searchArray.shift()
	}
}