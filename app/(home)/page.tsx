'use client';
import { useEffect, useState } from 'react';

export default function Page() {
  // 데이터를 fetch하는 동안 아무것도 안보임 방지
  const [isLoading, setIsLoading] = useState(true);

  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      'https://nomad-movies.nomadcoders.workers.dev/movies'
    );
    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <main>{isLoading ? 'Loading...' : JSON.stringify(movies)}</main>
    </div>
  );
}
