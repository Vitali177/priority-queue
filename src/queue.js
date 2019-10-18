const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {

		this.maxSize = maxSize;
		this.heap = new MaxHeap();

	}

	push(data, priority) {

		this.heap.push(data, priority);
	}

	shift() {

		if (this.isEmpty()) throw new Error('Error - queue is empty');

		this.heap.pop();

		

		
	}

	size() {

	}

	isEmpty() {
		if (!this.heap.root) return true; 
		return false;
	}
}

module.exports = PriorityQueue;
