import { ReactNode } from 'react';
import styles from '@/app/(beforeLogin)/_component/Main.module.css';

export default function BeforeLoginLayout({ children, modal }: { children: ReactNode; modal: ReactNode }) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}
