import Pokedex from "./Pokedex.js";

const Pokegame = ({ pokemon }) => {
    const hand1 = [...pokemon];
    const hand2 = [];
    const split = hand1.length / 2;

    while (hand1.length > split) {
        hand2.push((hand1.splice(Math.floor(Math.random() * hand1.length), 1))[0]);
    }

    const exp1 = hand1.reduce((acc, curr) => acc + curr.base_experience, 0);
    const exp2 = hand2.reduce((acc, curr) => acc + curr.base_experience, 0);

    return (
        <div className="Pokegame">
            <Pokedex id='1' exp={exp1} pokemon={hand1} isWinner={exp1 >= exp2 ? true : false} />
            <Pokedex id='2' exp={exp2} pokemon={hand2} isWinner={exp2 >= exp1 ? true : false} />
        </div>
    );
};

export default Pokegame;