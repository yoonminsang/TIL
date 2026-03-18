import { useState } from 'react';
import DatePicker from './DatePicker';

export default function DateRangeForOne() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const onChange = (date: [Date | null, Date | null]) => {
    const [start, end] = date;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <>
      <h1>달력 하나로 조정하는 datepicker</h1>
      <DatePicker
        selected={startDate}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore 라이브러리 타입 오류인듯
        selectsRange
        inline
      />
    </>
  );
}
