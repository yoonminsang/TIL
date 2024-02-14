# https://www.acmicpc.net/problem/2439

# 2024.02.14

import sys

n= int(sys.stdin.readline())
# n = 5

for i in range(1, n + 1):
  print(' ' * (n - i) + '*' * i)

