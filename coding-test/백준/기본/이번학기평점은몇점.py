# https://www.acmicpc.net/submit/2755

# 2024.02.22

import sys
from functools import reduce

n = int(sys.stdin.readline())
inputArr = [sys.stdin.readline().strip() for i in range(n)]
# inputArr = """General_Physics_1 3 A+
# Introduction_to_Computer_Science_and_Eng 3 B0
# Reading_And_Writing 2 C0
# English_1 3 C+
# Analytic_Geometry_and_Calculus_1 3 B+
# Fortran_Programming 3 B+
# C_Language_Programming 3 A+
# """.strip().split('\n')

def get_grade_to_number(grade):
  grade_dictionary = {
    'A+': 4.3,
    'A0': 4.0,
    'A-': 3.7,
    'B+': 3.3,
    'B0': 3.0,
    'B-': 2.7,
    'C+': 2.3,
    'C0': 2.0,
    'C-': 1.7,
    'D+': 1.3,
    'D0': 1.0,
    'D-': 0.7,
    'F': 0.0,
  }
  return grade_dictionary.get(grade, "Invalid Grade")  # 성적이 딕셔너리에 없는 경우 "Invalid Grade" 반환

arr = list(map(lambda v: {
  '학점': int(v.split(' ')[1]),
  '성적': get_grade_to_number(v.split(' ')[2])
}, inputArr))

전체평점 = reduce(lambda acc, cur:acc+cur['학점']*cur['성적'],arr,0)
전체학점 = reduce(lambda acc, cur:acc+cur['학점'],arr,0)
평균평점 = 전체평점/전체학점

def 정수반올림(n,자리수):
  return f'{round(n*(10**자리수)) / 10**자리수:.{자리수}f}'

print(정수반올림(평균평점, 2));
