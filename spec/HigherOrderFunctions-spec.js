describe("FUN WITH HIGHER ORDER FUNCTIONS!", function() {

  describe("ARRAY OF OBJECTS", function() {
    var people = [
      {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, gender:'female', age: 26},
      {name: {first: "Ben", last: "Bitdiddle"}, gender:'male', age: 34},
      {name: {first: "Eva", middle: "Lu", last: "Ator"}, gender:'female', age: 40},
      {name: {first: "Lem", middle: "E.", last: "Tweakit"}, gender:'male', age: 45},
      {name: {first: "Louis", last: "Reasoner"}, gender:'male', age: 21}
    ];

    describe("Average Age", function() {

    });

    describe("Sum of Men", function() {

    });

    describe("Over 35", function() {

    });

    describe("Last Name", function() {

    });

    describe("Feamle Name Length", function() {

    });

    describe("Female Under 37", function() {

    });
  });

  describe("PRINT ODDS", function() {
    var x = {a: 6, b: 33, c: 12, d: 3};
    var y = {a: 1, b: 0, c: 1, d: 0};
    var z = {a: 2, b: 4, c: 6, d: 8};

    it("should return an array", function() {
      expect(Array.isArray(printOdds(x))).toEqual(true);
    });

    it("should return an array of odd numbers", function() {
      expect(printOdds(x)).toEqual([33, 3]);
      expect(printOdds(y)).toEqual([1, 1]);
    });

    it("should return an empty array if no odd numbers found", function() {
      expect(printOdds(z)).toEqual([]);
      expect(printOdds({})).toEqual([]);
    });
  });

  describe("LARGEST BOX ART", function() {
    var boxarts = [
        { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
        { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
        { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
        { width: 425, height:150, url:"http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
    ];

    var boxarts2 = [
        { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
        { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
        { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
        { width: 425, height:150, url:"http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" },
        { width: 150, height:425, url:"http://cdn-0.nflximg.com/images/2891/Fracture420.jpg" }
    ];
    it("should return an array", function() {
      expect(largest(boxarts)).toEqual(true);
    });
    it("should return url of largest box art", function() {
      expect(largest(boxarts)).toEqual(["http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"]);
    });
    it("should return all url's of largest boxarts", function() {
      expect(largest(boxarts)).toEqual(["http://cdn-0.nflximg.com/images/2891/Fracture425.jpg", "http://cdn-0.nflximg.com/images/2891/Fracture420.jpg"]);
    });
  });

  describe("OBJECT SOME", function() {
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
    it("should return an array", function() {
      expect(Array.isArray(objectSome(obj1, { "a": 1, "c": 2 }))).toEqual(true);
    });
    it("should return array of all objects with matching key value pairs", function() {
      expect(objectSome(obj1, { "a": 1, "c": 2 })).toEqual([{ "a": 1, "b": 2, "c": 2 }]);
      expect(objectSome(obj2, { last: "Capulet" })).toEqual([{ first: "Tybalt", last: "Capulet" }]);
    });
  });

  describe("LARGEST NUMS", function() {
    it("should return an array of largest numbers per array element", function() {
      expect(largestNums([[4, 5, 1, 3, 10, 100], [13, 27, 18, 26], [32, 35, 37, 50, 39], [1000, 1001]])).toEqual([100, 27, 50, 1001]);
      expect(largestNums([[-2, 5, 6, 9], [2, 3, 1], [0, 5]])).toEqual([9, 3, 5]);
      expect(largestNums([[-2, -5, -1], [-2, -3, -1], [-6, -5]])).toEqual([-1, -1, -5]);
      expect(largestNums([[5], [6], [7], [8]])).toEqual([5, 6, 7, 8]);
    });
    it("should return null for empty arrays", function() {
      expect(largestNums([[], [2, 3, 1], [0]])).toEqual([ null, 3, 0 ]);
      expect(largestNums([])).toEqual(null);
    });
  });

  describe("DESTROYER", function() {
    it("should take any number of arguments and return destroyed array", function() {
      expect(destroyer([5, 0, 5, 1, 2, 10, 6, 6, 3, 5], 5, 6, 10)).toEqual([0, 1, 2, 3]);
      expect(destroyer([1, 2, 3, 1, 2, 3], 3, 2)).toEqual([1, 1]);
      expect(destroyer([1, 2, 3])).toEqual([1, 2, 3]);
    });
    it("should return original array if does not contain 'destroyer' numbers", function() {
      expect(destroyer(destroyer([1, 2, 3], 5, 6, 10))).toEqual([1, 2, 3]);
    });
    it("should return empty array if all elements are destroyed", function() {
      expect(destroyer(destroyer([1, 2, 3], 1, 2, 3))).toEqual([]);
    });
  });

  describe("EUCLID", function() {
    it("should return a number", function() {
      expect(typeof euclid([0,0],[3,5])).toEqual('number');
      expect(typeof euclid([-1,-5],[2,10])).toEqual('number');
    });
    it("should return the euclidean length between two points", function() {
      let x = [0,5];
      let y = [3,9];
      expect(euclid(x,y)).toEqual(5);
    });
  });

  describe("EXPAND", function() {
    let untilZero = function(string) {
      let len = string.length;
      let sliver = string[0];
      return (len > 0) ? [string.slice(1), sliver] : null;
    };
    it("should return an array", function() {
      expect(Array.isArray(expand(untilZero, 'apples'))).toEqual(true);
    });
    it("stop calling callback once the result is null", function() {
      let numberRuns = 0;
      let random = function(val) {
        if (val >= 90) {
          return null;
        } else {
          numberRuns++;
          return [ Math.random()*100, 'Did not ace']
        }
      }
      var result = expand(random, 0);
      expect(result.length).toEqual(numberRuns);
    });
    it("should use first value of tuple as the argument to the subsequent callback and return an array containing results of callback", function() {
      // [use this as callback input to next call, use this to add to array]
      let increase = function(val) {
        if (val >=10) {
          return null;
        } else {
          return [ val + 5 , val ]
        }
      }
      expect(expand(increase, 1)[0]).toEqual(1);
      expect(expand(increase, 1)[1]).toEqual(6);
    });
  });

});
