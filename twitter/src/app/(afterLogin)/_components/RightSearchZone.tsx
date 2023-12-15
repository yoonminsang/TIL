'use client';

import { usePathname } from 'next/navigation';
import style from './RightSearchZone.module.css';
import SearchForm from './SearchForm';

// TODO: onChangeFollow, onChangeAll은 props로 전달받는게 좋을듯. /search에 있는 부분도 컴포넌트 분리하면 좋을듯.
export default function RightSearchZone() {
  const pathname = usePathname();

  const onChangeFollow = () => {};
  const onChangeAll = () => {};

  if (pathname === '/explore') {
    return null;
  }

  if (pathname === '/search') {
    return (
      <div>
        <h5 className={style.filterTitle}>검색 필터</h5>
        <div className={style.filterSection}>
          <div>
            <label>사용자</label>
            <div className={style.radio}>
              <div>모든 사용자</div>
              <input type="radio" name="pf" defaultChecked onChange={onChangeAll} />
            </div>
            <div className={style.radio}>
              <div>내가 팔로우하는 사람들</div>
              <input type="radio" name="pf" value="on" onChange={onChangeFollow} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <SearchForm />;
}
