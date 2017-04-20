var assert = require('chai').assert;
var search = require('../practice_probs/2-search.js').search;

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