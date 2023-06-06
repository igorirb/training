// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function reverse(node) {
    let prev = node;
    let pointer = prev.next;
    prev.next = null;
    while (pointer) {
        const aux = pointer.next;
        pointer.next = prev;
        prev = pointer;
        pointer = aux;        
    }
    return prev;    
}
function getLength(node) {
    let i = 0;
    while (node) {
        i += 1;
        node = node.next;
    }
    return i;
}
function solution(a, b) {
    let lenA = getLength(a);
    let lenB = getLength(b);
    while (lenA > lenB) {
        const newNode = new ListNode(0);
        newNode.next = b;
        b = newNode;
        lenB += 1;
    }
    while (lenA < lenB) {
        const newNode = new ListNode(0);
        newNode.next = a;
        a = newNode;
        lenA += 1;
    }
    a = reverse(a);
    b = reverse(b);
    const result = [];
    let carry = 0;
    while (a !== null || b !== null) {
        const numA = (a && a.value) || 0;
        const numB = (b && b.value) || 0;
        const sum = numA + numB + carry;
        carry = Math.floor(sum / 10000);
        const part = sum - carry * 10000;
        result.unshift(part);
        a = (a && a.next);
        b = (b && b.next);
    }
    if (carry > 0) {
        result.unshift(carry);
    }
    return result;
}
