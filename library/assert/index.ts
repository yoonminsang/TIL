export function assert(condition: boolean, error: Error = new Error('assert error')): asserts condition {
  if (!condition) {
    /** logError와 연동해주세요. */
    // logError(new Error('assert error'), { error });
    throw error;
  }
}
