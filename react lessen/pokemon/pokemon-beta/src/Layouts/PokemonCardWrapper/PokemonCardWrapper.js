import PokemonCard from "../../components/Pokemoncard/PokemonCard";
import "./PokemonCardWrapper.css";
function PokemonCardWrapper(props){
    return(
        <section className="pokemonCardWrapper">
            <PokemonCard 
            pokemonName="Bulbasair"
            pokemonType={["Grass","Poison"]}
            pokemonImg="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            pokemonHP="45"
            updateCounter={props.updateCounter}/>
            <PokemonCard 
            pokemonName="Charmander"
            pokemonType={["Fire"]}
            pokemonImg="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
            pokemonHP="39"
            updateCounter={props.updateCounter}/>
            <PokemonCard 
            pokemonName="Squirtle"
            pokemonType={["Water"]}
            pokemonImg="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
            pokemonHP="44"
            updateCounter={props.updateCounter}/>
            <PokemonCard 
            pokemonName="Pikachu"
            pokemonType={["Electric"]}
            pokemonImg="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            pokemonHP="35"
            updateCounter={props.updateCounter}/>
            
        </section>
    )
}

export default PokemonCardWrapper;

