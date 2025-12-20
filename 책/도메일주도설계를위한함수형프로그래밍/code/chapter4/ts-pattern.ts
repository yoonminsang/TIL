// 리스트 요소에 액세스하기 위한 패턴 매칭

import { match, P } from 'ts-pattern';

const printList1 = (arr: number[]) => {
  const message = match(arr)
    .with([], () => 'list is empty')
    .with([P.any], (elem) => `list has one element: ${elem}`)
    .with([P.any, P.any], (elems) => `list has two elements: ${elems}`)
    .otherwise(() => 'list has more than two elements');
  console.log(message);
};

const printList2 = (arr: number[]) => {
  const message = match(arr)
    .with([], () => 'list is empty')
    .with([P.any, ...P.array()], ([first, rest]) => `list is non-empty with the first element: ${first}`)
    .exhaustive();
  console.log(message);
};

printList1([1, 2, 3]); // list has more than two elements
printList2([1, 2, 3]); // list is non-empty with the first element: 1
