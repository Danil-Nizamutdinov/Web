import nb from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

function Navbar(){
    return(
        <nav className={`${nb.item} ${nb.sidebar}`}>

            <div>
                <NavLink to='/profile/:userId' className = { navData => navData.isActive ? nb.active : nb.nav }>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className = { navData => navData.isActive ? nb.active : nb.nav }>Message</NavLink>
            </div>
            <div>
                <NavLink to='/users' className = { navData => navData.isActive ? nb.active : nb.nav }>Users</NavLink>
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
