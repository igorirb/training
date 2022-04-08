#include <iostream>
#include <stack>

using namespace std;

struct Node {
  int data;
  Node* next;
};

Node* head;

void insert(int data, int position) {
  Node* temp = new Node();
  temp->data = data;
  if (head == NULL) {
    temp->next = NULL;
    head = temp;
  } else {
    Node* iterator = head;
    for (int i = 0; i < position - 2; i++) {
      if (iterator->next != NULL) {
        iterator = iterator->next;
      }
    }
    temp->next = iterator->next;
    iterator->next = temp;
  }
}

void print() {
  Node* iterator = head;
  while (iterator != NULL) {
    cout << iterator->data << " ";
    iterator = iterator->next;
  }
  cout << endl;
}

void reverse() {
  stack<Node*> S;
  Node* iterator = head;
  while (iterator != NULL) {
    S.push(iterator);
    iterator = iterator->next;
  }
  iterator = S.top();
  head = iterator;
  S.pop();
  while (!S.empty()) {
    iterator->next = S.top();
    iterator = iterator->next;
    S.pop();
  }
  iterator->next = NULL;
}

int main() {
  head = NULL;

  insert(5, 10);  // 5
  insert(3, 2);   // 5 3
  insert(9, 3);   // 5 3 9
  insert(4, 2);   // 5 4 3 9
  print();
  reverse();
  print();

  return 0;
}