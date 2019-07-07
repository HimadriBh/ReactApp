import React from 'react';
import ReactDOM from 'react-dom';
// import Pokedex from './Pokedex';
import Pokegame from './Pokegame';
import "./App.css";

class App extends React.Component{
    render(){
        return (
            <div className="App">
                <Pokegame />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
