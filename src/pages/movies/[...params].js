import { useRouter } from 'next/router';

function MovieDetail() {
  const router = useRouter();
  const [title, id] = router.query.params;
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default MovieDetail;
