# https://www.acmicpc.net/problem/1085

# 2024.02.14

import sys

x,y,w,h = list(map(int, sys.stdin.readline().split()))

print(min(w - x, x, h - y, y))
