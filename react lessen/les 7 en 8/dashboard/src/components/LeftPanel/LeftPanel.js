import "./LeftPanel.css";
const LeftPanel = (props) =>{
    return(
       <div>
            <section className="dashboard__wrapper">
                <nav className="dashboard__nav">
                        <ul className="dashboard__ul">
                            <li className="dashboard__li"><a href="" className="dashboard__link">Home</a></li>
                            <li className="dashboard__li"><a href="" className="dashboard__link">Facturen</a></li>
                            <li className="dashboard__li"><a href="" className="dashboard__link">Bestellingen</a></li>
                            <li className="dashboard__li"><a href="" className="dashboard__link">Retour</a></li>
                            <li className="dashboard__li"><a href="" className="dashboard__link">Contact</a></li>
                        </ul>
                </nav>
                <button className="dashoard__button">Go Premium now biatch</button>
            </section>
       </div>
    );
}

export default LeftPanel;