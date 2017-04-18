module.exports = {
	fib: fib,
	search: search,
	copy: deepCopy,
	compare: compare,
	BST: {
		makeNode,
		insert: insert,
		contains: contains,
		treeForEach: treeForEach,
		countNodes: countNodes,
		sum: sum, 
		averageVal: averageVal
	}
}


// Fibonacci Sequence
function fib(n){
	if( n === 0 || n === 1 ){
		return n;
	}
	else{ 
		return fib(n-1) + fib(n-2);
	}
}


// Binary Search
function search(array, target){
	var mid = Math.floor(array.length / 2);

	if( array[mid] === target){
		return true;
	} else if ( !mid ) {
		return false;
	} else if ( array[mid] > target ) {
		return search( array.slice(0,mid), target );
	} else {
		return search( array.slice(mid+1), target );
	}
}

// Deep Copy
function deepCopy(arr){
    var copy = [];
    
    arr.forEach( (val, i, arr) => {
        if( !Array.isArray(val) ){
            copy.push( arr[i] );
        } else {
            copy.push( deepCopy( arr[i] ) );
        }
    })
    
    return copy;
}

/* Deep Object Compare

function compare(val1, val2) {
	if( isPrimitive(val1) && isPrimitive(val2) ) {
		return val1 === val2;
	} 
	else if ( isArray(val1) && isArray(val2) ) {
		if(val1.length === val2.length){
			return val1.reduce( (acc, _, i) => {
				return acc && compare(val1[i], val2[i]);
			}, true)
		} 
	}
	else if ( isObject(val1) && isObject(val2) ) {
		var val1props = Object.getOwnPropertyNames(val1).filter( prop => val1props.propertyIsEnumerable(prop) );
		var val2props = Object.getOwnPropertyNames(val2).filter( prop => val2props.propertyIsEnumerable(prop) );

		if ( compare(val1props.length, val2props.length) ){
			if( compare(val1props, val2props) ) {
				return val1props.reduce( (acc, prop) => {
					return acc && compare( val1[prop], val2[prop] )
				}, true)
			}
		}
	}

	return false;
}

*/
function compare(val1, val2) {
	if( isPrimitive(val1) && isPrimitive(val2) ) {
		return val1 === val2;
	} 
	else if ( isArray(val1) && isArray(val2) ) {
		if(val1.length === val2.length){
			return val1.reduce( (acc, _, i) => {
				return acc && compare(val1[i], val2[i]);
			}, true)
		} 
	}
	else if ( isObject(val1) && isObject(val2) ) {
		var val1props = Object.getOwnPropertyNames(val1);
		var val2props = Object.getOwnPropertyNames(val2);

		if ( compare(val1props.length, val2props.length) ){
			if( compare(val1props, val2props) ) {
				return val1props.reduce( (acc, prop) => {
					return acc && compare( val1[prop], val2[prop] )
				}, true)
			}
		}
	}
	return false;
}

// Helper Functions
function isPrimitive(val) {
	return isNumber(val) || isString(val) || isBoolean(val);
}

function isObject(obj) {
	return obj.constructor === Object;
}

function isArray(arr) {
	return Array.isArray(arr);
}

// Helper-Helper Functions
function isNumber(number) {
	return typeof number === 'number';
}

function isBoolean(bool) {
	return typeof bool === 'boolean';
}

function isString(string) {
	return typeof string === 'string';
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









