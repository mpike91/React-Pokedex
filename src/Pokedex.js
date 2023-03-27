import "./Pokedex.css";
import Pokecard from "./Pokecard.js";

const Pokedex = (props) => {
    console.log(props);
    const winner = props.isWinner ? `POKEDEX ${props.id} WINS!` : undefined;

    return (
        <div className="Pokedex">
            <h1 className="Pokedex-header">Pokedex {props.id}</h1>
            {props.pokemon.map(item =>
                <Pokecard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    type={item.type}
                    exp={item.base_experience}
                />
            )}
            <h1>{winner}</h1>
        </div>
    )
};

export default Pokedex;