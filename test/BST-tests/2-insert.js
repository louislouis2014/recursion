var expect = require('chai').expect;
var BST = require('../../practice_probs/5-binary_search_trees.js');

describe('#Node.insert', function() {
  // var root;
  beforeEach(function() {
    let root = new Node(50);
  });
  
  it.only('assigns numbers less than the root value to the left', function() {
    root.insert(1);
    expect( root.left.val ).to.equal(1);
  });

  it('assigns numbers greater than the root value to the right', function() {
    root.insert(85);
    expect( root.right.val ).to.equal(85);
  });

  it('does not BST.insert duplicate values into the tree', function() {
    root.insert(50);
    expect( root.left ).to.equal(null);
    expect( root.right).to.equal(null);
  });

  it('handles multiple numbers correctly', function() {

    root.insert(25);
    root.insert(12);
    root.insert(1);
    root.insert(15);

    root.insert(55);
    root.insert(52);
    root.insert(53);
    root.insert(75);

    expect( root.left.left.left.val ).to.equal(1);
    expect( root.left.val ).to.equal(25);
    expect( root.right.val ).to.equal(55);
    expect( root.left.left.right.val ).to.equal(15);
    expect( root.right.left.val ).to.equal(52);
    expect( root.right.right.val ).to.equal(75);
    expect( root.right.left.right.val ).to.equal(53);
    expect( root.left.left.val ).to.equal(12);

  });
});