import { ExModal } from '@/components/modal/ex-modal';
import { useOverlay } from '@/hooks';
import { css } from '@emotion/react';
import Link from 'next/link';

export default function Home() {
  // TODO: 나중에 제거
  const overlay = useOverlay();
  const openExModal = async () => {
    const result = await new Promise<boolean>((resolve) => {
      overlay.open(({ isOpen, close }) => (
        <ExModal
          visible={isOpen}
          onConfirm={() => {
            resolve(true);
            close();
          }}
          onClose={() => {
            resolve(false);
            close();
          }}
        >
          Children
        </ExModal>
      ));
    });
    console.log(result);
  };

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
      <button onClick={openExModal}>open modal</button>
      <h1>TODO LIST</h1>
      <nav>
        <Link href="/react">상태관리없는 투두리스트</Link>
        <Link href="/recoil">recoil을 사용한 투두리스트</Link>
        <Link href="/jotai">jotai를 사용한 투두리스트</Link>
      </nav>
    </main>
  );
}
