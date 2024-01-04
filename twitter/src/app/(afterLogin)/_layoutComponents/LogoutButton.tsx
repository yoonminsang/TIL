'use client';

import { signOut, useSession } from 'next-auth/react';
import style from './LogoutButton.module.css';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const me = {
    // 임시로 내 정보 있는것처럼
    id: 'zerohch0',
    nickname: '제로초',
    image: '/5Udwvqim.jpg',
  const router = useRouter();
  const onLogout = () => {
    signOut({ redirect: false }).then(() => {
      router.replace('/');
    });
  };


  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <img src={me.image} alt={me.id} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}
