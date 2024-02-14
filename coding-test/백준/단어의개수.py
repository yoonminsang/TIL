# https://www.acmicpc.net/problem/1152

# 2024.02.14

import sys

input= sys.stdin.readline()
# input = 'The Curious Case of Benjamin Button';
# input = '  ';

trimInput = input.strip();
if trimInput:
    print(len(trimInput.split(' ')))
else:
    print(0)
