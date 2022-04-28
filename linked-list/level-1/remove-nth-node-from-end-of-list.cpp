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
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        stack<ListNode*> s;
        ListNode* aux = head;
        while (aux != NULL) {
            s.push(aux);
            aux = aux->next;
        }
        int size = s.size();
        if (size == n) {
            aux = head;
            head = head->next;
            aux = NULL;
        } else {
            ListNode* curr;
            while (n > 0) {
                curr = s.top();
                s.pop();
                n -= 1;
            }
            ListNode* prev = s.top();
            prev->next = curr->next;
            curr = NULL;
        }
        return head;
    }
};