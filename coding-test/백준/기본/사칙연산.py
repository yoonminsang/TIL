# https://www.acmicpc.net/problem/10869

# 2024.02.14

import sys
import math

n, m = list(map(int, sys.stdin.readline().split()))
# n, m = list(map(int, '7 3'.split()))

print(n+m)
print(n-m)
print(n*m)
print(math.floor(n/m))
print(n%m)