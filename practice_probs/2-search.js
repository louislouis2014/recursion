module.exports = { search } 

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