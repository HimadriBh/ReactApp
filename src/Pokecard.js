import React, {Component} from 'react';
import "./Pokecard.css";
import leftPad from 'left-pad';

const POKE_API =  'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokecard extends Component{
    render(){
        // defaultProps = pokedata;
        let {poke} = this.props;
        let id = leftPad(poke.id, 3, 0);
        let imgSrc = `${POKE_API}${id}.png`;
        return (
            <div className="Pokecard">
                <ul className="pokecard-item">
                    <li className="pokecard-name">{poke.name}</li>
                    <img className="pokecard-img" src={imgSrc} alt={poke.name}/>
                    <li>Type: {poke.type}</li>
                    <li>EXP: {poke.base_experience}</li>
                </ul>
            </div>
        );
    }
}

export default Pokecard;
