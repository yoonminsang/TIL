// https://school.programmers.co.kr/learn/courses/30/lessons/42577

// 정답
function solution(phone_book) {
  phone_book.sort();
  for (let i = 0; i < phone_book.length; i++) {
    if (phone_book[i]?.startsWith(phone_book[i + 1]) || phone_book[i + 1]?.startsWith(phone_book[i])) {
      return false;
    }
  }
  return true;
}

/**
 * @Date 2023.07.28
 */
{
  function solution(phone_book) {
    phone_book.sort();
    for (let i = 0; i < phone_book.length; i++) {
      if (phone_book[i]?.startsWith(phone_book[i + 1]) || phone_book[i + 1]?.startsWith(phone_book[i])) {
        return false;
      }
    }
    return true;
  }
}
