class MemoStorage {
  storage = new Map();

  get(key) {
    return this.storage.get(key) || null;
  }

  set(key, value) {
    this.storage.set(key, value);
  }

  remove(key) {
    this.storage.delete(key);
  }
}

class LocalStorage {
  static canUse() {
    const TEST_KEY = generateTestKey();

    // 사용자가 쿠키 차단을 하는 경우 LocalStorage '접근' 시에 예외가 발생합니다.
    try {
      localStorage.setItem(TEST_KEY, 'test');
      localStorage.removeItem(TEST_KEY);
      return true;
    } catch (err) {
      return false;
    }
  }

  get(key) {
    return localStorage.getItem(key);
  }

  set(key, value) {
    localStorage.setItem(key, value);
  }

  remove(key) {
    localStorage.removeItem(key);
  }
}

class SessionStorage {
  static canUse() {
    const TEST_KEY = generateTestKey();

    // sessionStorage를 사용할 수 없는 경우에 대응합니다.
    try {
      sessionStorage.setItem(TEST_KEY, 'test');
      sessionStorage.removeItem(TEST_KEY);
      return true;
    } catch (err) {
      return false;
    }
  }

  get(key) {
    return sessionStorage.getItem(key);
  }

  set(key, value) {
    sessionStorage.setItem(key, value);
  }

  remove(key) {
    sessionStorage.removeItem(key);
  }
}

function generateTestKey() {
  return new Array(4)
    .fill(null)
    .map(() => Math.random().toString(36).slice(2))
    .join('');
}

export function generateStorage() {
  if (LocalStorage.canUse()) {
    return new LocalStorage();
  }
  return new MemoStorage();
}

export function generateSessionStorage() {
  if (SessionStorage.canUse()) {
    return new SessionStorage();
  }
  return new MemoStorage();
}

export const safeLocalStorage = generateStorage();

export const safeSessionStorage = generateSessionStorage();

/** examples
class UserStorage {
  storage = safeLocalStorage();
  key = 'user';

  get() {
    this.storage.get(this.key);
  }
  set(value) {
    this.storage.get(this.key, value);
  }
  remove() {
    this.storage.remove(this.key);
  }
}
 */
