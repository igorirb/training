class Solution {
public:
    vector<string> fizzBuzz(int n) {
        vector<string> answer;
        for (int i = 0; i < n; i += 1) {
            answer.push_back("");
            if ((i + 1) % 3 == 0) {
                answer[i] += "Fizz";
            }
            if ((i + 1) % 5 == 0) {
                answer[i] += "Buzz";
            }
            if (answer[i] == "") {
                answer[i] += to_string(i + 1);
            }
        }
        return answer;
    }
};