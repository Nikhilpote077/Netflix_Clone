import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      {/* <h1 style={{ color: "red", fontSize: "30px", textAlign: "center" }}>
        Netflix Clone
      </h1> */}
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINAL"
        isLargeRow
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="TRENDING NOW " fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED " fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION MOVIES " fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
