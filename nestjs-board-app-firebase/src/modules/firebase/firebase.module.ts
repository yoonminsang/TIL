import { Module, Provider } from '@nestjs/common';
import { ConfigModule, ConfigService, ConfigType } from '@nestjs/config';
import * as admin from 'firebase-admin';

import { FirebaseService } from './firebase.service';

import { firebaseConfig } from '@/configs/firebase.config';

const firebaseProvider: Provider = {
  provide: 'FIREBASE_APP',
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    const { clientEmail, privateKey, projectId }: ConfigType<typeof firebaseConfig> = configService.get('firebase')!;
    return admin.initializeApp({
      credential: admin.credential.cert({
        clientEmail,
        privateKey,
        projectId,
      }),
    });
  },
};

@Module({
  imports: [ConfigModule],
  providers: [firebaseProvider, FirebaseService],
  exports: [FirebaseService],
})
export class FirebaseModule {}
