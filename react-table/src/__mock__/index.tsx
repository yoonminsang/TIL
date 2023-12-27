/**
 * https://pokemonkorea.co.kr/pokedex
 * const list = document.querySelector('.list-book')
 * [...list.children].map(v=>{
    const h3=v.querySelector('h3');
    const [numberIncludeNo,name]=h3.textContent.split(' ');
    const number=numberIncludeNo.replace(/\D/g,'');
    const img=v.querySelector('.tumb-wrp img').getAttribute('src');
    return {number,name,img}
   })
 * 
 */

export interface Pokemon {
  number: string;
  name: string;
  img: string;
}

export const pokemonData: Pokemon[] = [
  {
    number: '0001',
    name: '이상해씨',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000101.png',
  },
  {
    number: '0002',
    name: '이상해풀',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000201.png',
  },
  {
    number: '0003',
    name: '이상해꽃',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000301.png',
  },
  {
    number: '0003',
    name: '메가이상해꽃',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000302.png',
  },
  {
    number: '0003',
    name: '이상해꽃',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000303.png',
  },
  {
    number: '0004',
    name: '파이리',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000401.png',
  },
  {
    number: '0005',
    name: '리자드',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000501.png',
  },
  {
    number: '0006',
    name: '리자몽',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000601.png',
  },
  {
    number: '0006',
    name: '메가리자몽X',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000602.png',
  },
  {
    number: '0006',
    name: '메가리자몽Y',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000603.png',
  },
  {
    number: '0006',
    name: '리자몽',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000604.png',
  },
  {
    number: '0007',
    name: '꼬부기',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000701.png',
  },
  {
    number: '0008',
    name: '어니부기',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000801.png',
  },
  {
    number: '0009',
    name: '거북왕',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000901.png',
  },
  {
    number: '0009',
    name: '메가거북왕',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000902.png',
  },
  {
    number: '0009',
    name: '거북왕',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000903.png',
  },
  {
    number: '0010',
    name: '캐터피',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/001001.png',
  },
  {
    number: '0011',
    name: '단데기',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/001101.png',
  },
  {
    number: '0012',
    name: '버터플',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/001201.png',
  },
  {
    number: '0012',
    name: '버터플',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/001202.png',
  },
  {
    number: '0013',
    name: '뿔충이',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/001301.png',
  },
  {
    number: '0014',
    name: '딱충이',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/001401.png',
  },
  {
    number: '0015',
    name: '독침붕',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/001501.png',
  },
  {
    number: '0015',
    name: '메가독침붕',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/001502.png',
  },
  {
    number: '0016',
    name: '구구',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/001601.png',
  },
  {
    number: '0017',
    name: '피죤',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/001701.png',
  },
  {
    number: '0018',
    name: '피죤투',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/001801.png',
  },
  {
    number: '0018',
    name: '메가피죤투',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/001802.png',
  },
  {
    number: '0019',
    name: '꼬렛',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/001901.png',
  },
  {
    number: '0019',
    name: '꼬렛',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/001902.png',
  },
  {
    number: '0020',
    name: '레트라',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/002001.png',
  },
  {
    number: '0020',
    name: '레트라',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/002002.png',
  },
  {
    number: '0021',
    name: '깨비참',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/002101.png',
  },
  {
    number: '0022',
    name: '깨비드릴조',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/002201.png',
  },
  {
    number: '0023',
    name: '아보',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/002301.png',
  },
  {
    number: '0024',
    name: '아보크',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/002401.png',
  },
  {
    number: '0025',
    name: '피카츄',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/002501.png',
  },
  {
    number: '0025',
    name: '피카츄',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/002502.png',
  },
  {
    number: '0026',
    name: '라이츄',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/002601.png',
  },
  {
    number: '0026',
    name: '라이츄',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/002602.png',
  },
  {
    number: '0027',
    name: '모래두지',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/002701.png',
  },
  {
    number: '0027',
    name: '모래두지',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/002702.png',
  },
  {
    number: '0028',
    name: '고지',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/002801.png',
  },
  {
    number: '0028',
    name: '고지',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/002802.png',
  },
  {
    number: '0029',
    name: '니드런♀',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/002901.png',
  },
  {
    number: '0030',
    name: '니드리나',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/003001.png',
  },
  {
    number: '0031',
    name: '니드퀸',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/003101.png',
  },
  {
    number: '0032',
    name: '니드런♂',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/003201.png',
  },
  {
    number: '0033',
    name: '니드리노',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/003301.png',
  },
  {
    number: '0034',
    name: '니드킹',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/003401.png',
  },
  {
    number: '0035',
    name: '삐삐',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/003501.png',
  },
  {
    number: '0036',
    name: '픽시',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/003601.png',
  },
  {
    number: '0037',
    name: '식스테일',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/003701.png',
  },
  {
    number: '0037',
    name: '식스테일',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/003702.png',
  },
  {
    number: '0038',
    name: '나인테일',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/003801.png',
  },
  {
    number: '0038',
    name: '나인테일',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/003802.png',
  },
  {
    number: '0039',
    name: '푸린',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/003901.png',
  },
  {
    number: '0040',
    name: '푸크린',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/004001.png',
  },
  {
    number: '0041',
    name: '주뱃',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/004101.png',
  },
  {
    number: '0042',
    name: '골뱃',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/004201.png',
  },
  {
    number: '0043',
    name: '뚜벅쵸',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/004301.png',
  },
  {
    number: '0044',
    name: '냄새꼬',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/004401.png',
  },
  {
    number: '0045',
    name: '라플레시아',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/004501.png',
  },
  {
    number: '0046',
    name: '파라스',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/004601.png',
  },
  {
    number: '0047',
    name: '파라섹트',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/004701.png',
  },
  {
    number: '0048',
    name: '콘팡',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/004801.png',
  },
  {
    number: '0049',
    name: '도나리',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/004901.png',
  },
  {
    number: '0050',
    name: '디그다',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/005001.png',
  },
  {
    number: '0050',
    name: '디그다',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/005002.png',
  },
  {
    number: '0051',
    name: '닥트리오',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/005101.png',
  },
  {
    number: '0051',
    name: '닥트리오',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/005102.png',
  },
  {
    number: '0052',
    name: '나옹',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/005201.png',
  },
  {
    number: '0052',
    name: '나옹',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/005202.png',
  },
  {
    number: '0052',
    name: '나옹',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/005203.png',
  },
  {
    number: '0052',
    name: '나옹',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/005204.png',
  },
  {
    number: '0053',
    name: '페르시온',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/005301.png',
  },
  {
    number: '0053',
    name: '페르시온',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/005302.png',
  },
  {
    number: '0054',
    name: '고라파덕',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/005401.png',
  },
  {
    number: '0055',
    name: '골덕',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/005501.png',
  },
  {
    number: '0056',
    name: '망키',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/005601.png',
  },
  {
    number: '0057',
    name: '성원숭',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/005701.png',
  },
  {
    number: '0058',
    name: '가디',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/005801.png',
  },
  {
    number: '0058',
    name: '가디',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/005802.png',
  },
  {
    number: '0059',
    name: '윈디',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/005901.png',
  },
  {
    number: '0059',
    name: '윈디',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/005902.png',
  },
  {
    number: '0060',
    name: '발챙이',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/006001.png',
  },
  {
    number: '0061',
    name: '슈륙챙이',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/006101.png',
  },
  {
    number: '0062',
    name: '강챙이',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/006201.png',
  },
  {
    number: '0063',
    name: '캐이시',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/006301.png',
  },
  {
    number: '0064',
    name: '윤겔라',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/006401.png',
  },
  {
    number: '0065',
    name: '후딘',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/006501.png',
  },
  {
    number: '0065',
    name: '메가후딘',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/006502.png',
  },
  {
    number: '0066',
    name: '알통몬',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/006601.png',
  },
  {
    number: '0067',
    name: '근육몬',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/006701.png',
  },
  {
    number: '0068',
    name: '괴력몬',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/006801.png',
  },
  {
    number: '0068',
    name: '괴력몬',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/006802.png',
  },
  {
    number: '0069',
    name: '모다피',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/006901.png',
  },
  {
    number: '0070',
    name: '우츠동',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/007001.png',
  },
  {
    number: '0071',
    name: '우츠보트',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/007101.png',
  },
  {
    number: '0072',
    name: '왕눈해',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/007201.png',
  },
  {
    number: '0073',
    name: '독파리',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/007301.png',
  },
  {
    number: '0074',
    name: '꼬마돌',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/007401.png',
  },
  {
    number: '0074',
    name: '꼬마돌',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/007402.png',
  },
  {
    number: '0075',
    name: '데구리',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/007501.png',
  },
  {
    number: '0075',
    name: '데구리',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/007502.png',
  },
  {
    number: '0076',
    name: '딱구리',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/007601.png',
  },
  {
    number: '0076',
    name: '딱구리',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/007602.png',
  },
  {
    number: '0077',
    name: '포니타',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/007701.png',
  },
  {
    number: '0077',
    name: '포니타',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/007702.png',
  },
  {
    number: '0078',
    name: '날쌩마',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/007801.png',
  },
  {
    number: '0078',
    name: '날쌩마',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/007802.png',
  },
  {
    number: '0079',
    name: '야돈',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/007901.png',
  },
  {
    number: '0079',
    name: '야돈',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/007902.png',
  },
  {
    number: '0080',
    name: '야도란',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/008001.png',
  },
  {
    number: '0080',
    name: '야도란',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/008002.png',
  },
  {
    number: '0080',
    name: '메가야도란',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/008003.png',
  },
  {
    number: '0081',
    name: '코일',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/008101.png',
  },
  {
    number: '0082',
    name: '레어코일',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/008201.png',
  },
  {
    number: '0083',
    name: '파오리',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/008301.png',
  },
  {
    number: '0083',
    name: '파오리',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/008302.png',
  },
  {
    number: '0084',
    name: '두두',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/008401.png',
  },
  {
    number: '0085',
    name: '두트리오',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/008501.png',
  },
  {
    number: '0086',
    name: '쥬쥬',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/008601.png',
  },
  {
    number: '0087',
    name: '쥬레곤',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/008701.png',
  },
  {
    number: '0088',
    name: '질퍽이',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/008801.png',
  },
  {
    number: '0088',
    name: '질퍽이',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/008802.png',
  },
  {
    number: '0089',
    name: '질뻐기',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/008901.png',
  },
  {
    number: '0089',
    name: '질뻐기',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/008902.png',
  },
  {
    number: '0090',
    name: '셀러',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/009001.png',
  },
  {
    number: '0091',
    name: '파르셀',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/009101.png',
  },
  {
    number: '0092',
    name: '고오스',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/009201.png',
  },
  {
    number: '0093',
    name: '고우스트',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/009301.png',
  },
  {
    number: '0094',
    name: '팬텀',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/009401.png',
  },
  {
    number: '0094',
    name: '메가팬텀',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/009402.png',
  },
  {
    number: '0094',
    name: '팬텀',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/009403.png',
  },
  {
    number: '0095',
    name: '롱스톤',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/009501.png',
  },
  {
    number: '0096',
    name: '슬리프',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/009601.png',
  },
  {
    number: '0097',
    name: '슬리퍼',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/009701.png',
  },
  {
    number: '0098',
    name: '크랩',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/009801.png',
  },
  {
    number: '0099',
    name: '킹크랩',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/009901.png',
  },
  {
    number: '0099',
    name: '킹크랩',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/009902.png',
  },
  {
    number: '0100',
    name: '찌리리공',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/010001.png',
  },
  {
    number: '0100',
    name: '찌리리공',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/010002.png',
  },
  {
    number: '0101',
    name: '붐볼',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/010101.png',
  },
  {
    number: '0101',
    name: '붐볼',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/010102.png',
  },
  {
    number: '0102',
    name: '아라리',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/010201.png',
  },
  {
    number: '0103',
    name: '나시',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/010301.png',
  },
  {
    number: '0103',
    name: '나시',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/010302.png',
  },
  {
    number: '0104',
    name: '탕구리',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/010401.png',
  },
  {
    number: '0105',
    name: '텅구리',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/010501.png',
  },
  {
    number: '0105',
    name: '텅구리',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/010502.png',
  },
  {
    number: '0106',
    name: '시라소몬',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/010601.png',
  },
  {
    number: '0107',
    name: '홍수몬',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/010701.png',
  },
  {
    number: '0108',
    name: '내루미',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/010801.png',
  },
  {
    number: '0109',
    name: '또가스',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/010901.png',
  },
  {
    number: '0110',
    name: '또도가스',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/011001.png',
  },
  {
    number: '0110',
    name: '또도가스',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/011002.png',
  },
  {
    number: '0111',
    name: '뿔카노',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/011101.png',
  },
  {
    number: '0112',
    name: '코뿌리',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/011201.png',
  },
  {
    number: '0113',
    name: '럭키',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/011301.png',
  },
  {
    number: '0114',
    name: '덩쿠리',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/011401.png',
  },
  {
    number: '0115',
    name: '캥카',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/011501.png',
  },
  {
    number: '0115',
    name: '메가캥카',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/011502.png',
  },
  {
    number: '0116',
    name: '쏘드라',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/011601.png',
  },
  {
    number: '0117',
    name: '시드라',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/011701.png',
  },
  {
    number: '0118',
    name: '콘치',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/011801.png',
  },
  {
    number: '0119',
    name: '왕콘치',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/011901.png',
  },
  {
    number: '0120',
    name: '별가사리',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/012001.png',
  },
  {
    number: '0121',
    name: '아쿠스타',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/012101.png',
  },
  {
    number: '0122',
    name: '마임맨',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/012201.png',
  },
  {
    number: '0122',
    name: '마임맨',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/012202.png',
  },
  {
    number: '0123',
    name: '스라크',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/012301.png',
  },
  {
    number: '0124',
    name: '루주라',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/012401.png',
  },
  {
    number: '0125',
    name: '에레브',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/012501.png',
  },
  {
    number: '0126',
    name: '마그마',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/012601.png',
  },
  {
    number: '0127',
    name: '쁘사이저',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/012701.png',
  },
  {
    number: '0127',
    name: '메가쁘사이저',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/012702.png',
  },
  {
    number: '0128',
    name: '켄타로스',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/012801.png',
  },
  {
    number: '0128',
    name: '켄타로스',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/012802.png',
  },
  {
    number: '0128',
    name: '켄타로스',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/012803.png',
  },
  {
    number: '0128',
    name: '켄타로스',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/012804.png',
  },
  {
    number: '0129',
    name: '잉어킹',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/012901.png',
  },
  {
    number: '0130',
    name: '갸라도스',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/013001.png',
  },
  {
    number: '0130',
    name: '메가갸라도스',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/013002.png',
  },
  {
    number: '0131',
    name: '라프라스',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/013103.png',
  },
  {
    number: '0131',
    name: '라프라스',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/013104.png',
  },
  {
    number: '0132',
    name: '메타몽',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/013201.png',
  },
  {
    number: '0133',
    name: '이브이',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/013301.png',
  },
  {
    number: '0133',
    name: '이브이',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/013302.png',
  },
  {
    number: '0134',
    name: '샤미드',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/013401.png',
  },
  {
    number: '0135',
    name: '쥬피썬더',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/013501.png',
  },
  {
    number: '0136',
    name: '부스터',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/013601.png',
  },
  {
    number: '0137',
    name: '폴리곤',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/013701.png',
  },
  {
    number: '0138',
    name: '암나이트',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/013801.png',
  },
  {
    number: '0139',
    name: '암스타',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/013901.png',
  },
  {
    number: '0140',
    name: '투구',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/014001.png',
  },
  {
    number: '0141',
    name: '투구푸스',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/014101.png',
  },
  {
    number: '0142',
    name: '프테라',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/014201.png',
  },
  {
    number: '0142',
    name: '메가프테라',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/014202.png',
  },
  {
    number: '0143',
    name: '잠만보',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/014301.png',
  },
  {
    number: '0143',
    name: '잠만보',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/014302.png',
  },
  {
    number: '0144',
    name: '프리져',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/014401.png',
  },
  {
    number: '0144',
    name: '프리져',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/014402.png',
  },
  {
    number: '0145',
    name: '썬더',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/014501.png',
  },
  {
    number: '0145',
    name: '썬더',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/014502.png',
  },
  {
    number: '0146',
    name: '파이어',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/014601.png',
  },
  {
    number: '0146',
    name: '파이어',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/014602.png',
  },
  {
    number: '0147',
    name: '미뇽',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/014701.png',
  },
  {
    number: '0148',
    name: '신뇽',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/014801.png',
  },
  {
    number: '0149',
    name: '망나뇽',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/014901.png',
  },
  {
    number: '0150',
    name: '뮤츠',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/015001.png',
  },
  {
    number: '0150',
    name: '메가뮤츠X',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/015002.png',
  },
  {
    number: '0150',
    name: '메가뮤츠Y',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/015003.png',
  },
  {
    number: '0151',
    name: '뮤',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/015101.png',
  },
  {
    number: '0152',
    name: '치코리타',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/015201.png',
  },
  {
    number: '0153',
    name: '베이리프',
    img: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/015301.png',
  },
];
