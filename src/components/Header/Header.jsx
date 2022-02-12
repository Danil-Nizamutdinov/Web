import hd from './Header.module.css';

function Header(){
    return(
        <header className={`${hd.item} ${hd.header}`}>
            <img src="https://kartinkin.net/uploads/posts/2021-07/1625601731_3-kartinkin-com-p-gerb-anime-anime-krasivo-3.png"/>
        </header>
    );
}

export default Header;