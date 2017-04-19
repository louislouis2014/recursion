var assert = require('chai').assert;
var search = require('../practice_probs/5-binary_search_trees.js').search;

describe('BST', function() {

  describe('#makeNode', function() {
    /**
     * BST.makeNode is a function that returns an object, also known as a node.
     * The object has three properties, one of which is a value passed into the function.
     * The other two properties are named left and right, and they refer to other nodes.
     * Left and right start out as null.
     */
    it('returns an object', function() {
      expect(BST.makeNode().constructor).to.equal(Object);
    });

    it('contains as a property the value passed into the function', function() {
      expect(BST.makeNode('foo').val).to.equal('foo');
    });

    it('has right and left properties set to null', function() {
      expect(BST.makeNode().left).to.equal(null);
      expect(BST.makeNode().right).to.equal(null);
    });
  });

  describe('#BST.insert', function() {
    // var root;
    beforeEach(function() {
      
    });
    it.only('assigns numbers less than the root value to the left', function() {
      let root = BST.makeNode(50);
      BST.insert(1, root);
      expect(root.left.val).to.equal(1);
    });

    it('assigns numbers greater than the root value to the right', function() {
      BST.insert(85, root);
      expect(root.right.val).to.equal(85);
    });

    it('does not BST.insert duplicate values into the tree', function() {
      BST.insert(50, root);
      expect(root.left).to.equal(null);
      expect(root.right).to.equal(null);
    });

    it('handles multiple numbers correctly', function() {

      BST.insert(25, root);
      BST.insert(12, root);
      BST.insert(1, root);
      BST.insert(15, root);

      BST.insert(55, root);
      BST.insert(52, root);
      BST.insert(53, root);
      BST.insert(75, root);

      expect(root.left.left.left.val).to.equal(1);
      expect(root.left.val).to.equal(25);
      expect(root.right.val).to.equal(55);
      expect(root.left.left.right.val).to.equal(15);
      expect(root.right.left.val).to.equal(52);
      expect(root.right.right.val).to.equal(75);
      expect(root.right.left.right.val).to.equal(53);
      expect(root.left.left.val).to.equal(12);

    });
  });

  describe('#contains', function() {
    var root;
    beforeEach(function() {
      root = BST.makeNode(50);
      BST.insert(25, root);
      BST.insert(12, root);
      BST.insert(1, root);
      BST.insert(15, root);

      BST.insert(55, root);
      BST.insert(52, root);
      BST.insert(53, root);
      BST.insert(75, root);
    });

    it('finds values that are present', function() {
      expect(contains(75, root)).to.equal(true);
      expect(contains(52, root)).to.equal(true);
      expect(contains(12, root)).to.equal(true);
    });

    it('correctly reports values that are not present', function() {
      expect(contains(111, root)).to.equal(false);
      expect(contains(-1, root)).to.equal(false);
      expect(contains(-9, root)).to.equal(false);
      expect(contains(7, root)).to.equal(false);
      expect(contains(20, root)).to.equal(false);
    });
  });

  describe('#treeForEach', function() {
    var root;
    beforeEach(function() {
      root = BST.makeNode(50);
      BST.insert(25, root);
      BST.insert(12, root);
      BST.insert(1, root);
      BST.insert(15, root);

      BST.insert(55, root);
      BST.insert(52, root);
      BST.insert(53, root);
      BST.insert(75, root);
    });

    it('calls the passed function the correct number of times', function() {
      var count = 0;
      function counter() { count++; }
      treeForEach(root, counter);
      expect(count).to.equal(9);
    });
  });

  describe('#countNodes', function() {
    var root;
    beforeEach(function() {
      root = BST.makeNode(50);
      BST.insert(25, root);
      BST.insert(12, root);
      BST.insert(1, root);
      BST.insert(15, root);

      BST.insert(55, root);
      BST.insert(52, root);
      BST.insert(53, root);
      BST.insert(75, root);
    });

    it('returns the correct number of nodes', function() {
      expect(countNodes(root)).to.equal(9);
      expect(countNodes(BST.makeNode())).to.equal(1);
    });
  });

  describe('#averageVal', function() {
    var root;
    beforeEach(function() {
      root = BST.makeNode(50);
      BST.insert(25, root);
      BST.insert(12, root);
      BST.insert(1, root);
      BST.insert(15, root);

      BST.insert(55, root);
      BST.insert(52, root);
      BST.insert(53, root);
      BST.insert(75, root);
    });
    it('averages correctly', function() {
      expect(averageVal(root)).toBeCloseTo(37.5);
    });

  });

});