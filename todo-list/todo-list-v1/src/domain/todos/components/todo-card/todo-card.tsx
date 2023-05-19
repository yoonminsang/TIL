import Image from 'next/image';
import { Card } from '@/components';
import { TodoPriority } from '@/mocks/types';
import { css } from '@emotion/react';
import { FC, HTMLAttributes, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  priority: TodoPriority;
}

export const TodoCard = forwardRef<HTMLDivElement, Props>(function TodoCard({ title, priority, ...otherProps }, ref) {
  return (
    <Card
      css={css`
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 16px;
        min-width: 200px;
        cursor: pointer;
        .title {
          font-weight: 700;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          text-overflow: ellipsis;
          white-space: initial;
        }
      `}
      ref={ref}
      {...otherProps}>
      <div className="title">{title}</div>
      <div className="options">
        <PriorityImg priority={priority} />
      </div>
    </Card>
  );
});

const PriorityImg: FC<{ priority: Props['priority'] }> = ({ priority }) => {
  const src = (() => {
    if (priority === 'high') return '/high.svg';
    if (priority === 'medium') return '/medium.svg';
    return '/low.svg';
  })();

  return <Image src={src} alt={priority} width={16} height={16} />;
};

// local img를 import하는 방법

// const src = (() => {
//   if (priority === 'high') return '/high.svg';
//   if (priority === 'medium') return '/medium.svg';
//   return '/low.svg';
// })();

// import highSrc from 'public/high.svg';
// import mediumSrc from 'public/medium.svg';
// import lowSrc from 'public/low.svg';
// const src = (() => {
//   if (priority === 'high') return highSrc;
//   if (priority === 'medium') return mediumSrc;
//   return lowSrc;
// })();

// 외부 이미지

// const src = (() => {
//   if (priority === 'high')
//     return 'https://classum.atlassian.net/images/icons/priorities/high.svg';
//   if (priority === 'medium')
//     return 'https://classum.atlassian.net/images/icons/priorities/medium.svg';
//   return 'https://classum.atlassian.net/images/icons/priorities/low.svg';
// })();
