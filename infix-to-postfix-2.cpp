#include <iostream>
#include <stack>
#include <string>

using namespace std;

int precedence(char c) {
  if (c == '^') {
    return 3;
  } else if (c == '*' || c == '/') {
    return 2;
  } else if (c == '+' || c == '-') {
    return 1;
  }
  return 0;
}

string convert(string infix) {
  stack<char> S;
  S.push('#');

  string::iterator it;
  string output = "";

  for (it = infix.begin(); it != infix.end(); it++) {
    if (isalnum(*it)) {
      output += *it;
    } else if (*it == '(') {
      S.push(*it);
    } else if (*it == ')') {
      while (S.top() != '#' && S.top() != '(') {
        output += S.top();
        S.pop();
      }
      S.pop();
    } else {
      if (precedence(*it) > precedence(S.top())) {
        S.push(*it);
      } else {
        while (S.top() != '#' && precedence(*it) <= precedence(S.top())) {
          output += S.top();
          S.pop();
        }
        S.push(*it);
      }
    }
  }
  while (S.top() != '#') {
    output += S.top();
    S.pop();
  }
  return output;
}

int main() {
  string input;

  cout << "Please type the expression to be converted: ";
  cin >> input;

  string output = convert(input);
  cout << "The converted expression is: " << output << endl;

  return 0;
}