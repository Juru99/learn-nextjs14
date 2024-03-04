export const metadata = {
  title: 'Home',
};

const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies() {
  // loading 상태를 만들기 위해 의도적으로 5초를 기다리는 코드
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return <main>{JSON.stringify(movies)}</main>;
}
