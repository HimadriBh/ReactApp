import React, {Component} from 'react';
import "./Pokecard.css";
import leftPad from 'left-pad';

const POKE_API =  'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokecard extends Component{
    render(){
        let {id, name, type, exp} = this.props;
        let imgId = leftPad(id, 3, 0);
        let imgSrc = `${POKE_API}${imgId}.png`;
        return (
            <div className="Pokecard">
                <ul className="pokecard-item">
                    <li className="pokecard-name">{name}</li>
                    <img className="pokecard-img" src={imgSrc} alt={name}/>
                    <li>Type: {type}</li>
                    <li>EXP: {exp}</li>
                </ul>
            </div>
        );
    }
}

export default Pokecard;
