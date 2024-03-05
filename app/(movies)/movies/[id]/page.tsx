import { API_URL } from '../../../(home)/page';

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

// const ComponentName = async()=> {} 형식으로도 작성 가능
export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log('start fetching');
  const [movies, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log('end fetching');
  return (
    <div>
      <h1>{movies.title}</h1>
    </div>
  );
}
