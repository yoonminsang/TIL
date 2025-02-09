module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    curly: ['error', 'all'], // if else문에 항상 코드 블록을 넣습니다.
    'import/no-cycle': 'error', // import 사이클이 발생할 때 경고합니다. 이는 모듈 간의 순환 종속성을 피하기 위한 것입니다.
    'no-empty': ['error', { allowEmptyCatch: true }], // 빈 블록을 허용하지 않습니다. 그러나 빈 catch 블록은 허용합니다.
    'no-useless-rename': 'error', // 불필요한 리네임을 금지합니다. 예를 들어, import { foo as foo }는 에러가 됩니다.
    'object-shorthand': 'error', // 객체 리터럴의 속성 및 메서드 정의를 단축 구문으로 사용하도록 강제합니다. 예를 들어, { foo: foo } 대신 { foo }를 사용합니다.

    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        allowSeparatedGroups: true,
      },
    ], // import문을 정렬합니다
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ], // import문의 순서를 정렬해줍니다.
    'import/no-duplicates': 'error', // 중복된 import를 금지하지 않습니다
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'], // 타입 스펙을 일관되게 최상위 수준에서 사용하도록 강제합니다.z

    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',

    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // 사용되지 않는 변수를 금지합니다. 단, _로 시작하는 인자는 예외로 처리합니다.
    '@typescript-eslint/no-explicit-any': 'warn', // 명시적인 any 타입 사용에 대해 경고합니다
    '@typescript-eslint/no-namespace': 'off', // 네임스페이스 사용을 금지하지 않습니다.

    '@typescript-eslint/interface-name-prefix': 'off', //인터페이스 이름에 접두사를 붙이는 규칙을 비활성화합니다. 예를 들어, 인터페이스 이름이 IUser나 IPerson과 같이 I로 시작할 필요가 없도록 합니다.
    '@typescript-eslint/explicit-function-return-type': 'off', //함수의 반환 타입을 명시적으로 정의하는 규칙을 비활성화합니다. 함수의 반환 타입을 명시하지 않아도 되며, TypeScript가 자동으로 타입을 추론하도록 허용합니다.
    '@typescript-eslint/explicit-module-boundary-types': 'off', //모듈 경계(함수, 메서드, 클래스의 공개 메서드)의 타입을 명시적으로 정의하는 규칙을 비활성화합니다. 이는 TypeScript가 타입을 추론하도록 허용하며, 모든 모듈 경계에 타입을 명시할 필요가 없음을 의미합니다.
  },
};
