import { render } from "@testing-library/react";
import React from "react";
import PokemonCardWrapper from "../../Layouts/PokemonCardWrapper/PokemonCardWrapper";
import Countercard from "../CounterCard/CounterCard";
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {counter:0}
  }
  updateCounter = () => {
    this.setState({counter: this.state.counter +1});
  }
  render(){
    return (
      <main className="main">
        <PokemonCardWrapper updateCounter={this.updateCounter}/>
        <Countercard counter={this.state.counter}/>
      </main>
    );
  }
}

export default App;
