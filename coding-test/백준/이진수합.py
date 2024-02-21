# https://www.acmicpc.net/problem/8741

# 2024.02.21

import sys

k = int(sys.stdin.readline())
# k = 3

n = 2**k-1
# 그냥 /하면 오류남
sumsum = n*(n+1)//2

print(bin(sumsum)[2:])
