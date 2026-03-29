import { produce } from 'immer';
import { pipe } from 'fp-ts/function';

// OrderLine의 가겨갸을 업데이트하는 의사코드

// 다음 세가지 매개변수를 전달한다.
// * 최상위 Order
// * 변경하려는 OrderLine의 id
// * 새로운 가격
const changeOrderLinePrice = (order: Order, orderLineId: OrderLineId, newPrice: Price) => {
  // 1. orderLineId로 변경할 orderLine을 찾는다.
  const orderLine = pipe(order.orderLines, findOrderLine(orderLineId));

  // 2. 새 가격을 반영한 새 OrderLine을 만든다.
  const newOrderLine = produce(orderLine, (draft) => {
    draft.price = newPrice;
  });

  // 3. 이전 항목을 새 항목으로 교체한 새 항목 리스트를 만든다.
  const newOrderLines = pipe(order.orderLines, replaceOrderLine(orderLine, newOrderLine));

  // 4. 새 리스트로 교체한 새 Order를 반환한다.
  return produce(order, (draft) => {
    draft.orderLines = newOrderLines;
  });
};
