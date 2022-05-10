class ListNode {
  constructor(data) {
      this.data = data
      this.next = null                
  }
}

var MinStack = function() {
  this.stack = [];
  this.sequence = null;
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  this.stack.push(val);
  const newNode = new ListNode(val);
  if (!this.sequence) {
      this.sequence = newNode;
  } else {
      let aux = this.sequence;
      if (aux.data > val) {
          newNode.next = aux;
          this.sequence = newNode;
      } else {
          while (aux.next && aux.next.data < val) {
              aux = aux.next;
          }
          if (aux.next) {
              newNode.next = aux.next;
          }
          aux.next = newNode;
      }
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  const val = this.stack.pop();
  let aux = this.sequence;
  if (!aux.next) {
      delete aux;
      this.sequence = null;
  } else if (aux.data === val) {
      this.sequence = aux.next;
      delete aux;
  } else {
      while (aux.next.data != val) {
          aux = aux.next;
      }
      const delNode = aux.next;
      aux.next = delNode.next;
      delete delNode;
  }
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  if (!this.sequence) return null;
  return this.sequence.data;
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/