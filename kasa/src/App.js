import logo from './logo.svg';
import './App.css';

// import des 4 pages
import Home from './pages/Home/Home';
import DetailLocation from './pages/DetailLocation/DetailLocation';
import About from './pages/About/About';
import Error404 from './pages/Error404/Error404';

// import des composants
import Navigation from './components/Navigation/Navigation';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> COUCOU.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Banner /> <Navigation />
      <Home />
      <DetailLocation />
      <About />
      <Error404 />

      <Footer />
    </div>
    
  );
}

export default App;
