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

Node* findMax(Node* temp) {
  while (temp->right != NULL) {
    temp = temp->right;
  }
  return temp;
}

Node* deleteNode(Node* root, int value) {
  if (root == NULL) return root;
  if (root->data < value) {
    root->right = deleteNode(root->right, value);
  } else if (root->data > value) {
    root->left = deleteNode(root->left, value);
  } else {
    if (root->left == NULL && root->right == NULL) {
      delete root;
      root = NULL;
    } else if (root->left == NULL) {
      Node* temp = root;
      root = root->right;
      delete temp;
    } else if (root->right == NULL) {
      Node* temp = root;
      root = root->left;
      delete temp;
    } else {
      Node* temp = findMax(root->left);
      root->data = temp->data;
      root->left = deleteNode(root->left, temp->data);
    }
  }
  return root;
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
  deleteNode(root, 4);
  deleteNode(root, 3);
  deleteNode(root, 10);
  printBT(root);

  return 0;
}