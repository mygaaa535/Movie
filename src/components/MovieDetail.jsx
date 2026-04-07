import { useParams, useNavigate } from "react-router-dom";

import Inception from "../assets/inception.jpg";
import DarkKnight from "../assets/darkknight.jpg";
import Interstellar from "../assets/interstellar.jpg";
import Parasite from "../assets/parasite.webp";
import Avengers from "../assets/avengers.jpg";
import Titanic from "../assets/titanic.jpg";
import Matrix from "../assets/matrix.jpg";
import ForrestGump from "../assets/gump.jpg";

function MovieDetail() {
  const { id } = useParams();

  const movies = [
    {
      id: 1,
      title: "Inception",
      director: "Christopher Nolan",
      year: 2010,
      genre: ["Sci-Fi", "Action"],
      rating: 8.8,
      duration: 148,
      backdrop: Inception,
    },
    {
      id: 2,
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      genre: ["Action", "Crime", "Drama"],
      rating: 9.0,
      duration: 152,
      backdrop: DarkKnight,
    },
    {
      id: 3,
      title: "Interstellar",
      director: "Christopher Nolan",
      year: 2014,
      genre: ["Sci-Fi", "Drama"],
      rating: 8.6,
      duration: 169,
      backdrop: Interstellar,
    },
    {
      id: 4,
      title: "Parasite",
      director: "Bong Joon-ho",
      year: 2019,
      genre: ["Thriller", "Drama"],
      rating: 8.5,
      duration: 132,
      backdrop: Parasite,
    },
    {
      id: 5,
      title: "Avengers: Endgame",
      director: "Anthony Russo, Joe Russo",
      year: 2019,
      genre: ["Action", "Adventure", "Sci-Fi"],
      rating: 8.4,
      duration: 181,
      backdrop: Avengers,
    },
    {
      id: 6,
      title: "Titanic",
      director: "James Cameron",
      year: 1997,
      genre: ["Romance", "Drama"],
      rating: 7.9,
      duration: 195,
      backdrop: Titanic,
    },
    {
      id: 7,
      title: "The Matrix",
      director: "Lana Wachowski, Lilly Wachowski",
      year: 1999,
      genre: ["Sci-Fi", "Action"],
      rating: 8.7,
      duration: 136,
      backdrop: Matrix,
    },
    {
      id: 8,
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      year: 1994,
      genre: ["Drama", "Romance"],
      rating: 8.8,
      duration: 142,
      backdrop: ForrestGump,
    },
  ];

  const movie = movies.find((m) => m.id === Number(id));
  const navigate = useNavigate();

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div>
      <img src={movie.backdrop} width="300" />
      <h1>{movie.title}</h1>
      <p> Director:{movie.director}</p>
      <p>Genre: {movie.genre.join(", ")}</p>
      <p>Year:{movie.year}</p>
      <p>Rating:{movie.rating}</p>
      <p>Duration:{movie.duration}</p>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          borderRadius: "10px",
          background: "purple",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        ⬅ Back
      </button>
    </div>
  );
}

export default MovieDetail;
