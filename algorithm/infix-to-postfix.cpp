#include <iostream>
#include <stack>
#include <string>

using namespace std;

string convert(string input) {
  stack<char> S;
  string output = "";
  for (int i = 0; i < input.size(); i++) {
    if (
      input[i] == '+'
      || input[i] == '-'
      || input[i] == '*'
      || input[i] == '/'
    ) {
      S.push(input[i]);
    } else {
      output += input[i];
      if (S.size() > 0 && (S.top() == '*' || S.top() == '/')) {
        while (S.size() > 0) {
          output += S.top();
          S.pop();
        }
      }
    }
  }
  while (S.size() > 0) {
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