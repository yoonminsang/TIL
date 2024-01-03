// https://reactdatepicker.com/ 참고

import { css } from '@emotion/react';
import { Default } from './default';
import CustomHeader from './CustomHeader';
import DateRange from './DateRange';
import DateRangeForOne from './DateRangeForOne';

export default function ReactDatePickerPage() {
  return (
    <div css={ColStyle}>
      <Default />
      <CustomHeader />
      <DateRange />
      <DateRangeForOne />
    </div>
  );
}

const ColStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
