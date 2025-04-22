import { useState } from 'react';
import DatePicker from './DatePicker';
import { css } from '@emotion/react';

export default function DateRange() {
  const [startDate, setStartDate] = useState<Date | null>(new Date('2014/02/08'));
  const [endDate, setEndDate] = useState<Date | null>(new Date('2014/02/10'));
  return (
    <>
      <h1>Range datepicker</h1>
      <div css={RowStyle}>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </div>
    </>
  );
}

const RowStyle = css`
  display: flex;
  gap: 10px;
`;
