export { Node };

/*
Binary Search Tree
Trees are powerful data structures which solve myriad computer science problems. A Binary Tree is one for which every node has up to two children, a left and/or right child (or lesser/greater if you prefer). It is a Search tree if all nodes respect an order: all values less than a given node value are in its left subtree, and all values greater or equal to a given node value are stored in its right subtree. Trees are very recursive structures; for a given root node, the left child node is the root of a subtree and the right child node is the root of a subtree.

The excellent quality of BSTs is how quickly they can insert or find a particular value.

You are going to write a series of functions that, taken together, implement a binary search tree.


"mocha $(find test -name '*.js' ! -path 'test/5-binary_search_trees-tests.js')"cN
*/

class Node {

	constructor( val, left=null, right=null ){
		this.val = val;
		this.left = left;
		this.right = right;
	}

	insert( val ){
		if ( val < this.val ) {

			if ( !this.left ) {
				this.left = new Node( val );
			} else {
				this.left.insert( val );
			}

		} else if ( val > this.val ) {

			if ( !this.right ) {
				this.right = new Node( val );
			} else {
				this.right.insert( val );
			}

		} else {
			return;
		}
	}

	contains( val ){
		if( !this ){
			return false;
		} else if( val < this.val ){
			this.left.contains( val );
		} else if( val > this.val ){
			this.right.contains( val );
		} else if( val === this.val ){
			return true;
		}
	}

	treeForEach( fn ){
	}

	countNodes(){
		if( !this.left && !this.right ){
			return 1;
		} else {
			return 1 + root.left.countNodes() + root.right.countNodes;
		}
	}

	sum(){
		if( !this.left && !this.right ){
			return this.val;
		} else {
			return this.val + this.left.sum() + this.right.sum();
		}
	}

	averageVal(){
		return this.sum() / this.countNodes();
	}

}








