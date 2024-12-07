// https://school.programmers.co.kr/learn/courses/30/lessons/340213?language=javascript

/**
 * @Date 2024.12.3
 */
{
  const NEXT = 'next';
  const PREV = 'prev';
  function solution(video_len, pos, op_start, op_end, commands) {
    const videoLenToSecond = timeToSecond(video_len);
    let postToSecond = timeToSecond(pos);
    const opStartToSecond = timeToSecond(op_start);
    const opEndToSecond = timeToSecond(op_end);

    if (isOpening(postToSecond)) {
      postToSecond = opEndToSecond;
    }

    const queue = [...commands];
    while (commands.length) {
      const currentCommand = commands.shift();
      if (currentCommand === NEXT) {
        postToSecond = Math.min(postToSecond + 10, videoLenToSecond);
      } else {
        postToSecond = Math.max(postToSecond - 10, 0);
      }
      if (isOpening(postToSecond)) {
        postToSecond = opEndToSecond;
      }
    }
    return secondToTime(postToSecond);

    function timeToSecond(timeData) {
      const [minute, second] = timeData.split(':').map(Number);
      return minute * 60 + second;
    }

    function secondToTime(secondData) {
      let minute = Math.floor(secondData / 60);
      if (minute < 10) {
        minute = `0${minute}`;
      }
      let second = secondData % 60;
      if (second < 10) {
        second = `0${second}`;
      }
      return `${minute}:${second}`;
    }

    function isOpening(secondData) {
      if (opStartToSecond <= secondData && opEndToSecond >= secondData) {
        return true;
      }
      return false;
    }
  }
}
