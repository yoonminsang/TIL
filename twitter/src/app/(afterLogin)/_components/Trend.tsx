import Link from 'next/link';
import style from './Trend.module.css';

// TODO: TrendSection에서만 사용된다면 폴더구조를 변경하던가 TrendSection파일으로 옮기는게 좋을듯.
export default function Trend() {
  return (
    <Link href={`/search?q=트렌드`} className={style.container}>
      <div className={style.count}>실시간트렌드</div>
      <div className={style.title}>제로초</div>
      <div className={style.count}>1,234 posts</div>
    </Link>
  );
}
