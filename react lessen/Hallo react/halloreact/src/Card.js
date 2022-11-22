import "./Card.css";
const Card = (props) => {
    return(
        <article>
            <header>
                <h2>{props.title || "Placeholder Title"} </h2>
            </header>
            <section>
                {props.text || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi pariatur error explicabo quas nulla, quam totam voluptates, itaque laborum consequatur, unde omnis. Earum at eveniet officiis doloribus, fugit nihil perferendis!"}

            </section>
        </article>
    );
}
export default Card;