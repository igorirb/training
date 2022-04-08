#include <iostream>
#include <string.h>

using namespace std;

class Stack {
  struct Node {
    char data;
    Node* next;
  };

  Node* head = NULL;

  public:

  void push(char value) {
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

  char top() {
    return head->data;
  }

  void print() {
    Node* iterator = head;
    while (iterator != NULL) {
      cout << iterator->data << " ";
      iterator = iterator->next;
    }
    cout << endl;
  }
};

void reverse(char* str, int length) {
  Stack S;

  for (int i = 0; i < length; i++) {
    S.push(str[i]);
  }

  for (int i = 0; i < length; i++) {
    str[i] = S.top();
    S.pop();
  }
}

int main() {
  char str[51];

  cout << "Please type in the string to be reversed: ";
  cin >> str;

  reverse(str, strlen(str));
  cout << "Reversed string: " << str << endl;

  return 0;
}