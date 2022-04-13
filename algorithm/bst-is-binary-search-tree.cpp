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

bool isSubtreeLesser(Node* root, int value) {
  if (root == NULL) return true;
  if (
    root->data <= value
    && isSubtreeLesser(root->left, value)
    && isSubtreeLesser(root->right, value)
  ) {
    return true;
  }
  return false;
}

bool isSubtreeGreater(Node* root, int value) {
  if (root == NULL) return true;
  if (
    root->data >= value
    && isSubtreeGreater(root->left, value)
    && isSubtreeGreater(root->right, value)
  ) {
    return true;
  }
  return false;
}

bool isBinarySearchTree(Node* root) {
  if (root == NULL) return true;
  if (
    isSubtreeLesser(root->left, root->data)
    && isSubtreeGreater(root->right, root->data)
    && isBinarySearchTree(root->left)
    && isBinarySearchTree(root->right)
  ) {
    return true;
  }
  return false;
}

bool isBinarySearchTree(Node* root, int minValue, int maxValue) {
  if (root == NULL) return true;
  if (
    root->data > minValue
    && root->data < maxValue
    && isBinarySearchTree(root->left, minValue, root->data)
    && isBinarySearchTree(root->right, root->data, maxValue)
  ) {
    return true;
  }
  return false;
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
  cout << "Is binary search tree? " << (isBinarySearchTree(root) ? "true" : "false") << endl;
  cout << "Is binary search tree? " << (isBinarySearchTree(root, INT32_MIN, INT32_MAX) ? "true" : "false") << endl;

  return 0;
}