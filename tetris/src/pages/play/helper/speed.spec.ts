import { getGameSpeed } from './speed';

const minSpeedTime = 1000;
const maxSpeedTime = 100;
const maxStage = 100;

describe('getGameSpeed', () => {
  it('1라운드 gameSpeed는 minSpeedTime과 동일하다.', () => {
    expect(getGameSpeed({ minSpeedTime, maxSpeedTime, maxStage, currentStage: 1 })).toBe(minSpeedTime);
  });
  it('2라운드 gameSpeed가 정상적으로 계산된다.', () => {
    expect(getGameSpeed({ minSpeedTime, maxSpeedTime, maxStage, currentStage: 2 })).toBe(991);
  });
  it('50라운드 gameSpeed가 정상적으로 계산된다.', () => {
    expect(getGameSpeed({ minSpeedTime, maxSpeedTime, maxStage, currentStage: 50 })).toBe(559);
  });
  it('100라운드 gameSpeed가 정상적으로 계산된다.', () => {
    expect(getGameSpeed({ minSpeedTime, maxSpeedTime, maxStage, currentStage: 100 })).toBe(109);
  });
  it('maxStage+1인 stage의 gameSpeed는 maxSpeedTime과 동일하다.', () => {
    expect(getGameSpeed({ minSpeedTime, maxSpeedTime, maxStage, currentStage: maxStage + 1 })).toBe(maxSpeedTime);
  });
  it('maxStage초과인 stage의 gameSpeed는 maxSpeedTime과 동일하다.', () => {
    expect(getGameSpeed({ minSpeedTime, maxSpeedTime, maxStage, currentStage: 200 })).toBe(maxSpeedTime);
  });
});
