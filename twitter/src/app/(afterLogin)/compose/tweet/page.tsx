import TweetModalPage from '../../@modal/(.)compose/tweet/page';

export default function TweetPage() {
  // TODO: 트워터는 새로고침할때 이전 페이지 화면을 배경에 보여줌. lastPageInfo정보를 백엔드나 로컬에 저장해서 처리하는듯함.
  return (
    <>
      여기에 페이지 컴포넌트를 넣으면 돼
      <TweetModalPage />
    </>
  );
}
