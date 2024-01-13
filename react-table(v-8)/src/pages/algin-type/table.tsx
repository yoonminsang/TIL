import styled from '@emotion/styled';

const _Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
`;

const THead = styled.thead``;
const Th = styled.th`
  padding: 0 10px;
  height: 40px;
  border-top: 1px solid gray;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
  background: aliceblue;
  color: black;
  font-weight: bold;
  &:first-child {
    border-left: 1px solid gray;
  }
`;

const TBody = styled.tbody``;
const Td = styled.td`
  padding: 0 10px;
  height: 120px;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
  &:first-child {
    border-left: 1px solid gray;
  }
`;

const TFoot = styled.tfoot``;

const Tr = styled.tr``;

export const Table = Object.assign(_Table, {
  THead,
  Th,
  TBody,
  Td,
  TFoot,
  Tr,
});
