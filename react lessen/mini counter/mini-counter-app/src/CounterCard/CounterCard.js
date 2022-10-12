import "./CounterCard.css"
const CounterCard = () =>{
    return(
        <article class="counter">
            <section class="counter__number">0</section>
            <section class="counter__buttons">
                <button className="counter__button">Decrease</button>
                <button className="counter__button">Increase</button>
            </section>
        </article>
    );
};

export default CounterCard;