#include <iostream>
#include <string>
#include <stack>

using namespace std;

bool checkBalance(string str) {
  stack<char> S;

  for (int i = 0; i < str.size(); i++) {
    if (
      (str[i] == ')' && (S.empty() || S.top() != '('))
      || (str[i] == ']' && (S.empty() || S.top() != '['))
      || (str[i] == '}' && (S.empty() || S.top() != '{'))
    ) {
      return false;
    }
    if (
      str[i] == '('
      || str[i] == '['
      || str[i] == '{'
    ) {
      S.push(str[i]);
    }
    if (
      (str[i] == ')' && S.top() == '(')
      || (str[i] == ']' && S.top() == '[')
      || (str[i] == '}' && S.top() == '{')
    ) {
      S.pop();
    }
  }

  if (!S.empty()) {
    return false;
  }

  return true;
}

int main() {
  char str[51];

  cout << "Please type in the expression to be checked: ";

  cin >> str;

  bool result = checkBalance(str);
  cout << "Expression is " << (result ? "" : "not ") << "balanced" << endl;

  return 0;
}