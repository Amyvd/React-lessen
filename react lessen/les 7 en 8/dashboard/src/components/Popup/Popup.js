import React from "react";

import "./Popup.css";
class Popup extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {input: ""}
    }
  
input = (event) =>{
    this.setState({input: event.target.value});
}

UpdateProducts = () =>{
    this.props.addButtonClicked(this.state.input);
}

render(){
    console.log(this.state.input);
    return(
        <article className="popup">
         <div class="popup__wrapper">
             <label htmlFor="name" className="popup__label">Naam</label>
             <input onChange={this.input} type="text" value={this.state.input} className="popup__input" />
         </div >
         
         <button onClick={this.UpdateProducts}className="popup__button">Voeg Toe</button>
        </article>
     );
}

    
}

export default Popup;