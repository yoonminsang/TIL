import BackButton from '../_components/BackButton';
import style from './page.module.css';
import { Post } from '@/app/(afterLogin)/_components/Post';

export default function UserNamePage() {
  const user = {
    id: 'zerohch0',
    nickname: '제로초',
    image: '/5Udwvqim.jpg',
  };

  return (
    <main className={style.main}>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>{user.nickname}</h3>
      </div>

      <div className={style.userZone}>
        <div className={style.userImage}>
          <img src={user.image} alt={user.id} />
        </div>
        <div className={style.userName}>
          <div>{user.nickname}</div>
          <div>@{user.id}</div>
        </div>
        <button className={style.followButton}>팔로우</button>
      </div>

      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}
