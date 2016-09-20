

///--------------------------------------------------------
///--------------------------------------------------------
/// BALANCED PARENTHESES (USING STACKS)
///--------------------------------------------------------
///-------------------------------------------------------
/// Tags: Data structures, stacks, arrays
///
/// Description: Given a string of parentheses and brackets, determine if the parentheses are balanced
/// Balanced is having both an open '(' and closing ')' parentheses.
/// Assume first paren is open.
/// Must use Stack class implementation to solve - do not use array methods
///
// balancedParens('{(())'); // false
// balancedParens('{(())}'); // true
// balancedParens('))(('); // false
// balancedParens('[][](())'); // true
///
///--------------------------------------------------------
/// ABSTRACT IMPLEMENTATION OF A STACK W/O ARRAY METHODS
///--------------------------------------------------------
///
/// Use to solve Balanced Parens

var Stack = function() {
  this.dataStore = [];
  this.top = 0;
};

Stack.prototype = (function(){
  var push = function(element) {
  	this.dataStore[this.top++] = element;
  };

  var pop = function() {
  	var popped = null;
  	if (this.top > 0) {
  	  popped = this.dataStore[--this.top];
  	  delete this.dataStore[this.top];
  	}
  	return popped;
  };

  var peek = function() {
    return this.top > 0 ? this.dataStore[this.top-1] : null;
  };

  var length = function() {
  	return this.top;
  };

  var clear = function() {
  	this.top = 0;
  	this.dataStore = [];
  };

  var isEmpty = function() {
    return this.top < 1;
  };

  return {
    constructor: Stack,
    push: push,
    pop: pop,
    peek: peek,
    length: length,
    clear: clear,
    isEmpty: isEmpty
  };
})();

///--------------------------------------------------------
/// START HERE: Use Stack class to solve balancedParens()
///--------------------------------------------------------

var balancedParens = function(parenString) {
/// YOUR CODE HERE

};


///--------------------------------------------------------
///--------------------------------------------------------
/// BINARY TREE LEVELING
///--------------------------------------------------------
///-------------------------------------------------------
/// Tags: Data structures, binary trees, linked lists, breadth-first
///
/// Description: Given a binary tree, design an algorithm which creates a
/// linked list of all the nodes at each depth
/// (e.g., if you have a tree with depth D, you'll have D linked lists)
///
//(0)                      Kayla a
//(1)            Hailey b             Julia c
//(2)     Jacob  d      Chrissy e     (no children)
//(3) Mo f  Larry g   Andrew h   Ben  i
//
// binTreeLevel([ {value: Kayla, next:null}, {value: Haily, next:
//              {value: Julia, next: null}}, {value: Jacob, next:
//              {value: Chissy, next: null}}, {value: Mo, next:
//              {value: Larry, next: {value: Andrew, next: {value: Ben, next:
//              null}}}} ])
///
///--------------------------------------------------------
/// IMPLEMENTATION OF A QUEUE, LINKEDLIST, AND TREE CLASSES
///--------------------------------------------------------
///
const Queue = function() {
  this.queue = [];
  this.size = 0;
}

Queue.prototype.enqueue = function(value) {
  this.size++;
  return this.queue.push(value);
};
Queue.prototype.dequeue = function() {
  this.size--
  return this.queue.shift();
};
Queue.prototype.peek = function() {
  let first = this.queue[0];
  if (!first) {
    return 'No value';
  }
  return first;
};
Queue.prototype.isEmpty = function() {
  return this.queue.length === 0;
};

// ==========================================

const LinkedList = function() {
  this.head = null;
  this.length = 0;
}
const Node = function(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function(val) {
  let pointer = this.head;
  let node = new Node(val);

  if (pointer === null) {
    this.head = node;
  } else {
    while (pointer.next) {
      pointer = pointer.next;
    }
    pointer.next = node;
  }
  this.length++
}


let Tree = function(root) {
  this.root = root;
  this.children = [];
}


Tree.prototype.addChild = function(child) {
  if(!this.isDescendant(child)){
    this.children.push(child);
  } else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
}
Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  } else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
}

///--------------------------------------------------------
/// START HERE: Use Tree, Queue, and LinkedList classes to solve binTreeLevel
///--------------------------------------------------------

var binTreeLevel = function(tree) {
  /// YOUR CODE HERE
  var q = new Queue();
  var listOfNodesPerLevel = [];
  tree.level = 0
  q.enqueue(tree);

  while (!q.isEmpty()) {
    //continue traversing breadth first by selecting from queue
    var node = q.dequeue();
    if (listOfNodesPerLevel[node.level] === undefined) {
      //if there is no value yet at the current node level, create new linked list
      var list = new LinkedList();
      list.add(node.root);
      listOfNodesPerLevel.push(list)
    } else {
      //otherwise, add value to linkedlist
      listOfNodesPerLevel[node.level].add(node.root);
    }
    var kids = node.children;
      //add each child of node to queue
      for (var i = 0; i < kids.length; i++) {
        kids[i].level = node.level+1;
        q.enqueue(kids[i]);
      }
  }
  return listOfNodesPerLevel;
};
