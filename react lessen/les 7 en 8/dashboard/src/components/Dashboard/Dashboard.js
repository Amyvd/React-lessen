import LeftPanel from '../LeftPanel/LeftPanel';
import RightPanel from '../RightPanel/RightPanel';
import "./Dashboard.css";
const Dashboard = () =>{
    return(
        <article className="dashboard">
            <LeftPanel/>
            <RightPanel/>
        </article>
    );
}

export default Dashboard;