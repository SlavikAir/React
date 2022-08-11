import NavInfo from './components/NavInfo';
import NavOffer from './components/NavOffer';
import './navigation.css';


const Navigation = ()=> {
    return(
        <nav className="navigation">
            <NavInfo />
            <NavOffer />    
        </nav>
    )
}

export default Navigation