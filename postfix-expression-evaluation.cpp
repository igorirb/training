#include <iostream>
#include <stack>
#include <string>
#include <ctype.h>

using namespace std;

int evaluate(string input) {
  stack<int> S;
  for (int i = 0; i < input.size(); i++) {
    if (isdigit(input[i])) {
      S.push(input[i] - '0');
    } else {
      int val1 = S.top();
      S.pop();
      int val2 = S.top();
      S.pop();
      int result;
      if (input[i] == '+') {
        result = val1 + val2;
      } else if (input[i] == '-') {
        result = val2 - val1;
      } else if (input[i] == '*') {
        result = val1 * val2;
      } else if (input[i] == '/') {
        result = val2 / val1;
      }
      S.push(result);
    }
  }
  return S.top();
}

int main() {
  string input;

  cout << "Please type in the postfix expression: ";
  cin >> input;

  int result = evaluate(input);
  cout << "The result is: " << result << endl;

  return 0;
}