import Menu from './components/Menu';
import NavInfo from './components/NavInfo';
import NavOffer from './components/NavOffer';
import './navigation.css';


const Navigation = () => {
    return (
        <nav className="navigation">
            <NavInfo />
            <Menu />
            <NavOffer />
        </nav>
    )
}

export default Navigation