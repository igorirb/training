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
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode* head = NULL;
        ListNode* it;
        while (list1 != NULL || list2 != NULL) {
            ListNode* aux;
            if (list1 == NULL) {
                aux = list2;
                list2 = list2->next;
                aux->next = NULL;
            } else if (list2 == NULL) {
                aux = list1;
                list1 = list1->next;
                aux->next = NULL;
            } else if (list1->val > list2->val) {
                aux = list2;
                list2 = list2->next;
                aux->next = NULL;
            } else if (list1->val < list2->val) {
                aux = list1;
                list1 = list1->next;
                aux->next = NULL;
            } else if (list2->val == list1->val) {
                ListNode* aux2;
                aux = list1;
                aux2 = list2;
                list1 = list1->next;
                list2 = list2->next;
                aux2->next = NULL;
                aux->next = aux2;
            }
            if (head == NULL) {
                head = aux;
                it = head;
            } else {
                it->next = aux;
            }
            while (it->next != NULL) {
                it = it->next;
            }
        }
        return head;
    }
};