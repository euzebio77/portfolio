import '../styles/components/maincontent.sass';
import AboutContainer from './aboutcontainer';
import TecnologiesContainer from './TecnologiesContainer';

const MainContent = () => {
    return ( 
    <main id="main-content">
        <AboutContainer/>
        <TecnologiesContainer/>
    </main>
    );
};

export default MainContent;
