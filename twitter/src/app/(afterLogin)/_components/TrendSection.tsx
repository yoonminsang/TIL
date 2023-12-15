'use client';

import { usePathname } from 'next/navigation';
import style from './trendSection.module.css';
import Trend from '@/app/(afterLogin)/_components/Trend';

// TODO: TrendSection에서 분기치는것보다는 부모 컴포넌트에서 분기를 치는게 더 좋지 않을까?
export default function TrendSection() {
  const pathname = usePathname();
  if (pathname === '/explore') return null;
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
