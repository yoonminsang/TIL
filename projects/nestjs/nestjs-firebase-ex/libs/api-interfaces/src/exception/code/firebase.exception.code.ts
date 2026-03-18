import type { ExtractValue } from '../../types';

// NOTE: firebase에서 제공하는 에러 [링크](https://firebase.google.com/docs/auth/admin/errors?hl=ko)

/** table을 선택하고 다음 코드를 입력해서 firebaseErrors를 얻습니다.
```
function cleanErrorCodes(codes) {
  return codes.filter((code) => !!code && code.trim() !== '').map((code) => code.trim());
}
arr = cleanErrorCodes(
  [...temp1.querySelector('tbody').querySelectorAll('tr')].map((v) => v.firstElementChild?.textContent).slice(1)
);
obj = arr.reduce((acc, cur) => {
  acc[cur] = cur;
  return acc;
}, {});
```
 */
export const FirebaseExceptionCode = {
  'auth/claims-too-large': 'auth/claims-too-large',
  'auth/email-already-exists': 'auth/email-already-exists',
  'auth/id-token-expired': 'auth/id-token-expired',
  'auth/id-token-revoked': 'auth/id-token-revoked',
  'auth/insufficient-permission': 'auth/insufficient-permission',
  'auth/internal-error': 'auth/internal-error',
  'auth/invalid-argument': 'auth/invalid-argument',
  'auth/invalid-claims': 'auth/invalid-claims',
  'auth/invalid-continue-uri': 'auth/invalid-continue-uri',
  'auth/invalid-creation-time': 'auth/invalid-creation-time',
  'auth/invalid-credential': 'auth/invalid-credential',
  'auth/invalid-disabled-field': 'auth/invalid-disabled-field',
  'auth/invalid-display-name': 'auth/invalid-display-name',
  'auth/invalid-dynamic-link-domain': 'auth/invalid-dynamic-link-domain',
  'auth/invalid-email': 'auth/invalid-email',
  'auth/invalid-email-verified': 'auth/invalid-email-verified',
  'auth/invalid-hash-algorithm': 'auth/invalid-hash-algorithm',
  'auth/invalid-hash-block-size': 'auth/invalid-hash-block-size',
  'auth/invalid-hash-derived-key-length': 'auth/invalid-hash-derived-key-length',
  'auth/invalid-hash-key': 'auth/invalid-hash-key',
  'auth/invalid-hash-memory-cost': 'auth/invalid-hash-memory-cost',
  'auth/invalid-hash-parallelization': 'auth/invalid-hash-parallelization',
  'auth/invalid-hash-rounds': 'auth/invalid-hash-rounds',
  'auth/invalid-hash-salt-separator': 'auth/invalid-hash-salt-separator',
  'auth/invalid-id-token': 'auth/invalid-id-token',
  'auth/invalid-last-sign-in-time': 'auth/invalid-last-sign-in-time',
  'auth/invalid-page-token': 'auth/invalid-page-token',
  'auth/invalid-password': 'auth/invalid-password',
  'auth/invalid-password-hash': 'auth/invalid-password-hash',
  'auth/invalid-password-salt': 'auth/invalid-password-salt',
  'auth/invalid-phone-number': 'auth/invalid-phone-number',
  'auth/invalid-photo-url': 'auth/invalid-photo-url',
  'auth/invalid-provider-data': 'auth/invalid-provider-data',
  'auth/invalid-provider-id': 'auth/invalid-provider-id',
  'auth/invalid-oauth-responsetype': 'auth/invalid-oauth-responsetype',
  'auth/invalid-session-cookie-duration': 'auth/invalid-session-cookie-duration',
  'auth/invalid-uid': 'auth/invalid-uid',
  'auth/invalid-user-import': 'auth/invalid-user-import',
  'auth/maximum-user-count-exceeded': 'auth/maximum-user-count-exceeded',
  'auth/missing-android-pkg-name': 'auth/missing-android-pkg-name',
  'auth/missing-continue-uri': 'auth/missing-continue-uri',
  'auth/missing-hash-algorithm': 'auth/missing-hash-algorithm',
  'auth/missing-ios-bundle-id': 'auth/missing-ios-bundle-id',
  'auth/missing-uid': 'auth/missing-uid',
  'auth/missing-oauth-client-secret': 'auth/missing-oauth-client-secret',
  'auth/operation-not-allowed': 'auth/operation-not-allowed',
  'auth/phone-number-already-exists': 'auth/phone-number-already-exists',
  'auth/project-not-found': 'auth/project-not-found',
  'auth/reserved-claims': 'auth/reserved-claims',
  'auth/session-cookie-expired': 'auth/session-cookie-expired',
  'auth/session-cookie-revoked': 'auth/session-cookie-revoked',
  'auth/too-many-requests': 'auth/too-many-requests',
  'auth/uid-already-exists': 'auth/uid-already-exists',
  'auth/unauthorized-continue-uri': 'auth/unauthorized-continue-uri',
  'auth/user-not-found': 'auth/user-not-found',
} as const;
export type FirebaseExceptionCode = ExtractValue<typeof FirebaseExceptionCode>;
