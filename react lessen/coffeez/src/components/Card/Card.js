import "./Card.css"
const Card = (props) =>{
   let cardImage = <img src={"/image/" + props.image || "/image/coffee-met-bord.jpg"} alt="coffee met een bord" />
    if(props.image === undefined){
        cardImage = <img src="/image/coffee-met-bord.jpg" alt="coffee met een bord"/>;
    }
   return(
        <article class="card">
            <figure class="card__figure">
                {cardImage}
            </figure>
            <section class="card__section">
                <p>{props.text || "Default text Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil obcaecati nemo est mollitia a facere corporis ut error voluptatibus similique minima natus cumque illum, ipsum eligendi assumenda id totam consectetur?"}</p>
            </section>
        </article>
    );
}

export default Card;