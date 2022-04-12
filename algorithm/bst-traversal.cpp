#include <iostream>
#include <algorithm>
#include <queue>

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

bool search(Node* root, int value) {
  if (root == NULL) return false;
  if (root->data == value) return true;
  if (value > root->data) return search(root->right, value);
  if (value < root->data) return search(root->left, value);
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

void depthFirstPreorder(Node* node) {
  if(node != NULL) {
    cout << node->data;
    depthFirstPreorder(node->left);
    depthFirstPreorder(node->right);
  }
}

void depthFirstInorder(Node* node) {
  if(node != NULL) {
    depthFirstInorder(node->left);
    cout << node->data;
    depthFirstInorder(node->right);
  }
}

void depthFirstPostorder(Node* node) {
  if(node != NULL) {
    depthFirstPostorder(node->left);
    depthFirstPostorder(node->right);
    cout << node->data;
  }
}

void breadthFirst(Node* node) {
  queue<Node*> q;
  q.push(node);
  while (q.size() > 0) {
    Node* current = q.front();
    q.pop();
    if (current) {
      cout << current->data;
      q.push(current->left);
      q.push(current->right);
    }
  }
}

int main() {
  Node* root = NULL;
  insert(&root, 5);
  insert(&root, 3);
  insert(&root, 4);
  insert(&root, 7);
  insert(&root, 6);
  insert(&root, 10);
  insert(&root, 2);
  insert(&root, 11);

  printBT(root);
  depthFirstPreorder(root);
  cout << endl;
  depthFirstInorder(root);
  cout << endl;
  depthFirstPostorder(root);
  cout << endl;
  breadthFirst(root);
  cout << endl;

  return 0;
}