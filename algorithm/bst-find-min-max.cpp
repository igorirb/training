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

int findMin(Node* root) {
  if (root == NULL) {
    cout << "Tree is empty" << endl;
    return -1;
  }
  if (root->left) {
    return findMin(root->left);
  }
  return root->data;
}

int findMax(Node* root) {
  if (root == NULL) {
    cout << "Tree is empty" << endl;
    return -1;
  }
  if (root->right) {
    return findMax(root->right);
  }
  return root->data;
}

int main() {
  Node* root = NULL;

  cout << findMin(root) << endl;
  cout << findMax(root) << endl;

  insert(&root, 5);
  insert(&root, 3);
  insert(&root, 4);
  insert(&root, 7);
  insert(&root, 6);
  insert(&root, 10);
  insert(&root, 2);

  cout << findMin(root) << endl;
  cout << findMax(root) << endl;

  return 0;
}