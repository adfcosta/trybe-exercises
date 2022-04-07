import "./App.css";
import Header from "./Header";
import Pokedex from "./Pokedex";
import pokemons from './data';


function App() {
  return (
    <>
      <Header />
      <Pokedex pokemons={pokemons} />
    </>
  );
}

export default App;
