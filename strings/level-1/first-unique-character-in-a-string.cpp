struct Node {
  char character;
  int counter;
  int firstPosition;
  Node* next;
};
void insertNode(Node** head, char c, int position) {
  if (*head == NULL) {
    Node* newNode = new Node();
    newNode->character = c;
    newNode->counter = 1;
    newNode->firstPosition = position;
    newNode->next = NULL;
    *head = newNode;
  } else if ((*head)->character == c) {
    (*head)->counter += 1;
  } else {
    insertNode(&(*head)->next, c, position);
  }
}
class Solution {
public:
  int firstUniqChar(string s) {
    Node* head = NULL;
    int size = s.size();
    for (int i = 0; i < size; i += 1) {
      insertNode(&head, s[i], i);
    }
    int response = -1;
    Node* aux = head;
    while (aux != NULL) {
      if (aux->counter == 1) {
        response = aux->firstPosition;
        break;
      }
      aux = aux->next;
    }
    return response;
  }
};