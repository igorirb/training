#include <iostream>

using namespace std;

struct Node {
  int data;
  Node* next;
};

Node* head = NULL;

void push(int value) {
  Node* newNode = new Node();
  newNode->data = value;
  newNode->next = head;
  head = newNode;
}

void pop() {
  if (head == NULL) {
    cout << "Stack is empty" << endl;
    return;
  }
  Node* poppedNode = head;
  head = head->next;
  delete poppedNode;
}

void print() {
  Node* iterator = head;
  while (iterator != NULL) {
    cout << iterator->data << " ";
    iterator = iterator->next;
  }
  cout << endl;
}

int main() {
  push(1);
  print();
  push(5);
  print();
  push(3);
  print();
  push(7);
  print();
  pop();
  print();
  pop();
  print();
  pop();
  print();
  pop();
  pop();
  return 0;
}