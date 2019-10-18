class Node {
	constructor(data, priority) {

		this.priority = priority;
		this.data = data;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {

		if (this.left && this.right)
			return;

		node.parent = this;

		if (this.left) 
			this.right = node;
		else 
			this.left = node;

		//this.swapWithParent(node);
	}

	removeChild(node) {

		node.parent = null;

		if (this.left === node)
			this.left = null;
		else if (this.right === node)
			this.right = null;
		else throw new Error('Passed node is not a child of this node');

	}

	remove() {

		if (this.parent === null) return;

		this.parent.removeChild(this);

	}

	swapWithParent() {

		if (!this.parent) return;


		var child = this;
		var parentChild = this.parent;
		var parentParentChild = this.parent.parent;

		var childAfterSwap;
		
		var buff = this.parent;
		
		this.parent = this;
		
		if (parentChild.left === child) {
			childAfterSwap = 'left';

			this.parent.left = null;
			this.parent.appendChild(buff);
			// если у родителя был и правый ребенок, то надо его привязать

			if (parentChild.right !== null) {

				this.parent.right = null;
				this.parent.appendChild(parentChild);
			}
		} else {
			childAfterSwap = 'right';
			
			this.parent.right = null;
			this.parent.appendChild(buff);

			if (parentChild.left !== null) {

				this.parent.left = null;
				this.parent.appendChild(parentChild);
			}
		}

		// на данный момент мы поменяли местами ребенка и родителя, связали их, 
		// установили правильные левые и правые связи для нового родителя 

		// теперь установим и для ребенка

		// if (child.left !== null) {

		// 	if (childAfterSwap === 'left') {

		// 		this.parent.left.left = null;
		// 		this.parent.left.appendChild(child.left);
		// 	} else {
		// 		this.parent.right.left = null;
		// 		this.parent.right.appendChild(child.left);
		// 	}			
		// } 
		// if (child.right !== null) {

		// 	if (childAfterSwap === 'left') {

		// 		this.parent.left.right = null;
		// 		this.parent.left.appendChild(child.right);
		// 	} else {
		// 		this.parent.right.right = null;
		// 		this.parent.right.appendChild(child.right);
		// 	}	
		// }

		// теперь соединили детей прошлого ребенка с новым(после замены)

		
	

		
		// соединим родителя с родителем родителя


		if (parentParentChild.left === parentChild) {

			this.parent.parent = parentParentChild;
			this.parent.parent.left = null;
			this.parent.parent.appendChild(this.parent);

		} else {

			this.parent.parent = parentParentChild;
			this.parent.parent.right = null;
			this.parent.parent.appendChild(this.parent);
		}


		// var nodeSwap = this;
		// var parentNodeSwap = this.parent;
		
		// //var parentParentNodeSwap = parentNodeSwap.parent;
		// //var buffNodeSwap = nodeSwap;

		// var buff;

		// buff = parentNodeSwap.left;
		// parentNodeSwap.left = nodeSwap.left;
		// nodeSwap.left = buff;

		// buff = parentNodeSwap.right;
		// parentNodeSwap.right = nodeSwap.right;
		// nodeSwap.right = buff;

		

	

		// поменял их указатели left right между чайлдом и пэрентом

		// var buffParentParent = null;

		// if (this.parent.parent) {

		// 	buffParentParent = this.parent.parent;
		// }

		// buff = this.parent;

		// this.parent = this;

		

		// this.parent.appendChild(buff);

		// if (buffParentParent) {

		// 	if (buffParentParent.left === this) {

		// 		buffParentParent.left = null;
		// 	} else {
		// 		buffParentParent.right = null;
		// 	}

		// 	//this.parent.parent = buffParentParent;
		// 	buffParentParent.appendChild(this.parent);
		// }

		// buff = this.parent.left;
		// this.parent.left = null;
		// this.parent.appendChild(buff);

		// buff = this.parent.right;
		// this.parent.right = null;
		// this.parent.appendChild(buff);

		

		


		

		
	}
}

module.exports = Node;
