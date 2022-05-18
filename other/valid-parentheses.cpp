class Solution {
public:
    bool isValid(string s) {
        int size = s.size();
        stack<char> temp;
        for (int i = 0; i < size; i += 1) {
            if (s[i] == '(' || s[i] == '[' || s[i] == '{') temp.push(s[i]);
            else if (s[i] == ')') {
                if (temp.size() == 0 || temp.top() != '(') {
                    return false;
                } else {
                    temp.pop();
                }
            } else if (s[i] == ']') {
                if (temp.size() == 0 || temp.top() != '[') {
                    return false;
                } else {
                    temp.pop();
                }
            } else if (s[i] == '}') {
                if (temp.size() == 0 || temp.top() != '{') {
                    return false;
                } else {
                    temp.pop();
                }
            }
        }
        if (temp.size() > 0) return false;
        return true;
    }
};