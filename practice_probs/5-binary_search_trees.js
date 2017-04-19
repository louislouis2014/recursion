module.exports = {
	makeNode,
	insert,
	contains,
	treeForEach,
	countNodes,
	sum,
	averageVal
}

/*
Binary Search Tree
Trees are powerful data structures which solve myriad computer science problems. A Binary Tree is one for which every node has up to two children, a left and/or right child (or lesser/greater if you prefer). It is a Search tree if all nodes respect an order: all values less than a given node value are in its left subtree, and all values greater or equal to a given node value are stored in its right subtree. Trees are very recursive structures; for a given root node, the left child node is the root of a subtree and the right child node is the root of a subtree.

The excellent quality of BSTs is how quickly they can insert or find a particular value.

You are going to write a series of functions that, taken together, implement a binary search tree.
*/
function makeNode(val) {
	return {
		val: val,
		left: null,
		right: null,
	}
}

function insert(val, root) {
	if ( !root ) {
		root = makeNode(val);
	} else if(val < root.val){
		root.left = insert(val, root.left);
	} else if (val > root.val){
		root.right = insert(val, root.right);
	} else {
		return;
	}
}

function contains(val, root) {

}

function treeForEach(root, fn) {

}

function countNodes(root) {

}

function sum(root) {

}

function averageVal(root) {

}