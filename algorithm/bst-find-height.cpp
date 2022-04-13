#include <iostream>
#include <algorithm>

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

int findHeight(Node* root) {
  if (root == NULL) {
    return -1;
  }
  return 1 + max(findHeight(root->left), findHeight(root->right));
}

int main() {
  Node* root = NULL;

  cout << "Tree's height is equal to " << findHeight(root) << endl;

  insert(&root, 5);

  cout << "Tree's height is equal to " << findHeight(root) << endl;

  insert(&root, 3);
  insert(&root, 4);
  insert(&root, 7);
  insert(&root, 6);
  insert(&root, 10);
  insert(&root, 2);
  insert(&root, 11);
  printBT(root);

  cout << "Tree's height is equal to " << findHeight(root) << endl;

  return 0;
}