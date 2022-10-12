//importeer css
import "./App.css"
import Navigation from './components/Navigation/Navigation';
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Card from './components/Card/Card';
const App = () =>{
    return(
        <>
            <Navigation/>
            <Header 
                bigTitle="Coffeez" 
                smallTitle="Coffee that will make you smile"
                buttonText="order now"
                />
            <Section bigTitleSection="Our Specialty's">
                <Card image="coffee-met-bord.jpg" text="text kaartje 1"/>
                <Card image="card1.jpg" text="tekst kaartje 2"/>
                <Card image="card2.jpg" text="tekst kaartje 3"/>
                <Card image="card3.jpg" text=" tekst kaartje 4"/>
            </Section>

        </>
    );
}

export default App;