import Seo from '@/components/Seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Home() {
  const [movies, setMovies] = useState();
  const router = useRouter();
  // const onClickHandler = (id, title) => {
  //   router.push(`/movies/${title}/${id}`);
  // };
  useEffect(() => {
    (async () => {
      const response = await fetch('/api/movies');
      const json = await response.json();
      setMovies(json.results);
    })();
  }, []);

  return (
    <div className='container'>
      <Seo title='Home' />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <Link
          href={`/movies/${movie.original_title}/${movie.id}`}
          key={movie?.id}
          // onClick={() => onClickHandler(movie.id, movie.original_title)}
        >
          <div className='movie'>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </div>
        </Link>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
