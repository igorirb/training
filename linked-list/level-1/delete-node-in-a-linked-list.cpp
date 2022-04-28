/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    void deleteNode(ListNode* node) {
        ListNode* aux;
        while (node->next != NULL) {
            node->val = (node->next)->val;
            aux = node;
            node = node->next;
        }
        aux->next = NULL;
        delete node;
    }
};