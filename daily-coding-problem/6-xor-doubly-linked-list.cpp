// An XOR linked list is a more memory efficient doubly linked list.
// Instead of each node holding next and prev fields, it holds a field
// named both, which is an XOR of the next node and the previous node.
// Implement an XOR linked list; it has an add(element) which adds the
// element to the end, and a get(index) which returns the node at index.

// What is a XOR Linked List
// A XOR linked list is a memory efficient implementation of Doubly Linked
// List. As an ordinary Doubly Linked List requires space for two address
// fields to store the addresses of previous and next nodes. XOR Linked List
// uses bitwise XOR operation to save space for one address. In XOR Linked List,
// instead of storing actual memory addresses, every node stores the XOR of
// addresses of previous and next nodes.

// XOR of addresses
// Before we start discussing traversing in XOR Linked List. We should discuss
// that, how we can XORed two address ? As they are not normal integers, so we
// can not use XOR operator, we have to write our own method for it.

// Node* XOR(Node* node1, Node* node2) {
//   return (Node*)(uintptr_t(node1) ^ uintptr_t(node2)) ;  // uintptr_t in C++
// }

struct Node {
  int data;
  Node* np_ptr;
  Node (value) {
    data = value ;
    np_ptr = NULL;
  }
}

void traverse() {
  Node* curr = head ;     // in starting curr points(refer) to head
  Node* prev = NULL ;     // in starting previous is null

  // for forward travesal
  while (curr != NULL) {
    cout << curr->data << ' ';            // print curr data
    Node *next = XOR(prev, curr->np_ptr); // to get next node
    prev = curr ;                         // storing curr as prev
    curr = next ;                         // storing next as curr
  }

  cout << endl ;

  // for backward traversal
  // prev is pointing to last node after first while loop and
  // curr is NULL after first while loop
  while (prev != NULL) {
    cout << prev->data << " ";             // print prev data
    Node *next = XOR(curr, prev->np_ptr);  // to get next node
    curr = prev ;                          // storing prev as curr
    prev = next ;                          // storing next as prev
  }
}

void add(Node* ptr) {
  Node* tail;
  tail->np_ptr = XOR(prev, ptr);
}