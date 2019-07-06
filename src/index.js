import React from 'react';
import ReactDOM from 'react-dom';
import Pokedex from './Pokedex';

class App extends React.Component{
    render(){
        return (
            <div>
                <Pokedex />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));