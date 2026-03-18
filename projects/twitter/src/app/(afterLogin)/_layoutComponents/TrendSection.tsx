'use client';

import { usePathname } from 'next/navigation';
import style from './trendSection.module.css';
import Trend from '@/app/(afterLogin)/_components/Trend';
import { useSession } from 'next-auth/react';

export default function TrendSection() {
  // 부모 컴포넌트에서 분기를 치는게 더 좋지만 부모가 server component라서 usePathname 훅 사용이 불가능함.
  const pathname = usePathname();
  const { data } = useSession();
  if (pathname === '/explore') return null;
  if (data?.user) {
    return (
      <div className={style.trendBg}>
        <div className={style.trend}>
          <h3>나를 위한 트렌드</h3>
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
        </div>
      </div>
    );
  }
  return (
    <div className={style.trendBg}>
      <div className={style.noTrend}>트렌드를 가져올 수 없습니다.</div>
    </div>
  );
}
