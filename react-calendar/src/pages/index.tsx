import { ReactNode } from 'react';
import RootPage from './page';
import ReactCalendarPage from './react-calendar/page';
import ReactDatePickerPage from './react-datepicker/page';

export const routes: { path: string; element: ReactNode }[] = [
  { path: '/', element: <RootPage /> },
  { path: '/react-calendar', element: <ReactCalendarPage /> },
  { path: '/react-date-picker', element: <ReactDatePickerPage /> },
];
