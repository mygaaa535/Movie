import { useState } from "react";

function MovieBox({ movie, onSelect }) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="movie-box-container" style={{ position: "relative" }}>
      <div
        className="movie-box"
        style={{
          backgroundImage: `url(${movie.backdrop})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div>
          <button
            className="tovch"
            style={{ position: "relative", zIndex: 2 }}
            onClick={() => {
              onSelect(movie);
              setShowDetail(!showDetail);
            }}
          >
            {movie.title}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieBox;
