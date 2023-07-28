// https://school.programmers.co.kr/learn/courses/30/lessons/42586

// 정답
function solution(progresses, speeds) {
  const needDays = progresses.map((progress, i) => {
    const speed = speeds[i];
    return Math.ceil((100 - progress) / speed);
  });
  const result = [];
  let count = 0;
  let prev = needDays[0];
  needDays.forEach((needDay, i) => {
    if (prev >= needDay || i === 0) {
      count += 1;
    } else {
      result.push(count);
      count = 1;
      prev = needDay;
    }
  });
  result.push(count);
  return result;
}

/**
 * @Date 2023.07.28
 */
function solution(progresses, speeds) {
  const needDays = progresses.map((progress, i) => {
    const speed = speeds[i];
    return Math.ceil((100 - progress) / speed);
  });
  const result = [];
  let count = 0;
  let prev = needDays[0];
  needDays.forEach((needDay, i) => {
    if (prev >= needDay || i === 0) {
      count += 1;
    } else {
      result.push(count);
      count = 1;
      prev = needDay;
    }
  });
  result.push(count);
  return result;
}
