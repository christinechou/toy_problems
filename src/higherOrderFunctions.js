///--------------------------------------------------------
///--------------------------------------------------------
/// ARRAY OF OBJECTS (Difficulty: 1/5)
///--------------------------------------------------------
///--------------------------------------------------------

/// Multi-part Problem

/// Tags: Higher-order functions, objects, arrays


var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, gender:'female', age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, gender:'male', age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, gender:'female', age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, gender:'male', age: 45},
  {name: {first: "Louis", last: "Reasoner"}, gender:'male', age: 21}
];


///--------------------------------------------------------
/// Return the average age of all of the people in the array people.
///--------------------------------------------------------

function averageAge(people) {
	/// YOUR CODE HERE
}

///--------------------------------------------------------
/// Return the sum of the age of all men in the array people.
///--------------------------------------------------------

function sumOfMen(people) {
	/// YOUR CODE HERE
}

///--------------------------------------------------------
/// Return an array with all people over 35.
///--------------------------------------------------------

function over35(people) {
	/// YOUR CODE HERE
}

///--------------------------------------------------------
/// Return an array with all people that have a last name
/// starting with a defined letter.
///--------------------------------------------------------

function lastName(people, letter) {
	/// YOUR CODE HERE
}

///--------------------------------------------------------
/// Return an array with all females that have a last name
/// longer than n letters
///--------------------------------------------------------

function femaleNameLength(people, n) {
	/// YOUR CODE HERE
}

///--------------------------------------------------------
/// Return an object with just the name age pairs of the
/// females under the age n.
///--------------------------------------------------------

function femaleUnder37(people, n) {
	/// YOUR CODE HERE
}


///--------------------------------------------------------
/// PRINT ODDS (Difficulty: 2/5)
///--------------------------------------------------------

/// Tags: Higher-order functions, objects

/// Write a function printOdds that takes an object and
/// returns an array with the odd values found in the
/// object.

// var x = {a: 6, b: 33, c: 12, d: 3};
// printOdds(x) => [33, 3]

function printOdds(x) {
/// TO DO: YOUR CODE HERE
}

///--------------------------------------------------------
///--------------------------------------------------------
/// LARGEST BOX ART (Difficulty: 2/5)
///--------------------------------------------------------
///--------------------------------------------------------

/// Tags: Higher-order functions, objects, arrays

/// Return an array containing only the URL of the largest box art.

var boxarts = [
    { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
    { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
    { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
    { width: 425, height:150, url:"http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
];

function largest(arr) {
/// TO DO: YOUR CODE HERE
}

///--------------------------------------------------------
///--------------------------------------------------------
/// OBJECT SOME (Difficulty: 2/5)
///--------------------------------------------------------
///--------------------------------------------------------


/// Tags: Higher-order functions, objects

/// Write a function objectSome() that looks through an array of
/// objects (first argument collection) and returns an array of all objects
/// that have matching property and value pairs (second argument).
/// Each property and value pair of the source object has to be present in the
/// object from the collection if it is to be included in the returned array.
/// Try using filter

var obj1 = [
  { "a": 1, "b": 2 },
  { "a": 1 },
  { "a": 1, "b": 2, "c": 2 }
];

var obj2 = [
  { first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" }
];

// objectSome(obj1, { "a": 1, "c": 2 });
// -> [{ "a": 1, "b": 2, "c": 2 }]

// objectSome(obj2, { last: "Capulet" });
// -> [{ first: "Tybalt", last: "Capulet" }]


function objectSome(collection, source) {
 /// TO DO: YOUR CODE HERE
}


///--------------------------------------------------------
///--------------------------------------------------------
/// LARGEST NUMS (Difficulty: 2/5)
///--------------------------------------------------------
///--------------------------------------------------------

/// Tags: Higher-order functions, arrays

/// Return an array containing the largest number in each nested
/// array of numbers.  If array contains nothing, return null.
/// Use map and reduce to implement.

// largestNums([[4, 5, 1, 3, 10, 100], [13, 27, 18, 26], [32, 35, 37, 50, 39], [1000, 1001]]);
// => [ 100, 27, 50, 1001 ]

// largestNums([[], [2, 3, 1], [0]]);
// => [ null, 3, 0 ]


function largestNums(arr) {
/// TO DO: YOUR CODE HERE
}

///--------------------------------------------------------
///--------------------------------------------------------
/// DESTROYER (Difficulty: 2/5)
///--------------------------------------------------------
///--------------------------------------------------------

/// Tags: Higher-order functions, arrays

/// Function destroyer will take an initial array
/// (the first argument in the destroyer function), followed by
/// one or more arguments.  It will remove all elements from the
/// initial array that are of the same value as these arguments.
/// Use filter or reduce

// destroyer([1, 2, 3, 1, 2, 3], 3, 2);
// => [1, 1]
// destroyer([5, 0, 5, 1, 2, 10, 6, 6, 3, 5], 5, 6, 10);
// => [ 0, 1, 2, 3 ]
// destroyer([1, 2, 3], 5, 6, 10);
// => [ 1, 2, 3 ]
// destroyer([1, 2, 3]);
// => [ 1, 2, 3 ]

function destroyer(arr) {
/// YOUR CODE HERE
}


///--------------------------------------------------------
///--------------------------------------------------------
/// EUCLIDEAN VALUE (Difficulty: 3/5)
///--------------------------------------------------------
///--------------------------------------------------------

/// Tags: Higher-order functions, callbacks, arrays

/// Write a function merge that takes two arrays of equal length and returns a single array that merges the values as a result of a callback.

function merge(arr1, arr2, callback) {
  /// TO DO:YOUR CODE HERE
}

/// Write the callback function add
function add(a, b) {
  /// TO DO:YOUR CODE HERE
}

/// x = merge([1, 5, 3, 12], [4, 7, 13, 3], add)
/// x === [5, 12, 16, 15]


/// Write a function using merge and reduce to find the euclidean distance between two points in a two-dimensional space.
/// Equation for calculating hypotenuse:  sqrt ( legLength1^2 + legLength2^2 )

function euclid(point1, point2) {
  /// TO DO:YOUR CODE HERE
}

/// y = euclid([3, 5], [7, 2]);
/// y === 5


///--------------------------------------------------------
///--------------------------------------------------------
/// EXPAND (Difficulty: 3/5)
///--------------------------------------------------------
///--------------------------------------------------------

/// Tags: Higher-order functions, callbacks, arrays

/// Write a function expand that takes a function (callback) and value as parameters and returns an array containing the results of the callback. The callback function will always return a tuple OR null.  The first value in the tuple will be used as the value on the subsequent call, and the second value in the tuple will be added to the end of the array.  The function will continue running until the callback evaluates to null.

// let until20 = function(num) {
//   if (num > 20) {
//    return null;
//   } else {
//     return [num + 5, num]
//   }
// }
// expand(until20, 9);
// => [9, 14, 19]

function expand(callback, initVal) {
  /// TO DO: YOUR CODE HERE
}
