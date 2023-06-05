/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function TreeNode(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
}
function flatten(arr) {
    const len = arr.length;
    const res = [];
    for (let i = 0; i < len; i += 1) {
        let pointer = arr[i];
        while (pointer) {
            res.push(pointer.val);
            pointer = pointer.next;
        }
    }
    return res;
}
let head;
function visitNode(list, node) {
    if (!node) return list;
    const leftNode = visitNode(list, node.left);
    leftNode.next = new ListNode(node.val);
    const rightNode = visitNode(leftNode.next, node.right);
    return rightNode;
}
function addNode(root, item) {
    if (item <= root.val) {
        if (root.left) {
            addNode(root.left, item);
        } else {
            const newNode = new TreeNode(item, null, null);
            root.left = newNode;
        }
    } else if (root.right) {
        addNode(root.right, item);
    } else {
        const newNode = new TreeNode(item, null, null);
        root.right = newNode;
    }
}
var mergeKLists = function(lists) {
    let root = null;
    const flatList = flatten(lists);
    for (let i = 0; i < flatList.length; i += 1) {
        if (!root) {
            root = new TreeNode(flatList[i], null, null);
        } else {
            addNode(root, flatList[i]);
        }
    }
    head = new ListNode(null);
    visitNode(head, root);
    return head.next;
};