import "./LeftPanel.css";
const LeftPanel = ({NavigationListItem, buttonText}) =>{
    let toBeRenderedNavigationListItems = NavigationListItem.map(object => {
        
        let message = null;
        if(object.message > 0){
            message = <div className="dashboard__message">{object.message}</div>
        }

        return(
        <li key={object.name}className="dashboard__li">
            <a href="" className="dashboard__link">{object.name}{message}</a>
            
        </li>
        );
    })
    return(
       <div>
            <section className="dashboard__wrapper">
                <nav className="dashboard__nav">
                        <ul className="dashboard__ul">
                            {toBeRenderedNavigationListItems}
                        </ul>
                </nav>
                <button className="dashoard__button">{buttonText || "Click Here"}</button>
            </section>
       </div>
    );
}

export default LeftPanel;