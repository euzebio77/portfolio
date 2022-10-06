import SocialNetwork from "./SocialNetworks";

import Avatar from "../img/profile.jpg";

import "../styles/components/sidebar.sass";

import InformationContainer from "./informationContainer";

const Sidebar = () => {
    return ( 
        <aside id="sidebar">
            <img src={Avatar} alt="Vinicius Euzebio"/>
            <p className="title">Software Developer </p>
            <SocialNetwork/>
            <InformationContainer/>
            <a href="" className="btn">Download Curriculo</a>
        </aside>
    );
};

export default Sidebar;