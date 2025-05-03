// https://school.programmers.co.kr/learn/courses/30/lessons/250136?language=javascript
// https://youtu.be/Q1W9UZHWyJw

/**
 * @Date 2025.05.03
 */
// 0: 빈 땅, 1: 있는 땅
// 해결방법
// 석유 덩어리 개수를 hash table value에 저장. key는 고유한 값.
//
// land와 같은 길이의 2차원 배열 생성
// 석유map hash table 생성
// 일단 land를 for문 돌면서 석유가 존재하는 곳 확인.
//   (시간복잡도는 500*500으로 굉장히 낮음. 이중 for문 가능함. 내부에서 dfs나 bfs를 사용해도 방문하는건 결국 한번임)
//   석유를 발견하면 bfs or dfs를 돌면서 해당 좌표에 고유key값으로 할당
//   dfs or bfs가 끝나면 석유map hash table의 고유key값에 count 정의
// 이제 시추관을 for문 돌리면서 테스트
//   (시간복잡도는 500*500으로 굉장히 낮음. 이중 for문 가능함)
//   석유map이 나오면 set에 집어넣음.
// 하나의 열 for문을 돌았으면 set으로 전체count 확인
// max 최신화

// dfs 재귀 콜스택 초과로 런타임 에러
// bfs로 변경하니 성공
{
  let count = 0;
  function getNewKey() {
    count += 1;
    return `key${count}`;
  }

  function transpose(arr) {
    const rowLength = arr[0].length;
    const colLength = arr.length;
    const result = Array(rowLength)
      .fill(null)
      .map(() => Array(colLength).fill(undefined));
    for (let i = 0; i < colLength; i++) {
      for (let j = 0; j < rowLength; j++) {
        result[j][i] = arr[i][j];
      }
    }
    return result;
  }

  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];

  function solution(land) {
    const rowLength = land.length;
    const colLength = land[0].length;
    // [[0,0,0,'key1','key1','key1',0,0],~~]
    const mappedLand = land.map((row) => row.map((v) => v));
    // {key1:7,key2:8,key3:2}
    const hashTable = {};

    mappedLand.forEach((row, y) => {
      row.forEach((v, x) => {
        if (v === 1) {
          bfs(y, x);
          // const key = getNewKey();
          // mappedLand[y][x] = key;
          // hashTable[key]=1;
          // dfs(y,x,key)
        }
      });
    });
    // console.log(mappedLand,hashTable)

    let max = 0;
    transpose(mappedLand).forEach((row) => {
      const set = new Set();
      row.forEach((v) => {
        if (v !== 0) {
          set.add(v);
        }
      });
      const sum = [...set].reduce((acc, cur) => acc + hashTable[cur], 0);
      // console.log(sum);
      max = Math.max(max, sum);
    });
    return max;

    function bfs(y, x) {
      const key = getNewKey();
      const queue = [[y, x]];
      mappedLand[y][x] = key;
      hashTable[key] = 1;

      while (queue.length > 0) {
        const [y, x] = queue.shift();
        for (let i = 0; i < 4; i++) {
          const ny = y + dy[i];
          const nx = x + dx[i];
          if (nx < 0 || ny < 0 || nx >= colLength || ny >= rowLength) continue;
          if (mappedLand[ny][nx] === 1) {
            mappedLand[ny][nx] = key;
            hashTable[key] += 1;
            queue.push([ny, nx]);
          }
        }
      }
    }

    // function dfs(y,x,key){
    //     for(let i=0;i<4;i++){
    //         const ny = y+dy[i];
    //         const nx = x+dx[i];
    //         if(nx<0 || ny<0 || nx>=colLength || ny>=rowLength) continue;
    //         if(mappedLand[ny][nx]===1){
    //             mappedLand[ny][nx] = key;
    //             hashTable[key]+=1;
    //             dfs(ny,nx,key)
    //         }
    //     }
    // }
  }
}
