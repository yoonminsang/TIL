# https://www.acmicpc.net/problem/2480

# 2024.02.14

import sys

a, b, c = list(map(int, sys.stdin.readline().split()))
# a, b, c = [3, 3, 6]
# a, b, c = [2, 2, 2];
# a, b, c = [6, 2, 5];

if(a==b and b==c):
    print(10000 + a * 1000)
elif(a==b):
    print(1000 + a * 100)
elif(b==c):
    print(1000 + b * 100)
elif(a==c):
    print(1000 + a * 100)
else:
    print(max(a,b,c) * 100)
