'use client';
import { useEffect } from 'react';
import { useCache } from 'saga-query/react';
import { fetchRepo } from '../api';

interface Repo {
  name: string;
  description: string;
  subscribers_count: number;
  stargazers_count: number;
  forks_count: number;
}

export default function Home() {
  const { data, isInitialLoading, trigger } = useCache<Repo>(fetchRepo());

  useEffect(() => {
    trigger();
  }, []);

  if (isInitialLoading) return <div>Loading ...</div>;
  if (!data) return <div>Data not found.</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}
