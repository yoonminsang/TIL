type HeroNames = 'capt' | 'hulk' | 'thor';
type HeroAttendance = {
  [Name in HeroNames]: boolean;
};

interface Hero {
  name: string;
  skill: string;
}
type HeroPropCheck = {
  [H in keyof Hero]: boolean;
};

// 매핑 수정자
type HeroOptional = {
  [H in keyof Hero]?: string;
};

// type HeroOptional = {
//   name?: string;
//   skill?: string;
// };
// -? : 제네릭 타입으로 받은 속성의 옵션 속성을 모두 제거하겠다는 의미. 즉 필수 속성으로 변환
type HeroRequired<T> = {
  [Property in keyof T]-?: T[Property];
};
// 실제 Required와 동일한 타입임
// type Required<T> = {
//   [P in keyof T]-?: T[P];
// };
var capt: HeroRequired<HeroOptional> = {
  name: '캡틴',
  skill: '방패 던지기',
};
type a = Required<string>;
