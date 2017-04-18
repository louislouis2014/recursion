var assert = require('chai').assert;
var expect = require('chai').expect;

var fib = require('./recurse.js').fib;
var search = require('./recurse.js').search;
var compare = require('./recurse.js').compare;
var BST = require('./recurse.js').BST;


describe('Recursion Practice Problems', function(){

  describe('#fib', function() {
    it('Calculates the fibonacci number when n is equal to 1', function() {
      assert.equal(fib(1), 1);
    });
    it('Calculates the fibonacci number when n is equal to 2', function() {
      assert.equal(fib(2), 1);
    });
    it('Calculates the fibonacci number when n is equal to greater than 2', function() {
      assert.equal(fib(3), 2);
      assert.equal(fib(4), 3);
      assert.equal(fib(5), 5);
      assert.equal(fib(10), 55);
    });
  });

  describe('#search', function() {
    it('Finds present values in even-lengthed arrays', function() {
      assert.equal(search([1, 2, 3, 4], 1), true);
      assert.equal(search([1, 2, 3, 4], 2), true);
      assert.equal(search([1, 2, 3, 4], 3), true);
      assert.equal(search([1, 2, 3, 4], 4), true);
    });
    it('Does not find missing values in even-lengthed arrays', function() {
      assert.equal(search([4, 110, 113, 124], 14), false);
      assert.equal(search([4, 110, 113, 124], -115), false);
      assert.equal(search([4, 110, 113, 124], 112), false);
      assert.equal(search([4, 110, 113, 124], 1215), false);
    });
    it('Finds present values in odd-lengthed arrays', function() {
      assert.equal(search([1, 2, 3, 4, 10], 1), true);
      assert.equal(search([1, 2, 3, 4, 10], 2), true);
      assert.equal(search([1, 2, 3, 4, 10], 3), true);
      assert.equal(search([1, 2, 3, 4, 10], 4), true);
      assert.equal(search([1, 2, 3, 4, 10], 10), true);
    }); 
    it('Does not find missing values in odd-lengthed arrays', function() {
      assert.equal( search([4, 110, 113, 124, 1233], 15), false);
      assert.equal( search([4, 110, 113, 124, 1233], -115), false);
      assert.equal( search([4, 110, 113, 124, 1233], 112), false);
      assert.equal( search([4, 110, 113, 124, 1233], 1215), false);
      assert.equal( search([4, 110, 113, 124, 1233], 1295), false);
    });
  });

  describe('#compare', function() {
    it('Can correctly compare two boolean values', function() {
      expect(compare(true, true)).to.equal(true);
      expect(compare(false, true)).to.equal(false);
    });
    it('Can correctly compare two numbers', function() {
      expect(compare(2, 2)).to.equal(true);
      expect(compare(123, 131)).to.equal(false);
    });
    it('Can correctly compare two strings', function() {
      expect(compare('abcd', 'abcd')).to.equal(true);
      expect(compare('abcc', 'abcd')).to.equal(false);
    });
    it('Can correctly compare two arrays containing only numbers', function() {
      expect(compare([1,2,3,3,53], [1,2,3,3,53])).to.equal(true);
      expect(compare([1,2,4,3,53], [1,2,3,3,53])).to.equal(false);
      expect(compare([1,2,4,3,5], [1,2,4,3,5])).to.equal(true);
    });
    it('Can correctly compare two arrays containing strings, booleans or numbers', function() {
      expect(compare([1,2,3,3,53], [1,2,3,3,53])).to.equal(true);
      expect(compare([1,2,'4',3,53], [1,2,4,3,53])).to.equal(false);
      expect(compare(['1',2,4,3,true], ['1',2,4,3,true])).to.equal(true);
    });
    it('Correctly handles nested arrays', function() {
      expect(compare([1,2,[1,2,3],3,3,53], [1,2,[1,2,3],3,3,53])).to.equal(true);
      expect(compare([1,2,[1,[1,1,1],2,3],3,3,53], [1,2,[1,[1,1,1],2,3],3,3,53])).to.equal(true);
      expect(compare([1,2,[1,[1,2,1],2,3],3,3,53], [1,2,[1,[1,1,1],2,3],3,3,53])).to.equal(false);
      expect(compare([1,2,[1,[1,1,1],2,3],3,3,53], [1,2,[1,[1,1,1],2,3],3,3,5])).to.equal(false);
      expect(compare([1,2,[1,[1,2,1],2,3],3,3,[53]], [1,2,[1,[1,2,1],2,3],3,3,53])).to.equal(false);
    });
    it('Correctly handles nested data strucutres with any type', function() {
      expect(compare({1 : [15, [1,2,3,4], 1,5] }, {1 : [15, [1,2,3,4], 1,5]})).to.equal(true);
      expect(compare({1 : [15, [1,2,3,4], 1,5] }, [15, [1,2,3,4], 1,5])).to.equal(false);
      expect(compare([{"aa" : [[1,2,3,4], 1,5]}], ["aaa", [1,2,3,4], 1,5])).to.equal(false);
      expect(compare({1 : [{"aa" : [[1,2,3,4], 1,5]}]}, {1 : [{"aa" : [[1,2,3,4], 1,5]}]})).to.equal(true);
      expect(compare({1 : [{"aa" : [[1,2,3,4], true,5]}]}, {1 : [{"aa" : [[1,2,3,4], true,5]}]})).to.equal(true);
    });
    describe('Can correctly compare two objects', function() {
      it('should return true if they have the same properties', function() {
        var obj1 = {a: 'b'};
        var obj2 = {a: 'b'};
        expect(compare(obj1, obj2)).to.equal(true);
      });

      it('should return false if they are the same length and do not have the same properties', function() {
        var obj1 = {a: 'b'};
        var obj2 = {a: 'c'};
        expect(compare(obj1, obj2)).to.equal(false);
      });

      it('should be correct for "falsy" properties', function() {
        var obj1 = {0: 'foo'};
        var obj2 = {0: 'foo'};
        expect(compare(obj1, obj2)).to.equal(true);
      });

      it('should return false if they have different numbers of properties, and the larger object contains properties not present in the smaller object.', function() {
        var obj1 = {a: 'b', hi: 'there'};
        var obj2 = {a: 'b'};
        expect(compare(obj1, obj2)).to.equal(false);
        expect(compare(obj2, obj1)).to.equal(false);
      });

      it('should return false if they have different numbers of properties, and the smaller object contains properties not present in the larger object.', function() {
        var obj1 = {a: 'b', hi: 'there', c: 'c'};
        var obj2 = {a: 'b', b: 'b'};
        expect(compare(obj1, obj2)).to.equal(false);
        expect(compare(obj2, obj1)).to.equal(false);
      });
    });
  });

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
      var root;
      beforeEach(function() {
        root = BST.makeNode(50);
      });
      it.only('assigns numbers less than the root value to the left', function() {
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

});
  