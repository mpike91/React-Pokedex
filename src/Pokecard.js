import "./Pokecard.css";

const Pokecard = ({ id, name, type, exp }) => {
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
        <div className="Pokecard">
            <h2 className="Pokecard-name">{name}</h2>
            <img src={img} className="Pokecard-img"></img>
            <p className="Pokecard-type-exp">
                Type: {type}
                <br />
                EXP: {exp}
            </p>
        </div>
    )
};

export default Pokecard;