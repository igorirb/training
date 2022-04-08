#include<iostream>

using namespace std;

struct Node {
  int data;
  Node* next;
};

Node* front = NULL;
Node* rear = NULL;

void enqueue(int value) {
  Node* temp = new Node();
  temp->data = value;
  temp->next = NULL;
  if (front == NULL && rear == NULL) {
    front = rear = temp;
    return;
  }
  rear->next = temp;
  rear = temp;
}

void dequeue() {
  if (front != NULL) {
    Node* temp = front;
    if (front == rear) {
      front = rear = NULL;
    } else {
      front = temp->next;
    }
    delete temp;
  }
}

int first() {
  if (front != NULL) {
    return front->data;
  }
  return NULL;
}

int main() {
  enqueue(1);
  cout << first() << endl;
  enqueue(6);
  cout << first() << endl;
  dequeue();
  cout << first() << endl;
  dequeue();
  cout << first() << endl;
  return 0;
}