import "./App.css";
import MovieBox from "./components/MovieBox.jsx";
import Parasite from "./assets/parasite.webp";
import Avengers from "./assets/avengers.jpg";
import DarkKnight from "./assets/darkknight.jpg";
import Inception from "./assets/inception.jpg";
// Optional: add these for unique cards (if you place them in src/assets)
import Matrix from "./assets/matrix.jpg";
import Titanic from "./assets/titanic.jpg";
import ForrestGump from "./assets/gump.jpg";
import Interstellar from "./assets/interstellar.jpg";
import { useState } from "react";

function App() {
  // huwisagch === nuhtsul ? true : false
  // if(huwisagch === nuhtsul) {
  //   // true
  // } else {
  //   // false
  // }
  const [selectedMovie, setSelectedMovie] = useState(null);
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

  return (
    <div className="App">
      {" "}
      <div className="detail1">
        {" "}
        {selectedMovie && (
          <div className="detail1">
            <img src={selectedMovie.backdrop} alt={selectedMovie.title} />
            <div className="detail-info">
              {" "}
              <h2 style={{ fontFamily: "monospace", fontSize: "xx-large" }}>
                {selectedMovie.title}
              </h2>
              <p>Director: {selectedMovie.director}</p>
              <p>Year: {selectedMovie.year}</p>
              <p>Genre: {selectedMovie.genre.join(", ")}</p>
              <p>Rating: {selectedMovie.rating}</p>
              <p>Duration: {selectedMovie.duration} min</p>
            </div>
          </div>
        )}
      </div>
      <section id="center" style={{ margin: "30px" }}>
        <div className="kinonuud">
          {" "}
          {movies.map((movie) => (
            <MovieBox
              key={movie.id}
              movie={movie}
              onSelect={setSelectedMovie}
            />
          ))}
        </div>
      </section>
      <div className="ticks"></div>
    </div>
  );
}

export default App;
