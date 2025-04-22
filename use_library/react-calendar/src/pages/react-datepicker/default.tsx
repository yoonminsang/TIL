import { useState } from 'react';
import DatePicker from './DatePicker';
import DateInput from './DateInput';

export function Default() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  return (
    <>
      <h1>기본 datepicker</h1>
      <DatePicker
        selected={startDate}
        onChange={setStartDate}
        customInput={<DateInput />}
        // calendarContainer={MyContainer}
        // onCalendarClose={handleCalendarClose}
        // onCalendarOpen={handleCalendarOpen}
        // children={`Don't forget to check the weather!`} calendar 아래에 보여짐
        // popperPlacement='bottom'
      />
    </>
  );
}
