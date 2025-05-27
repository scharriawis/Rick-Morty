import imageRickMorty from './img/rick-morty.png'
import './App.css';
import { useState } from 'react';
import Charecters from './components/Charecters';

function App() {

  const [charecters, setCharecters] = useState(null);

  
    console.log(charecters);
  const reqAPI = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    setCharecters(characterApi.results);
  }

  return (
    <div className="App">
      <header className="App-header">
          <h1 className="title">Rick & Morty</h1>
          {charecters ? (
            <Charecters charecters={charecters} setCharecters={setCharecters}/>
          ) : (
            <>
              <img src={imageRickMorty} alt='Rick & Morty' className='img-home'></img>
              <button onClick={reqAPI} className='btn-search'>Buscar personajes</button>
            </>
          )}
      </header>
    </div>
  );
}

export default App;
