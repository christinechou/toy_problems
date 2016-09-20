describe("DATA STRUCTURES", function() {

  describe("STACKS", function() {

    describe("BALANCED PARENTHESES", function() {

      it("should return a Boolean", function() {
        expect(typeof(balancedParens('[]'))).toEqual('boolean');
      });

      it ('should check for balanced parentheses', function() {
        expect(balancedParens('()')).toEqual(true);
        expect(balancedParens(')(')).toEqual(false);
        expect(balancedParens('())')).toEqual(false);
        expect(balancedParens('(')).toEqual(false);
      });

      it ('should work for brackets', function() {
        expect(balancedParens('{(())')).toEqual(false);
        expect(balancedParens('{(())}')).toEqual(true);
        expect(balancedParens('{[]}')).toEqual(true);
        expect(balancedParens('[]{}()[]')).toEqual(true);
        expect(balancedParens('][')).toEqual(false);
      });

    });
  });

  describe("MIXED", function() {

    describe("BINARY TREE LEVELING", function() {

      let a = new Tree('Anthony');
      let b = new Tree('Becky');
      let c = new Tree('Christine');
      let d = new Tree('David');
      let e = new Tree('Eliza');
      let f = new Tree('Fitzgerald');
      let g = new Tree('Guy');
      let h = new Tree('Hagrid');
      a.addChild(b);
      a.addChild(c);
      b.addChild(d);
      b.addChild(e);
      d.addChild(f);
      e.addChild(g);

      it("should return an array", function() {
        expect(Array.isArray(binTreeLevel(a))).toEqual(true);
      });

      it('should contain linked lists', function() {
        console.log('bin tree:',binTreeLevel(d)[0])
        expect(binTreeLevel(a)[0].head).toBeDefined();
        expect(binTreeLevel(a)[1].head).toBeDefined();
      });

      it('should contain a linked list for every level', function() {
        expect(binTreeLevel(a).length).toEqual(4);
        expect(binTreeLevel(e).length).toEqual(2);
        expect(binTreeLevel(g).length).toEqual(1);
        expect(binTreeLevel(h).length).toEqual(1);
      });

    });
  });

});
