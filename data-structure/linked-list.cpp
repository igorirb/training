#include <iostream>
using namespace std;

struct Node {
  int value;
  Node* next;
};

void push (Node* head, int value) {
  Node* temp = new Node();
  temp->value = value;
  temp->next = NULL;

  Node* pointer = head;
  while (pointer->next != NULL) {
    pointer = pointer->next;
  }
  pointer->next = temp;
}

void shift (Node** head, int value) {
  Node* temp = new Node();
  temp->value = value;
  temp->next = *head;

  *head = temp;
}

void printList (Node* head) {
  Node* pointer = head;
  while (pointer != NULL) {
    cout << pointer->value << endl;
    pointer = pointer->next;
  }
}

int main() {
  Node* head;

  // Node* temp = (Node*) malloc(sizeof(Node));
  Node* temp = new Node();
  temp->value = 1;
  temp->next = NULL;
  head = temp;

  push(head, 2);
  push(head, 3);
  push(head, 4);
  shift(&head, 5);

  printList(head);

  return 0;
}
