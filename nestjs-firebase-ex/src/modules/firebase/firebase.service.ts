import { HttpStatus, Injectable } from '@nestjs/common';
import type { FirebaseError } from 'firebase-admin';
import admin from 'firebase-admin';
import { CreateRequest, UpdateRequest } from 'firebase-admin/lib/auth/auth-config';
import { FirebaseExceptionCode } from 'syms-api-interfaces';

import { CustomError } from '@/exception/RestException';
import { enumIncludes } from '@/utils/types.utils';

// TODO: 인터페이스 좁히기
@Injectable()
export class FirebaseService {
  // NOTE: socket을 사용해야하면 firestore로 가볍게 구현할 수 있다.
  // private firestore = admin.firestore();

  async getUser(uuid: string) {
    return await admin.auth().getUser(uuid);
  }

  async createUser(userDto: CreateRequest) {
    try {
      return await admin.auth().createUser(userDto);
    } catch (err) {
      this.handleFirebaseError(err as FirebaseError);
    }
  }

  async updateUser(uid: string, properties: UpdateRequest) {
    try {
      return await admin.auth().updateUser(uid, properties);
    } catch (err) {
      this.handleFirebaseError(err as FirebaseError);
    }
  }

  async deleteUser(uid: string) {
    try {
      await admin.auth().deleteUser(uid);
    } catch (err) {
      this.handleFirebaseError(err as FirebaseError);
    }
  }

  async createCustomToken(uid: string, developerClaims?: object) {
    try {
      return admin.auth().createCustomToken(uid, developerClaims);
    } catch (err) {
      this.handleFirebaseError(err as FirebaseError);
    }
  }

  async getVerifyToken(token: string) {
    try {
      return await this.verifyToken(token);
    } catch (err) {
      this.handleFirebaseError(err as FirebaseError);
    }
  }

  /** idToken만 가능합니다.(customToken 불가능) */
  async getUserByToken(idToken: string) {
    try {
      const decodedToken = await this.verifyToken(idToken);
      return await this.getUser(decodedToken.uid);
    } catch (err) {
      this.handleFirebaseError(err as FirebaseError);
    }
  }

  // NOTE: 사용하는쪽에서 에러처리필요
  private async verifyToken(token: string) {
    return await admin.auth().verifyIdToken(token);
  }

  private handleFirebaseError(error: FirebaseError): never {
    if (enumIncludes(FirebaseExceptionCode, error.code)) {
      const statusCode = firebaseErrorToHttpStatusCode[error.code];
      throw new CustomError.RestException(statusCode, { code: error.code, message: error.message });
    } else {
      const statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
      throw new CustomError.RestException(statusCode, { message: [error.code, error.message] });
    }
  }
}

const firebaseErrorToHttpStatusCode: Record<FirebaseExceptionCode, HttpStatus> = {
  'auth/claims-too-large': HttpStatus.BAD_REQUEST,
  'auth/email-already-exists': HttpStatus.BAD_REQUEST,
  'auth/id-token-expired': HttpStatus.UNAUTHORIZED,
  'auth/id-token-revoked': HttpStatus.UNAUTHORIZED,
  'auth/insufficient-permission': HttpStatus.FORBIDDEN,
  'auth/internal-error': HttpStatus.INTERNAL_SERVER_ERROR,
  'auth/invalid-argument': HttpStatus.BAD_REQUEST,
  'auth/invalid-claims': HttpStatus.BAD_REQUEST,
  'auth/invalid-continue-uri': HttpStatus.BAD_REQUEST,
  'auth/invalid-creation-time': HttpStatus.BAD_REQUEST,
  'auth/invalid-credential': HttpStatus.BAD_REQUEST,
  'auth/invalid-disabled-field': HttpStatus.BAD_REQUEST,
  'auth/invalid-display-name': HttpStatus.BAD_REQUEST,
  'auth/invalid-dynamic-link-domain': HttpStatus.BAD_REQUEST,
  'auth/invalid-email': HttpStatus.BAD_REQUEST,
  'auth/invalid-email-verified': HttpStatus.BAD_REQUEST,
  'auth/invalid-hash-algorithm': HttpStatus.BAD_REQUEST,
  'auth/invalid-hash-block-size': HttpStatus.BAD_REQUEST,
  'auth/invalid-hash-derived-key-length': HttpStatus.BAD_REQUEST,
  'auth/invalid-hash-key': HttpStatus.BAD_REQUEST,
  'auth/invalid-hash-memory-cost': HttpStatus.BAD_REQUEST,
  'auth/invalid-hash-parallelization': HttpStatus.BAD_REQUEST,
  'auth/invalid-hash-rounds': HttpStatus.BAD_REQUEST,
  'auth/invalid-hash-salt-separator': HttpStatus.BAD_REQUEST,
  'auth/invalid-id-token': HttpStatus.UNAUTHORIZED,
  'auth/invalid-last-sign-in-time': HttpStatus.BAD_REQUEST,
  'auth/invalid-page-token': HttpStatus.BAD_REQUEST,
  'auth/invalid-password': HttpStatus.BAD_REQUEST,
  'auth/invalid-password-hash': HttpStatus.BAD_REQUEST,
  'auth/invalid-password-salt': HttpStatus.BAD_REQUEST,
  'auth/invalid-phone-number': HttpStatus.BAD_REQUEST,
  'auth/invalid-photo-url': HttpStatus.BAD_REQUEST,
  'auth/invalid-provider-data': HttpStatus.BAD_REQUEST,
  'auth/invalid-provider-id': HttpStatus.BAD_REQUEST,
  'auth/invalid-oauth-responsetype': HttpStatus.BAD_REQUEST,
  'auth/invalid-session-cookie-duration': HttpStatus.BAD_REQUEST,
  'auth/invalid-uid': HttpStatus.BAD_REQUEST,
  'auth/invalid-user-import': HttpStatus.BAD_REQUEST,
  'auth/maximum-user-count-exceeded': HttpStatus.BAD_REQUEST,
  'auth/missing-android-pkg-name': HttpStatus.BAD_REQUEST,
  'auth/missing-continue-uri': HttpStatus.BAD_REQUEST,
  'auth/missing-hash-algorithm': HttpStatus.BAD_REQUEST,
  'auth/missing-ios-bundle-id': HttpStatus.BAD_REQUEST,
  'auth/missing-uid': HttpStatus.BAD_REQUEST,
  'auth/missing-oauth-client-secret': HttpStatus.BAD_REQUEST,
  'auth/operation-not-allowed': HttpStatus.FORBIDDEN,
  'auth/phone-number-already-exists': HttpStatus.BAD_REQUEST,
  'auth/project-not-found': HttpStatus.NOT_FOUND,
  'auth/reserved-claims': HttpStatus.BAD_REQUEST,
  'auth/session-cookie-expired': HttpStatus.UNAUTHORIZED,
  'auth/session-cookie-revoked': HttpStatus.UNAUTHORIZED,
  'auth/too-many-requests': HttpStatus.TOO_MANY_REQUESTS,
  'auth/uid-already-exists': HttpStatus.BAD_REQUEST,
  'auth/unauthorized-continue-uri': HttpStatus.FORBIDDEN,
  'auth/user-not-found': HttpStatus.NOT_FOUND,
};
