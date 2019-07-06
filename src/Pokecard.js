import React, {Component} from 'react';
import "./Pokecard.css";
import leftPad from 'left-pad';

class Pokecard extends Component{
    render(){
        // defaultProps = pokedata;
        let {poke} = this.props;
        let id = leftPad(poke.id, 3, 0);
        return (
            <div className="Pokecard">
                <ul className="pokecard-item">
                    <li className="pokecard-name">{poke.name}</li>
                    <img className="pokecard-img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`} />
                    <li>Type: {poke.type}</li>
                    <li>EXP: {poke.base_experience}</li>
                </ul>
            </div>
        );
    }
}

export default Pokecard;
