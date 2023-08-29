import './Header.scss';

function Header() {
    return (
        <header>
            <h1>WeHelp<span>You</span></h1>
            <nav className="allbutton">
                <ul>
                    <li><a href="Somos">Somos</a></li>
                    <li><a href="Equipos">Equipo</a></li>
                    <li><button><a href="Contactos">Contactemos</a></button></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
