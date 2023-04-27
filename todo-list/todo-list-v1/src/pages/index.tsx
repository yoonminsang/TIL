import { css } from '@emotion/react';
import Link from 'next/link';

export default function Home() {
  return (
    <main
      css={css`
        h1 {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        nav {
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 30px;
          a {
            color: red;
            text-decoration: none;
          }
        }
      `}
    >
      <h1>TODO LIST</h1>
      <nav>
        <Link href="/react">상태관리없는 투두리스트</Link>
        <Link href="/recoil">recoil을 사용한 투두리스트</Link>
        <Link href="/jotai">jotai를 사용한 투두리스트</Link>
      </nav>
    </main>
  );
}
