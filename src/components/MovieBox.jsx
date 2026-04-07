import { useNavigate } from "react-router-dom";

function MovieBox({ movie }) {
  const navigate = useNavigate();

  return (
    <div
      className="movie-box"
      style={{
        backgroundImage: `url(${movie.backdrop})`,
      }}
    >
      <button className="tovch" onClick={() => navigate(`/movie/${movie.id}`)}>
        {movie.title}
      </button>
    </div>
  );
}

export default MovieBox;
