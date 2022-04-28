/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        if (head == NULL) return head;
        stack<ListNode*> s;
        ListNode* aux = head;
        while (aux != NULL) {
            s.push(aux);
            aux = aux->next;
        }
        head = s.top();
        aux = head;
        while (!s.empty()) {
            aux->next = s.top();
            s.pop();
            aux = aux->next;
        }
        aux->next = NULL;
        return head;
    }
};