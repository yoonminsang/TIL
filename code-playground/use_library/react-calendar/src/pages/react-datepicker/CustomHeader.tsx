import dayjs from 'dayjs';
import { useState } from 'react';
import DatePicker from './DatePicker';

const range = (start: number, end: number, step: number) => {
  const years = [];
  for (let i = start; i <= end; i += step) {
    years.push(i);
  }
  return years;
};

export default function CustomHeader() {
  const [startDate, setStartDate] = useState(dayjs());
  const years = range(1990, dayjs().year() + 1, 1);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <>
      <h1>커스텀헤더 datepicker</h1>
      <DatePicker
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {'<'}
            </button>
            <select value={dayjs(date).year()} onChange={({ target: { value } }) => changeYear(Number(value))}>
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={months[dayjs(date).month()]}
              onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {'>'}
            </button>
          </div>
        )}
        selected={startDate.toDate()}
        onChange={(date) => setStartDate(dayjs(date))}
      />
    </>
  );
}
