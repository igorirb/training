#include <iostream>
#define MAX_SIZE 3

using namespace std;

int stack[MAX_SIZE];
int top = -1;

void push(int value) {
  if (top == MAX_SIZE - 1) {
    cout << "Max size exceeded" << endl;
    return;
  }
  stack[++top] = value;
}

void pop() {
  if (top == -1) {
    cout << "Stack is empty" << endl;
    return;
  }
  top--;
}

void print() {
  if (top == -1) {
    cout << "Stack is empty" << endl;
    return;
  }
  int idx = top;
  while (idx > -1) {
    cout << stack[idx] << " ";
    idx--;
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
  return 0;
}