import ActionButtons from '@/app/(afterLogin)/_components/ActionButtons';
import PhotoModalCloseButton from './_components/PhotoModalCloseButton';
import style from './page.module.css';
import { faker } from '@faker-js/faker';
import { Post } from '@/app/(afterLogin)/_components/Post';
import CommentForm from '@/app/(afterLogin)/[username]/status/[id]/_components/CommentForm';

export default function Default() {
  const photo = {
    imageId: 1,
    link: faker.image.urlLoremFlickr(),
    Post: {
      content: faker.lorem.text(),
    },
  };
  return (
    <div className={style.container}>
      <PhotoModalCloseButton />
      <div className={style.imageZone}>
        <img src={photo.link} alt={photo.Post?.content} />
        <div className={style.image} style={{ backgroundImage: `url(${photo.link})` }} />
        <div className={style.buttonZone}>
          <div className={style.buttonInner}>
            <ActionButtons />
          </div>
        </div>
      </div>
      <div className={style.commentZone}>
        <Post />
        <CommentForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
