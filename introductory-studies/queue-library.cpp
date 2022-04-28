#include<iostream>
#include<queue>

using namespace std;

int main() {
  queue<int> q;
  q.push(1);
  cout << q.front() << endl;
  q.push(6);
  cout << q.front() << endl;
  q.pop();
  cout << (q.empty() ? "Queue is empty" : to_string(q.front())) << endl;
  q.pop();
  cout << (q.empty() ? "Queue is empty" : to_string(q.front())) << endl;
  return 0;
}