
import "./RightPanel.css";
const RightPanel = ({headerText, buttonSymbol, buttonText, productCards, onButtonClicked }) =>{

     let addProduct = () =>{
        onButtonClicked();
    }

    let productCardsToBeRendered = productCards.map(product => {
        if(product.name === "Placeholder"){
            return (
                <li className="productsList__item">
                        <button onClick={addProduct} className="productsList__Button">{buttonSymbol || "*"}</button>
                        <p className="productList__paragraaf">{buttonText || "Lorem Ipsum Text "}</p>
                    </li>
            );
        }
        return (
            <li className="productsList__item">
                    <img className="productList__image"src={product.img} alt={product.name} />
                    <p className="productsList__imagetext">{product.name}</p>
            </li>
        );
    });
    return(
       <section className="productsWrapper">
            <header className="rightpanel__header">
                <h1 className="header__h1">{headerText || "Placeholder"}</h1>
            </header>
            <ul className="porducts__list">
                {productCardsToBeRendered}
            </ul>
       </section>
    );
}

export default RightPanel;