module.exports = { copy }

// Deep Copy
function copy(arr){
    var copy = [];
    
    arr.forEach( (val, i, arr) => {
        if( !Array.isArray(val) ){
            copy.push( arr[i] );
        } else {
            copy.push( copy( arr[i] ) );
        }
    })
    
    return copy;
}