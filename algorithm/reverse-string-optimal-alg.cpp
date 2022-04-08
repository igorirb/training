#include <iostream>
#include <string.h>

using namespace std;

void reverse(char* str, int length) {
  int i = 0;
  int j = length - 1;
  while (i != j) {
    char aux = str[i];
    str[i] = str[j];
    str[j] = aux;
    i++;
    j--;
  }
}

int main() {
  char str[51];

  cout << "Please type in the string to be reversed: ";
  cin >> str;

  reverse(str, strlen(str));
  cout << "Reversed string: " << str << endl;

  return 0;
}