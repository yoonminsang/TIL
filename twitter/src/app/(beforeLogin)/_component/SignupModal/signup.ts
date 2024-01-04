'use server';

import { redirect } from 'next/navigation';
import { signIn } from '@/auth';

export default async function onSubmit(prevState: { message: string } | undefined, formData: FormData) {
  if (!formData.get('id') || !(formData.get('id') as string)?.trim()) {
    return { message: 'no_id' };
  }
  if (!formData.get('name') || !(formData.get('name') as string)?.trim()) {
    return { message: 'no_name' };
  }
  if (!formData.get('password') || !(formData.get('password') as string)?.trim()) {
    return { message: 'no_password' };
  }
  if (!formData.get('image')) {
    return { message: 'no_image' };
  }
  let shouldRedirect = false;
  try {
    const response = await fetch('http://localhost:9090/api/users', {
      method: 'post',
      body: formData,
      credentials: 'include',
    });
    if (response.status === 403) {
      return { message: 'user_exists' };
    }
    console.log(await response.json());
    shouldRedirect = true;
    await signIn('credentials', {
      username: formData.get('id'),
      password: formData.get('password'),
      // 이게 true면 서버에서 redirect를 함.
      redirect: false,
    });
  } catch (err) {
    console.error(err);
  }

  if (shouldRedirect) {
    // await 문 안에서 사용하면 안됌.
    redirect('/home');
  }
}
