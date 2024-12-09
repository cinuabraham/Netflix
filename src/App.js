import './App.css';
import Banner from './components/Banner';
import Rows from './components/Rows';
import requests from './requests';
import Nav from './components/Nav';


function App() {
  return (
    <div>
      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>

       <Rows isPoster={true} title="NetflixOriginal" fetchUrl={requests.fetchNetflixOriginals}/>

       <Rows title="Trending Movie" fetchUrl={requests.fetchTrending}/>

       <Rows title="Top Rated Movies" fetchUrl={requests.fetchTopRated}/>

       <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies}/>

       <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>

       <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>

       <Rows isPoster={true} title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>

       <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
