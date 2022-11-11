import React from "react";

import LeftPanel from '../LeftPanel/LeftPanel';
import RightPanel from '../RightPanel/RightPanel';
import Popup from "../Popup/Popup";

import flowerimg from "../../img/flowers.jpg";
import pineappleimg from "../../img/pineapple.jpg";
import colaimg from "../../img/colablikje.jpg";
import skyimg from "../../img/sky.jpg";
import boekenimg from "../../img/boeken.jpg";
import waterfallimg from "../../img/waterfall.jpg";
import candyimg from "../../img/candy.jpg";
import boomimg from "../../img/boom.jpg";
import cocktailimg from "../../img/cocktail.jpg";

import "./Dashboard.css";
class Dashboard extends React.Component{
    constructor(){
        super();
        this.state = {productCards:[], open: true};
    }

    onButtonClicked = () =>{
        this.setState({open: !this.state.open})
    }
        

    addButtonClicked = (inputFromPopup) => {
        let toBeAddedImage ;

        switch(inputFromPopup){
            case("cola"):
            toBeAddedImage = colaimg;
            break;

            case("lucht"):
            toBeAddedImage = skyimg;
            break;

            case("boek"):
            toBeAddedImage = boekenimg;
            break;

            case("water"):
            toBeAddedImage = waterfallimg;
            break;

            case("snoep"):
            toBeAddedImage = candyimg;
            break;

            case("boom"):
            toBeAddedImage = boomimg;
            break;

            case("drank"):
            toBeAddedImage = cocktailimg;
            break;

            default:
                toBeAddedImage = skyimg;
                break;
        }
        let ToBeAdded = [
            {
                name: inputFromPopup,
                img: toBeAddedImage,
            }
        ]
        let mergedArrays = this.state.productCards.concat(ToBeAdded);
        this.setState({
            productCards: mergedArrays,
            open: !this.state.open,
        })
    }



    componentDidMount(){
        let productCards = 
        [
            {
                name: "Placeholder",
            },
            {
                name: "Flowers",
                img: flowerimg,
            },
            {
                name: "Pineapple",
                img: pineappleimg,
            },
        
        ];
        
        this.setState({productCards})
    }
   

  render(){
    let NavigationListItem = 
    [
        {
            name:"Home",
            message: 0,
        },
        {
            name:"Facturen",
            message: 3,
        },
        {
            name:"Bestellingen",
            message: 0,
        },
        {
            name:"Retour",
            message: 1,
        },
        {
            name:"Contact",
            message: 2,
        },
    ];

    if(this.state.open === true){
        return(
            <article className="dashboard">
                <LeftPanel NavigationListItem={NavigationListItem} buttonText="Go Premium"/>
                <RightPanel productCards={this.state.productCards} onButtonClicked={this.onButtonClicked} headerText="Mijn Producten" buttonSymbol="+" buttonText="Voeg een product toe"/>
            </article>
        );
      }
      return(
        <>
            <Popup addButtonClicked={this.addButtonClicked}/>
        </>
      );
};
    
    
}

export default Dashboard;