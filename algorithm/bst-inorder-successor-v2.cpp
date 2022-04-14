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

Node* findMin(Node* temp) {
  if (temp == NULL) return NULL;
  while (temp->left != NULL) {
    temp = temp->left;
  }
  return temp;
}

Node* find(Node* temp, int value) {
  if (temp == NULL) return NULL;
  if (value > temp->data) {
    return find(temp->right, value);
  } else if (value < temp->data) {
    return find(temp->left, value);
  }
  return temp;
}

Node* findSuccessor(Node* root, int value) {
  Node* current = find(root, value);
  if (current == NULL) return NULL;
  if (current->right != NULL) {
    return findMin(current->right);
  }
  Node* ancestor = root;
  Node* successor = NULL;
  while (ancestor != successor && ancestor != NULL) {
    if (ancestor->data > current->data) {
      successor = ancestor;
      ancestor = ancestor->left;
    } else {
      ancestor = ancestor->right;
    }
  }
  return successor;
}

int main() {
  Node* root = NULL;
  insert(&root, 6);
  insert(&root, 4);
  insert(&root, 9);
  insert(&root, 2);
  insert(&root, 11);
  insert(&root, 3);
  insert(&root, 1);
  printBT(root);

  int input;
  cout << "Input a number to get its successor: ";
  cin >> input;

  Node* result = findSuccessor(root, input);
  cout << "The successor of " << input << " is " << (result != NULL ? result->data : -1) << endl;
  return 0;
}