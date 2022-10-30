import "./ToDo.css";
const  ToDo = (props) =>{

    const tasks = [
        {
            name: "Groceries",
            done: false,
        },
        {
            name: "Stydying",
            done: true,
        },
        {
            name: "Walk The Dog",
            done: false,
        },
        {
            name: "Text myself",
            done: false,
        },
        {
            name: "code awessome stuff",
            done: false,
        },
        {
            name: "henk",
            done: false,
        },
        
    ];

    let todoClick = () => {
        console.log("ik ben geklickt jeey!");
    }

    let listItems = tasks.map( task => {
        if(task.done === true){
            return <li  onClick={todoClick} className="todo__item todo__item--done">{task.name}</li>;
        }
        return <li onClick={todoClick} className="todo__item">{task.name}</li>;
    });
    console.log(listItems);
    return(
        <article className="todo">
            <header className="todo__header">
                <h1 className="todo__heading">Things to do:</h1>
            </header>
            <ul className="todo__list">
                {listItems}
            </ul>
        </article>
    )
}

export default ToDo;