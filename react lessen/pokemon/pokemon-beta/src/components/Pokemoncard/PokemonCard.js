import React from "react";
import "./PokemonCard.css";
class PokemonCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {hp: 0, caughtOrRan: false}
    }

    componentDidMount(){
        this.setState({hp: this.props.pokemonHP});
    }

    
    attack = () => {
        let randomNumber = Math.floor(Math.random() * (30 - 1) + 1);
        this.setState({
            hp: this.state.hp - randomNumber
        }, function(){
            if(this.state.hp <= 0){
                this.setState({
                    hp:0,
                })
            }
        });
    }

    catch = () => {
        this.setState({caughtOrRan: true});
        let damagePercentage = 100 - Math.floor(this.state.hp / this.props.pokemonHP *100);
        let dice = Math.floor(Math.random() * (100 - 1) + 1);
        if (damagePercentage > dice){
            this.props.updateCounter();
        }
      
    }

    render(){
        let types = this.props.pokemonType.map(function(type){
            return <span key={type} className={`pokemonCard__type pokemonCard__type--${type}`}>{type}</span>
         });

         let buttons = null;
         if(this.state.caughtOrRan === false){
            buttons = 
            <>
                <button onClick={this.attack}className="pokemonCard__button pokemonCard__button--Attack">Attack</button>
                <button onClick={this.catch} className="pokemonCard__button pokemonCard__button--Catch">Catch</button>

            </>
         };
        return(
            <article className="pokemonCard">
                <header className="pokemonCard__header">
                    <h2 className="pokemonCard__title">{this.props.pokemonName}</h2>
                    <div className="pokemonCard__labelwrapper">
                        {types}
                    </div>
                </header>
                <section className="pokemonCard__section">
                    <figure className="pokemonCard__figure">
                        <img src={this.props.pokemonImg} alt="" className="pokemonCard__img" />
                    </figure>
                    <div className="pokemonCard__h3wrapper">
                        <h3 className="pokemonCard__HP">HP {this.state.hp}</h3>
                    </div>
                </section>
                <footer className="pokemonCard__footer">
                    {buttons}
                </footer>
            </article>
        )
    }
   
    
}

export default PokemonCard;