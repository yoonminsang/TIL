import { v1 as uuidv1 } from 'uuid';

/**
 * UUID v1 기본 순서는 time_low, time_mid, time_hi_and_version, clock_seq_and_reserved, node 순서로 이루어져 있습니다.
 * 시간 정보를 기반으로 인덱스 최적화를 위해 순서를 재배치
 */
export const generateReorderUUId = () => {
  const uuid = uuidv1();
  const orderedUuid = uuid.split('-');
  return orderedUuid[2] + orderedUuid[1] + orderedUuid[0] + orderedUuid[3] + orderedUuid[4];
};
