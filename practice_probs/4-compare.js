module.exports = { compare }

// Deep Comparison of any Javascript Value Types
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

		if( compare(val1props, val2props) ) {
			return val1props.reduce( (acc, prop) => {
				return acc && compare( val1[prop], val2[prop] )
			}, true)
		}
	}
	return false;
}

// Value Type Helper Functions
function isPrimitive(val) {
	primitiveTypes = ['undefined','number','boolean','string']
	return ( primitiveTypes.indexOf( typeof val ) !== -1 );
}

function isArray(arr) {
	return Array.isArray(arr);
}

function isObject(obj) {
	return obj.constructor === Object;
}

