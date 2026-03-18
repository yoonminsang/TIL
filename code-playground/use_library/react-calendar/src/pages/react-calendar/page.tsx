import { css } from '@emotion/react';
import dayjs from 'dayjs';
import { useState } from 'react';
import Calendar from './Calendar';

dayjs.locale('ko');

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function ReactCalendarPage() {
  const [singleValue, setSingleValue] = useState<Value>(new Date());
  const [rangeValue, setRangeValue] = useState<Value>([new Date(), dayjs(new Date()).add(1, 'day').toDate()]);
  return (
    <div css={ColStyle}>
      <h1>기본 calendar</h1>
      <div css={RowStyle}>
        <div css={ColStyle}>
          {singleValue instanceof Date && dayjs(singleValue).format('YYYY-MM-DD')}
          <Calendar value={singleValue} onChange={setSingleValue} />
        </div>
        <div css={ColStyle}>
          {Array.isArray(rangeValue) &&
            rangeValue.map((date) => (date ? dayjs(date).format('YYYY-MM-DD') : '')).join(' ~ ')}
          <Calendar value={rangeValue} onChange={setRangeValue} selectRange />
        </div>
      </div>
      <h1>input calendar</h1>
      <div>input calendar를 사용하기 위해서는 직접 구현해야함</div>
      <div>TODO</div>
    </div>
  );
}

const RowStyle = css`
  display: flex;
  gap: 10px;
`;
const ColStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
