import { ConfigModule, registerAs } from '@nestjs/config';

const assertString = (value: string | undefined, env: string): string => {
  if (typeof value === 'undefined') {
    throw new Error(`${env} is not defined`);
  }
  return value;
};

export const firebaseConfig = registerAs('firebase', () => ({
  type: assertString(process.env.FIREBASE_TYPE, 'FIREBASE_TYPE'),
  projectId: assertString(process.env.FIREBASE_PROJECT_ID, 'FIREBASE_PROJECT_ID'),
  privateKey: assertString(process.env.FIREBASE_PRIVATE_KEY, 'FIREBASE_PRIVATE_KEY'),
  clientEmail: assertString(process.env.FIREBASE_CLIENT_EMAIL, 'FIREBASE_CLIENT_EMAIL'),
  clientId: assertString(process.env.FIREBASE_CLIENT_ID, 'FIREBASE_CLIENT_ID'),
  authUri: assertString(process.env.FIREBASE_AUTH_URI, 'FIREBASE_AUTH_URI'),
  tokenUri: assertString(process.env.FIREBASE_TOKEN_URI, 'FIREBASE_TOKEN_URI'),
  authCertUrl: assertString(process.env.FIREBASE_AUTH_CERT_URL, 'FIREBASE_AUTH_CERT_URL'),
  clientX509CertUrl: assertString(process.env.FIREBASE_CLIENT_X509_CERT_URL, 'FIREBASE_CLIENT_X509_CERT_URL'),
  universalDomain: assertString(process.env.FIREBASE_UNIVERSAL_DOMAIN, 'FIREBASE_UNIVERSAL_DOMAIN'),
}));

export const getFirebaseConfigModule = () =>
  ConfigModule.forRoot({
    cache: true,
    isGlobal: true,
    envFilePath: `.env.${process.env.NODE_ENV}`,
    load: [firebaseConfig],
  });
