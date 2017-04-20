var expect = require('chai').expect;
var compare = require('../practice_probs/4-compare.js').compare;

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