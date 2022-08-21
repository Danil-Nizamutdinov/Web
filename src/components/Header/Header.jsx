import hd from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header(props){

    let icone = 'https://kartinkin.net/uploads/posts/2021-07/1625601731_3-kartinkin-com-p-gerb-anime-anime-krasivo-3.png' 

    return(
        <header className={`${hd.item} ${hd.header}`}>
            <img src={icone}/>
            {props.isAuth ? <div className={hd.navlink}>{props.login}</div> : <NavLink to={'/auth'} className={hd.navlink}>Login</NavLink>}
        </header>
    );
}

export default Header;

//<NavLink to={'/auth'} className={hd.navlink}>Login</NavLink>