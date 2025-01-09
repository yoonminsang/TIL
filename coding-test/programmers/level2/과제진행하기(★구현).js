// https://school.programmers.co.kr/learn/courses/30/lessons/176962

// ★ 구현이 좀 어려움

// 정답
function solution(plans) {
  const result = [];
  const filteredPlans = getFilteredPlans(plans);
  const stoppedPlans = []; // stack
  let currTime = 0;
  filteredPlans.forEach((plan) => {
    let lastStoppedPlan = stoppedPlans.at(-1);
    while (lastStoppedPlan) {
      const diff = plan.startTime - currTime;
      if (diff < lastStoppedPlan.remainTime) {
        lastStoppedPlan.remainTime -= diff;
        break;
      }
      const temp = stoppedPlans.pop();
      currTime += temp.remainTime;
      result.push(temp.name);
      lastStoppedPlan = stoppedPlans.at(-1);
    }
    currTime = plan.startTime;
    stoppedPlans.push(plan);
  });
  return [...result, ...stoppedPlans.map(({ name }) => name).reverse()];
}

/**
 * @Date 대략 2023.04.19
 */

// 첫번째 시도 힘겹게 성공
// 성공은 했지만 굉장히 복잡하게 풀었음.

{
  const timeToMinute = (time) => {
    const [hour, minute] = time.split(':').map(Number);
    return hour * 60 + minute;
  };

  const getFilteredPlans = (plans) => {
    const result = plans.map((plan) => {
      return {
        name: plan[0],
        startTime: timeToMinute(plan[1]),
        remainTime: Number(plan[2]),
      };
    });
    result.sort((a, b) => a.startTime - b.startTime);
    return result;
  };

  function solution(plans) {
    const result = [];
    const filteredPlans = getFilteredPlans(plans);
    const stoppedPlans = [];
    let currTime = filteredPlans[0].startTime;
    while (filteredPlans.length + stoppedPlans.length > 0) {
      if (filteredPlans.length + stoppedPlans.length === 1) {
        const nowPlan = filteredPlans[0] ?? stoppedPlans.at(-1);
        result.push(nowPlan.name);
        break;
      }
      const [nowPlan, nowPlanStatus, nextPlan, nextPlanStatus] = (() => {
        // s s
        if (filteredPlans.length === 0) {
          return [stoppedPlans.at(-1), 's', stoppedPlans.at(-2), 's'];
        }
        // f
        if (filteredPlans[0]?.startTime === currTime) {
          // f s
          if (
            filteredPlans.length === 1 ||
            (currTime + filteredPlans[0].remainTime <= filteredPlans[1].startTime && stoppedPlans.length > 0)
          ) {
            return [filteredPlans[0], 'f', stoppedPlans.at(-1), 's'];
          }
          // f f
          return [filteredPlans[0], 'f', filteredPlans[1], 'f'];
        }
        // s f
        if (stoppedPlans.length === 1 || currTime + stoppedPlans.at(-1).remainTime > filteredPlans[0].startTime) {
          return [stoppedPlans.at(-1), 's', filteredPlans[0], 'f'];
        }
        // s s
        return [stoppedPlans.at(-1), 's', stoppedPlans.at(-2), 's'];
      })();
      // 현재 plan을 완료할 수 있는 경우
      if (nextPlanStatus === 's' || currTime + nowPlan.remainTime <= nextPlan.startTime) {
        if (nowPlanStatus === 'f') result.push(filteredPlans.shift().name);
        else result.push(stoppedPlans.pop().name);
      }
      // 현재 plan을 완료할 수 없는 경우
      else {
        nowPlan.remainTime -= nextPlan.startTime - currTime;
        if (nowPlanStatus === 'f') stoppedPlans.push(filteredPlans.shift());
      }
      currTime = (() => {
        if (nextPlanStatus === 'f') return nextPlan.startTime;
        return currTime + nowPlan.remainTime;
      })();
    }
    return result;
  }
}

// 두번째 시도. 정확히는 다른 사람의 풀이를 참고해서 품.

function solution(plans) {
  const result = [];
  const filteredPlans = getFilteredPlans(plans);
  const stoppedPlans = []; // stack
  let currTime = 0;
  filteredPlans.forEach((plan) => {
    let lastStoppedPlan = stoppedPlans.at(-1);
    while (lastStoppedPlan) {
      const diff = plan.startTime - currTime;
      if (diff < lastStoppedPlan.remainTime) {
        lastStoppedPlan.remainTime -= diff;
        break;
      }
      const temp = stoppedPlans.pop();
      currTime += temp.remainTime;
      result.push(temp.name);
      lastStoppedPlan = stoppedPlans.at(-1);
    }
    currTime = plan.startTime;
    stoppedPlans.push(plan);
  });
  return [...result, ...stoppedPlans.map(({ name }) => name).reverse()];
}

/**
 * @Date 대략 2025.01.09
 */
{
  function solution(_plans) {
    const result = [];
    const plans = _plans.map(([name, start, playtime]) => {
      return { name, start: timeToMinute(start), playtime: Number(playtime) };
    });
    plans.sort((a, b) => a.start - b.start);
    plans.forEach((plan, index) => {
      // console.log('plans', index, plans, result);
      const nextPlan = plans[index + 1];
      if (nextPlan) {
        // 다음시작시간전에 끝낼수있는 경우
        let remainTime = nextPlan.start - (plan.start + plan.playtime);
        if (remainTime >= 0) {
          plan.playtime = 0;
          result.push(plan.name);
          for (let i = index - 1; i >= 0 && remainTime >= 0; i--) {
            if (plans[i].playtime > 0) {
              const minusMinute = Math.min(plans[i].playtime, remainTime);
              plans[i].playtime -= minusMinute;
              remainTime -= minusMinute;
              if (plans[i].playtime === 0) {
                result.push(plans[i].name);
              }
            }
          }
        }
        // 다음시작시간전에 끝낼수없는 경우
        else {
          plan.playtime -= nextPlan.start - plan.start;
        }
      }
      // 마지막
      else {
        plan.playtime = 0;
        result.push(plan.name);
      }
    });
    plans.reverse().forEach(({ name, start, playtime }) => {
      if (playtime > 0) {
        result.push(name);
      }
    });
    return result;
  }

  function timeToMinute(time) {
    const [hour, minute] = time.split(':').map(Number);
    return hour * 60 + minute;
  }

  // console.log(
  //   solution([
  //     ['korean', '11:40', '30'],
  //     ['english', '12:10', '20'],
  //     ['math', '12:30', '40'],
  //   ]),
  // );
  console.log(
    solution([
      ['1', '00:00', '30'],
      ['2', '00:10', '10'],
      ['3', '00:30', '10'],
      ['4', '00:50', '10'],
    ]),
  );
}

// gpt한테 코드리뷰받다가 스택방식 추천해서 스택으로 개선해봄
{
  function solution(_plans) {
    const result = [];
    const pendingStack = [];
    const plans = _plans.map(([name, start, playtime]) => {
      return { name, start: timeToMinute(start), playtime: Number(playtime) };
    });
    plans.sort((a, b) => a.start - b.start);
    plans.forEach((plan, index) => {
      const nextPlan = plans[index + 1];
      if (nextPlan) {
        let remainTime = nextPlan.start - (plan.start + plan.playtime);
        // 다음시작시간전에 끝낼수있는 경우
        if (remainTime >= 0) {
          plan.playtime = 0;
          result.push(plan.name);
          while (remainTime > 0 && pendingStack.length > 0) {
            const pendingPlan = pendingStack.pop();
            const minusMinute = Math.min(pendingPlan.playtime, remainTime);
            pendingPlan.playtime -= minusMinute;
            remainTime -= minusMinute;
            if (pendingPlan.playtime === 0) {
              result.push(pendingPlan.name);
            } else {
              pendingStack.push(pendingPlan);
            }
          }
        }
        // 다음시작시간전에 끝낼수없는 경우
        else {
          plan.playtime -= nextPlan.start - plan.start;
          pendingStack.push(plan);
        }
      }
      // 마지막
      else {
        plan.playtime = 0;
        result.push(plan.name);
      }
    });
    result.push(...pendingStack.map(({ name }) => name).reverse());
    return result;
  }

  function timeToMinute(time) {
    const [hour, minute] = time.split(':').map(Number);
    return hour * 60 + minute;
  }

  // console.log(
  //   solution([
  //     ['korean', '11:40', '30'],
  //     ['english', '12:10', '20'],
  //     ['math', '12:30', '40'],
  //   ]),
  // );
  console.log(
    solution([
      ['1', '00:00', '30'],
      ['2', '00:10', '10'],
      ['3', '00:30', '10'],
      ['4', '00:50', '10'],
    ]),
  );
}
