var assert = require('chai').assert;
var fib = require('../practice_probs/1-fibonacci.js').fib;

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