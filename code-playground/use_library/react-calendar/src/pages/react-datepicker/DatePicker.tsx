import { SerializedStyles } from '@emotion/react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Props extends ReactDatePickerProps {
  css?: SerializedStyles;
}

export default function DatePicker(props: Props) {
  return (
    <ReactDatePicker
      {...props}
      // input에 ['-', '/', '.'] 중 하나를 입력해서 엔터를 누르면 yyy-MM-dd 형태로 변경되어서 나옵니다.
      dateFormat="yyyy-MM-dd"
    />
  );
}
