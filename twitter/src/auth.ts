import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  pages: {
    signIn: '/i/flow/login',
    newUser: '/i/flow/signup',
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const authResponse = await fetch(`${process.env.AUTH_RUL}/api/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // username, password가 기본 값이라고 함.
          // 근데 ts상으로는 아닌데? 나중에 확인해봐야될듯
          body: JSON.stringify({
            id: credentials.username,
            password: credentials.password,
          }),
        });

        if (!authResponse.ok) {
          return null;
        }

        const user = await authResponse.json();

        return user;
      },
    }),
  ],
});
