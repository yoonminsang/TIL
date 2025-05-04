// https://school.programmers.co.kr/learn/courses/30/lessons/250135

// 생각보다 푸는게 어려웠다.

/**
 * @Date 2025.05.04
 */
// 초가 정수일 때 겹치는 상황과 정수가 아닐 때 겹치는 경우를 생각해야함.
// 시침과 분침이 동시에 일치하는 경우는 한번만 더해야함
// 00:00:00을 넘어갈때 예외처리가 필요함
// 이게 좀 많이 헷갈렸음.

// 시간복잡도는 생각 안해도됌. 어차피 초는 24*60*60=86400밖에 안됌.

// 수학적으로 푸는 접근도 있다고 함. 근데 현실적으로 실제 시험에서는 그런 수학적 접근을 생각하는게 어려울듯함.
// 기본적으로 수학적 접근이 생각나면 그걸로 풀어도 되지만 생각나지 않는다면 구현으로 풀어야함.

// 잘못생각한부분
// 1. hash table 전처리
// 맨처음에 hash table 형태로 전처리를 다 해두려고 했는데 잘못된 선택임
// 시작 시간에 따라 count를 더하는 로직이 달라짐 ex) 0시0분5.5초에 알람이 울린다면 0시0분에 시작이랑 0시6분에 시작 결과값이 달라야함
// 2. second를 다시 time으로 converting
// 보통 많이 사용하는 방법이긴한데 여기서는 어차피 degree로 변경하기 때문에 굳이 할 필요가 없다. 이것때문에 코드가 복잡해졌다.

// 실패
{
  // 정수 초단위로 찾을 수 없음. 그렇기 때문에 초 사이에 차이를 찾아야함
  // 이 때 예외상황을 생각해야함. 시침과 분침이 일치하는 경우. 0시정각,0시~~분,1시~~분,~~11시~~분
  // 초가 정수일 때 겹치는 상황과 정수가 아닐 때 겹치는 경우도 생각해야함.
  // 12:00:00을 넘어가면 12:00:00을 뺀 값으로 계산해야함.
  // 즉 두번계산이 필요함
  // 맨처음에 전처리를 다 해두는게 좋을듯. 매번 찾느게 아니라 처음에 hashtable에 다 저장해놓는거지.
  // 어차피 초는 24*60*60=86400밖에 안됌.
  // 초랑 time으로 서로 converting하는 비용 생각을 해봤는데 비용 고민을 할정도로 비용이 크지 않은듯. 그냥 하자

  function solution(h1, m1, s1, h2, m2, s2) {
    const hashTable = getHashTable();
    // console.log('hashTable', hashTable);

    const dividedSeconds = divideSeconds(timeToSecond(h1, m1, s1), timeToSecond(h2, m2, s2));
    // console.log('dividedSeconds', dividedSeconds);

    let result = 0;
    dividedSeconds.forEach(({ startSecond, endSecond }) => {
      for (let second = startSecond; second <= endSecond; second++) {
        if (hashTable[second]) {
          // console.log('second', secondToTime(second));
          result += 1;
        }
      }
    });
    return result;
  }

  // 각도로 계산. 0도에서 359도까지
  function getHashTable() {
    const hashTable = {};
    // TODO: 359부터 360까지 겹치는게 있는지 확인

    // 00시는 for문 이전에 처리
    hashTable[0] = true;
    let prevHAngle = 0;
    let prevMAngle = 0;
    let prevSAngle = 0;

    // 분침: 초가 60이 되어야 움직임
    // 시침: 분이 움직여야 움직임(초가 60이 되어야 분침이 움직이고 그로인해 시침이 움직임)
    for (let second = 1; second < 3600 * 12; second++) {
      // for (let second = 1; second < 65; second++) {
      const { h, m, s } = secondToTime(second);
      const hAngle = ((h + m / 60) * (5 / 60)) % 360;
      const mAngle = (m * (360 / 60)) % 360;
      const sAngle = (s * (360 / 60)) % 360;

      // 초침이 시침과 일치하는 경우 체크
      const test1 = hAngle === sAngle;
      // 초침과 분침이 일치하는 경우 체크
      const test2 = mAngle === sAngle;
      // 초침이 시침보다 이전에는 더 컸는데 이후에는 더 작아진 경우 체크
      const test3 = prevHAngle > prevSAngle && hAngle < sAngle;
      // 초침이 시침보다 이전에는 더 컸는데 이후에는 더 작아진 경우 체크
      const test4 = prevMAngle > prevSAngle && mAngle < sAngle;
      if (test1 || test2 || test3 || test4) {
        if (second < 1000) {
          // console.log(second, secondToTime(second));
          // console.log(test1, test2, test3, test4);
          // console.log(hAngle, prevHAngle, mAngle, prevMAngle, sAngle, prevSAngle);
          // console.log(hAngle, mAngle, sAngle);
          // console.log(prevHAngle, prevMAngle, prevSAngle);
        }
        hashTable[second] = true;
      }
      prevHAngle = hAngle;
      prevMAngle = mAngle;
      prevSAngle = sAngle;
    }
    return hashTable;
  }

  // 00시부터 12시가 아니라 00시부터 24시까지라서 시계를 두개로 나눠야함
  function divideSeconds(startSecond, endSecond) {
    // 12시 00분 00초
    const dividePoint = 3600 * 12;
    // start, end가 모두 12시 미만인 경우
    if (endSecond < dividePoint) {
      return [{ startSecond, endSecond }];
    }
    // start와 end 모두 12시 이상인 경우
    if (startSecond >= dividePoint) {
      return [{ startSecond: startSecond - dividePoint, endSecond: endSecond - dividePoint }];
    }
    // start는 12시 미만인데 end는 12시 이상인 경우
    if (startSecond < dividePoint && endSecond >= dividePoint) {
      // 12시가 겹치는지 확인. 11시59분59초와 12시00분00초사이에 겹치는 경우없음.
      return [
        { startSecond, endSecond: dividePoint - 1 },
        { startSecond: dividePoint, endSecond },
      ];
    }
    throw new Error(`divideSeconds 분기문 잘못됌 ${startSecond}, ${endSecond}`);
  }

  // time converter

  function timeToSecond(h, m, s) {
    return h * 3600 + m * 60 + s;
  }

  function secondToTime(_s) {
    let s = _s;
    const h = Math.floor(s / 3600);
    s -= h * 3600;
    const m = Math.floor(s / 60);
    s -= m * 60;
    return { h, m, s };
  }
}

// https://school.programmers.co.kr/questions/82934를 잠깐 봤는데 내가 푼 방식과 동일하다는 것을 깨닫고 다시품
// 성공
{
  function solution(h1, m1, s1, h2, m2, s2) {
    const startSecond = timeToSecond(h1, m1, s1);
    const endSecond = timeToSecond(h2, m2, s2);
    let count = 0;

    // 주어진 조건에서 0보다 작은 경우는 존재하지 않기 때문에 항상 성립함.(아래 if문 확인)
    let prevHourDegree = 0;
    let prevMinuteDegree = 0;
    let prevSecondDegree = 0;
    for (let second = startSecond; second <= endSecond; second++) {
      let hourDegree = hourToDegree(second);
      let minuteDegree = minuteToDegree(second);
      let secondDegree = secondToDegree(second);

      // degree가 359에서 0으로 넘어갈 때 예외처리
      if (secondDegree === 0) {
        secondDegree = 360;
        // 초침은 1초에 6도 움직이므로 6보다 작다면 그 다음에 확정적으로 지나기 때문에 360을 더해줌
        if (minuteDegree < 6) {
          minuteDegree += 360;
        }
        if (hourDegree < 6) {
          hourDegree += 360;
        }
      }

      // 초침과 시침 또는 초침과 분침이 일치하는 경우
      if (hourDegree === secondDegree || minuteDegree === secondDegree) {
        count += 1;
      }
      // 소수점까지 정확하게 시침, 분침이 일치하는 경우가 있다면 오류가 있음.
      // 초침이 시침보다 이전에는 더 작았는데 이후에는 더 커진 경우 체크
      if (prevSecondDegree < prevHourDegree && secondDegree > hourDegree) {
        count += 1;
      }
      // 초침이 분침보다 이전에는 더 작았는데 이후에는 더 커진 경우 체크
      if (prevSecondDegree < prevMinuteDegree && secondDegree > minuteDegree) {
        count += 1;
      }

      prevHourDegree = hourDegree;
      prevMinuteDegree = minuteDegree;
      prevSecondDegree = secondDegree;
    }
    return count;
  }

  function timeToSecond(hour, minute, second) {
    return hour * 3600 + minute * 60 + second;
  }

  function hourToDegree(second) {
    return (second % (60 * 60 * 12)) * (360 / (60 * 60 * 12));
  }

  function minuteToDegree(second) {
    return (second % (60 * 60)) * (360 / 3600);
  }

  function secondToDegree(second) {
    return (second % 60) * (360 / 60);
  }

  // 테스트 1
  // 입력값 〉	0, 5, 30, 0, 7, 0
  // 기댓값 〉	2
  // 실행 결과 〉	테스트를 통과하였습니다.
  // 테스트 2
  // 입력값 〉	12, 0, 0, 12, 0, 30
  // 기댓값 〉	1
  // 실행 결과 〉	테스트를 통과하였습니다.
  // 테스트 3
  // 입력값 〉	0, 6, 1, 0, 6, 6
  // 기댓값 〉	0
  // 실행 결과 〉	테스트를 통과하였습니다.
  // 테스트 4
  // 입력값 〉	11, 59, 30, 12, 0, 0
  // 기댓값 〉	1
  // 실행 결과 〉	테스트를 통과하였습니다.
  // 테스트 5
  // 입력값 〉	11, 58, 59, 11, 59, 0
  // 기댓값 〉	1
  // 실행 결과 〉	테스트를 통과하였습니다.
  // 테스트 6
  // 입력값 〉	1, 5, 5, 1, 5, 6
  // 기댓값 〉	2
  // 실행 결과 〉	테스트를 통과하였습니다.
  // 테스트 7
  // 입력값 〉	0, 0, 0, 23, 59, 59
  // 기댓값 〉	2852
  // 실행 결과 〉	테스트를 통과하였습니다.
}
