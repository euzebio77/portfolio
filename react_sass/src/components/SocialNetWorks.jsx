import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';


import "../styles/components/socialnetworks.sass";

const socialNetwork = [
    {name: "linkedin", icon: <FaLinkedinIn/>},
    //{name: "github", icon: <FaGithub/>},
   // {name: "instagram", icon: <FaInstagram/>},
];


const SocialNetWork = () => {
    return ( <section id="social-networks">
        {socialNetwork.map((network) => (
            <a href="https://www.linkedin.com/in/euzebio77/" className="social-btn" id={network.name} key={network.name}>
                {network.icon}                 
            </a> 
       
        ))}
    </section>
    );
};



export default SocialNetWork;
