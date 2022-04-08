#include <iostream>
#include <string>

using namespace std;

struct Node {
  int data;
  Node* left;
  Node* right;
};

void insert(Node** root, int value) {
  if (*root == NULL) {
    Node* newNode = new Node();
    newNode->data = value;
    newNode->left = newNode->right = NULL;
    *root = newNode;
  } else if ((*root)->data < value) {
    insert(&(*root)->right, value);
  } else if ((*root)->data > value) {
    insert(&(*root)->left, value);
  }
}

void print(Node* root) {
  if (root == NULL) return;
  cout << root->data << endl;
  print(root->left);
  print(root->right);
}

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

bool search(Node* root, int value) {
  if (root == NULL) return false;
  if (root->data == value) return true;
  if (value > root->data) return search(root->right, value);
  if (value < root->data) return search(root->left, value);
}

int main() {
  Node* root = NULL;
  insert(&root, 5);
  insert(&root, 3);
  insert(&root, 4);
  insert(&root, 7);
  insert(&root, 6);
  insert(&root, 10);
  // print(root);
  printBT(root);
  cout << endl;

  int value;
  cout << "What value do you want to search? ";
  cin >> value;
  cout << "Value is " << (search(root, value) ? "" : "not ") << "present" << endl;
  return 0;
}