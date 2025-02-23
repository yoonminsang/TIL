// https://ms3864.tistory.com/468

const delay = (delay: number) => {
  return new Promise((resolve) => setTimeout(() => resolve(`delay ${delay} success`), delay));
};

const foo = () => {};
const bar = () => {};

function main1_1() {
  foo();
  delay(300);
  bar();
}

async function main1_2() {
  foo();
  await delay(33);
  bar();
}

async function main1_2_1() {
  const [state, setState] = useState();
  useEffect(() => {
    axios.get('/user').then((v) => setState(v.data));
  }, []);
}

async function main1_2_2() {
  const user = await this.userRepository.findOne({ where: { email } });
  const filteredUser = filter(createUser);
  return filteredUser;
}

async function main2_1() {
  foo();
  await delay(300);
  await delay(400);
  bar();
}

async function main2_1_1() {
  const user = await axios.get('/user');
  const posts = await axios.get(`/posts?userId=${user.data.id}`);
}

async function main2_1_2() {
  const user = await this.userRepository.findOne({ where: { email } });
  const posts = await this.postRepository.findOne({ where: { userId: user.id } });
  return posts;
}

async function main2_2() {
  foo();
  await Promise.all([delay(300), delay(400)]);
  bar();
}

async function main3_1() {
  foo();
  const data = await Promise.all([delay(300), delay(400), delay(500), delay(600), delay(700)]);
  console.log(data);
  bar();
}

const mockApiCall = (id: number) => () =>
  new Promise<string>((resolve) => setTimeout(() => resolve(`API ${id} 완료`), id % 2 === 0 ? 1000 : 500));
const tasks = Array.from({ length: 500 }, (_, i) => mockApiCall(i + 1));
const count = 50;

async function main4() {
  console.time('main4 time');
  const result: string[] = [];
  for (let i = 0; i < tasks.length; i += count) {
    const temp = await Promise.all(tasks.slice(i, i + count).map((fn) => fn()));
    result.push(...temp);
  }
  console.log(`최종 결과:`, result);
  console.timeEnd('main4 time');
}

function* getBatch<T>(arr: T[], batchSize: number): Generator<T[]> {
  for (let i = 0; i < arr.length; i += batchSize) {
    yield arr.slice(i, Math.min(i + batchSize, arr.length));
  }
}

async function main4_2() {
  const result: string[] = [];
  for (const batchGroup of getBatch(tasks, count)) {
    const temp = await Promise.all(batchGroup.map((fn) => fn()));
    result.push(...temp);
  }
  console.log(tasks);
  console.log(`최종 결과:`, result);
}

async function promisePool<T>(tasks: (() => Promise<T>)[], concurrency: number): Promise<T[]> {
  const results: T[] = [];
  const executing = new Set<Promise<void>>(); // 실행 중인 작업을 저장하는 Set

  for (const task of tasks) {
    const promise = task().then((result) => {
      results.push(result);
      executing.delete(promise); // 완료된 Promise를 Set에서 제거
    });

    executing.add(promise); // 실행 중인 Promise 추가

    // 실행 중인 작업이 concurrency를 초과하면, 하나가 끝날 때까지 대기
    if (executing.size >= concurrency) {
      await Promise.race(executing);
    }
  }

  // 모든 작업이 끝날 때까지 대기
  await Promise.all(executing);
  return results;
}

async function main5() {
  console.time('main5 time');
  const results = await promisePool<string>(tasks, count);
  console.log(results);
  console.timeEnd('main5 time');
}

(async () => {
  await main4();
  await main5();
})();

async function main5_2() {
  console.time('main5_2 time');

  const { results } = await PromisePool.for(tasks)
    .withConcurrency(count)
    .process(async (task) => await task());

  console.log(results);
  console.timeEnd('main5_2 time');
}

export {};
