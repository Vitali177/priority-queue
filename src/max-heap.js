const Node = require('./node');

class MaxHeap {
	constructor() {

		this.root = null;	
		this.parentNodes = [];	
	}

	push(data, priority) {
		
		var node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {

		if (!this.root) return;



		var buff = this.detachRoot();
		this.restoreRootFromLastInsertedNode(buff);

		
	}

	detachRoot() {

		var buff = this.root;

		this.root = null;

		return buff;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		if (!this.root) return true; 
		return false;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {

		if (!this.root) {
			this.root = node;
			this.parentNodes.push(node);
			return node;
		}

		//var currentNode = this.root;
		//var prevCurrentNode = this.root; 	// если это первый элемент

		if (!this.parentNodes[0].left) {

			this.parentNodes[0].left = node;
			this.parentNodes.push(node);
			return node;
		} else {
			
			this.parentNodes[0].right = node;
			this.parentNodes.push(node);
			this.parentNodes.shift();
			return node;
		}

		// while (currentNode) {

		// 	prevCurrentNode = currentNode;

		// 	if (node.data < currentNode.data) {
		// 		currentNode = currentNode.left;
		// 	} else if (node.data > currentNode.data) {
		// 		currentNode = currentNode.right;
		// 	} else {
		// 		return node;
		// 	}
		// }

		// if (node.data < prevCurrentNode.data) {
		// 	node.parentNodes = prevCurrentNode;
		// 	prevCurrentNode.left = node;			
		// } else if (node.data > prevCurrentNode.data) {
		// 	node.parentNodes = prevCurrentNode;
		// 	prevCurrentNode.right = node;	
		// } else {
		// 	// значения равны
		// }

		return node;


				
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
