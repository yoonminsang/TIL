export async function getPostRecommends() {
  const res = await fetch('http://localhost:9090/api/postRecommends', {
    next: {
      // 캐싱할 때  필요한 태그.(react query key랑은 다른거야)
      tags: ['posts', 'recommends'],
    },
    // 캐싱안할려면 아래 코드 넣어야돼
    // cache:'no-store'
    // 이걸로 캐싱 초기화
    // revalidateTag('recommends')
    // 페이지 전체 데이터 새로고침
    // revalidatePath('/home')
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
