import React from 'react'
import './App.css'
import ResultPokemon from '../components/searchBar/ResultPokemon'
import SearchBarPokemon from '../components/searchBar/SearchBarPokemon'
import ActionPokemon from '../components/ActionPokemon.jsx'
import CantPokemon from '../components/CantPokemon'
import store from '../redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="row">
          <div className="col-12">
            <div className="card mt-5" style={{ maxWidth: '370px' }}>
              <div className="row no-gutters">
                <div className="col-4">
                  <img src={require("../img/pokemon.png")} alt="pokemon" className="card-img"></img>
                </div>
                <div className='col-8'>
                  <div className="card-body">
                    <div className="card-title h3 text-center">
                      <CantPokemon></CantPokemon>
                    </div>
                    <ActionPokemon></ActionPokemon>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4 border-top pt-3">
            <SearchBarPokemon></SearchBarPokemon>
          </div>
          <div className="col-12">
            <ResultPokemon></ResultPokemon>
          </div>
        </div>
      </div>
    </Provider>

  );
}

export default App;