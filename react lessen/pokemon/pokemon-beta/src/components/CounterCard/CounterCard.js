import "./CounterCard.css"


function Countercard({counter}){
    return(
        <section className="counterCard">
            <h2 className="counterCard__h2">{counter}</h2>
        </section>
    )
}
export default Countercard;