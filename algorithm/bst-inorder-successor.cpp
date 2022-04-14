#include <iostream>
#include <string>
#include <queue>
#include <stack>

using namespace std;

struct Node {
  int data;
  Node* left;
  Node* right;
};

stack<int> s;

void printBT(string prefix, Node* node, bool isLeft) {
  if(node != NULL) {
    cout << prefix;
    cout << (isLeft ? "├──" : "└──" );

    // print the value of the node
    cout << node->data << endl;

    // enter the next tree level - left and right branch
    printBT(prefix + (isLeft ? "│   " : "    "), node->left, true);
    printBT(prefix + (isLeft ? "│   " : "    "), node->right, false);
  }
}

void printBT(Node* node) {
  printBT("", node, false);    
}

void insert(Node** root, int value) {
  if (*root == NULL) {
    Node* temp = new Node();
    temp->data = value;
    temp->left = NULL;
    temp->right = NULL;
    *root = temp;
  } else if (value > (*root)->data) {
    insert(&(*root)->right, value);
  } else if (value < (*root)->data) {
    insert(&(*root)->left, value);
  }
}

void inorderSuccessorUtil(Node* root, int value) {
  if (root == NULL) return;
  inorderSuccessorUtil(root->left, value);
  if (s.size() == 0 || s.top() <= value) {
    s.push(root->data);
  } else {
    return;
  }
  inorderSuccessorUtil(root->right, value);
}

int inorderSuccessor(Node* root, int value) {
  inorderSuccessorUtil(root, value);
  int result = s.top();
  s.pop();
  return (s.empty() || s.top() != value) ? -1 : result;
}

int main() {
  Node* root = NULL;
  insert(&root, 6);
  insert(&root, 4);
  insert(&root, 9);
  insert(&root, 2);
  insert(&root, 11);
  insert(&root, 3);
  printBT(root);

  int input;
  cout << "Input a number to get its successor: ";
  cin >> input;
  cout << "The successor of " << input << " is " << inorderSuccessor(root, input) << endl;
  return 0;
}