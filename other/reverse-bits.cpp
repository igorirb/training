class Solution {
public:
    uint32_t reverseBits(uint32_t n) {
        vector<int> binary;
        while (n > 0) {
            if (n % 2 == 1) {
                binary.push_back(1);
                n = (n - 1) / 2;
            } else {
                binary.push_back(0);
                n = n / 2;
            }
        }
        for (int i = binary.size(); i < 32; i += 1) {
            binary.push_back(0);
        }
        uint32_t answer = 0;
        int size = binary.size();
        for (int i = 0; i < size; i += 1) {
            answer += binary[i] * pow(2, size - 1 - i);
        }
        return answer;
    }
};