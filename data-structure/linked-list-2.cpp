#include <iostream>
using namespace std;

struct Node {
  int data;
  Node* next;
};

Node* head;

void print() {
  Node* iterator = head;
  while (iterator != NULL) {
    cout << iterator->data << " ";
    iterator = iterator->next;
  }
  cout << endl;
}

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

void remove(int position) {
  if (head != NULL) {
    Node* iterator = head;
    if (position == 1) {
      head = iterator->next;
      delete iterator;
      return;
    }
    for (int i = 0; i < position - 2; i++) {
      if (iterator->next != NULL) {
        iterator = iterator->next;
      }
    }
    Node* nextNode = iterator->next;
    if (nextNode != NULL) {
      iterator->next = nextNode->next;
      delete nextNode;
    }
  } else {
    cout << "There is nothing to remove" << endl;
  }
}

void reverse() {
  Node *current, *prev, *next;
  prev = NULL;
  current = head;
  while (current != NULL) {
    next = current->next;
    current->next = prev;
    prev = current;
    current = next;
  }
  head = prev;
}

void removeByValue(int data) {
  if (head != NULL) {
    Node* iterator = head;
    Node* before;
    while (iterator != NULL) {
      if (iterator->data == data) {
        if (before == NULL) {
          head = iterator->next;
        } else {
          before->next = iterator->next;
        }
        delete iterator;
        return;
      }
      before = iterator;
      iterator = iterator->next;
    }
  } else {
    cout << "There is nothing to remove" << endl;
  }
}

void printRecursive(Node* node) {
  if (node != NULL) {
    cout << node->data << " ";
    printRecursive(node->next);
  }
}

void printReverseRecursive(Node* node) {
  if (node != NULL) {
    printReverseRecursive(node->next);
    cout << node->data << " ";
  }
}

void reverseRecursive(Node* prev, Node* current) {
  if (current != NULL) {
    Node* next = current->next;
    current->next = prev;
    prev = current;
    current = next;
    reverseRecursive(prev, current);
  } else {
    head = prev;
  }
}

int main() {
  head = NULL;

  insert(5, 10);  // 5
  insert(3, 2);   // 5 3
  insert(9, 3);   // 5 3 9
  insert(4, 2);   // 5 4 3 9
  print();

  removeByValue(5);
  print();

  remove(2);
  print();
  remove(1);
  print();

  removeByValue(10);
  print();
  removeByValue(9);
  print();

  insert(5, 10);  // 5
  insert(3, 2);   // 5 3
  insert(9, 3);   // 5 3 9
  insert(4, 2);   // 5 4 3 9
  reverse();
  printRecursive(head);
  cout << endl;
  printReverseRecursive(head);
  cout << endl;

  reverseRecursive(NULL, head);
  print();

  return 0;
}