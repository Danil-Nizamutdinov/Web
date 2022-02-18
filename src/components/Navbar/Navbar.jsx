import nb from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

function Navbar(){
    return(
        <nav className={`${nb.item} ${nb.sidebar}`}>

            <div>
                <NavLink to='/profile' className={nb.nav} className = { navData => navData.isActive ? nb.active : nb.nav }>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className={nb.nav} className = { navData => navData.isActive ? nb.active : nb.nav }>Message</NavLink>
            </div>
            <div>
                <NavLink to='#' className={nb.nav}>News</NavLink>
            </div>
            <div>
                <NavLink to='#' className={nb.nav}>Music</NavLink>
            </div>
            <div>
                <NavLink to='#' className={nb.nav}>Settings</NavLink>
            </div>

        </nav>
    );
}

export default Navbar
