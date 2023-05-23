import { css } from '@emotion/react';
import { FC, ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

export const TodoCardList: FC<Props> = ({ title, children }) => (
  <li
    css={css`
      display: flex;
      flex-direction: column;
      gap: 5px;
      list-style-type: none;
      background-color: #f4f5f7;
      padding: 1px 5px;
      h2 {
        padding-left: 10px;
      }
    `}>
    <h2>{title}</h2>
    {children}
  </li>
);
