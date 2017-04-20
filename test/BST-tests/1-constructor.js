var expect = require('chai').expect;
import { Node } from '../../5-binary_search_trees';

describe('#Node-Class', function() {
  /**re
   * BST.makeNode is a function that returns an object, also known as a node.
   * The object has three properties, one of which is a value passed into the function.
   * The other two properties are named left and right, and they refer to other nodes.
   * Left and right start out as null.
   */
  it('returns an object', function() {
    expect( new Node() ).to.equal(Object);
  });

  it('contains as a property the value passed into the function', function() {
    expect( new Node('foo').val ).to.equal('foo');
  });

  it('has right and left properties set to null', function() {
    expect( new Node().left ).to.equal(null);
    expect( new Node().right ).to.equal(null);
  });
});

