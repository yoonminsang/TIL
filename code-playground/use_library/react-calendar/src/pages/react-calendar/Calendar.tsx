import styled from '@emotion/styled';
import ReactCalendar, { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface Props extends CalendarProps {}

export default function Calendar(props: Props) {
  return <StyledReactCCalendar {...props} />;
}

// import 'react-calendar/dist/Calendar.css';를 사용하지 않고 직접 커스텀 가능
const StyledReactCCalendar = styled(ReactCalendar)``;
