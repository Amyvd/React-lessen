import "./ToDo.css";
const  ToDo = () =>{
    return(
        <article className="todo">
            <header class="todo__header">
                <h1 class="todo__heading">Things to do:</h1>
            </header>
            <ul className="todo__list">
                <li className="todo__item">Groceries</li>
                <li className="todo__item">Stydying</li>
                <li className="todo__item">Walk The Dog</li>
                <li className="todo__item">Text myself</li>
                <li className="todo__item">code awessome stuff</li>
            </ul>
        </article>
    )
}

export default ToDo;