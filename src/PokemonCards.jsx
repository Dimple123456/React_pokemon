export const PokemonCards = ({pokemondata}) => {
    return <li className="pokemon-card">
        <figure>
            <img
            src={pokemondata.sprites.other.dream_world.front_default}
            alt="pokemondata.name"
            className="pokemon-image" />
        </figure>
        <h1 className="pokemon-name">{pokemondata.name}</h1>
        <div className="pokemon-info pokemon-highlight">
            <p>
                {
                    pokemondata.types.map((curType) => curType.type.name).join(", ")
                }
                
            </p>
        </div>
        <div className="grid-three-cols">
            <p className="pokemon-info">
                <span>Height:</span> {pokemondata.height}
            </p>
            <p className="pokemon-info"> 
                <span>weight:</span> {pokemondata.weight}
            </p>
            <p className="pokemon-info">
                <span>speed:</span> {pokemondata.stats[5].base_stat}
            </p>

        </div>

        <div className="grid-three-cols">
            <div className="pokemon-info">
                <p>{pokemondata.base_experience}</p>
                <span>Experience:</span>

            </div>
            <div className="pokemon-info">
                <p>{pokemondata.stats[1].base_stat}</p>
                <span>Attack:</span>

            </div>
            <div className="pokemon-info">
                <p>
                    {pokemondata.abilities
                    .map((abilityInfo) => abilityInfo.ability.name )
                    .slice(0, 1)
                    .join(", ")}
                </p>
                <span>Abilities:</span>

            </div>

        </div>
    </li>
};