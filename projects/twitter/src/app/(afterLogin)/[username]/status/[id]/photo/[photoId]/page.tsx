import HomePage from '@/app/(afterLogin)/home/page';

interface Props {
  params: {
    username: string;
    id: string;
    photoId: string;
  };
}

export default function PhotoByIdPage({ params }: Props) {
  return <HomePage />;
}
