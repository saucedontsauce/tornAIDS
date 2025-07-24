import Apikeyinput from './Apikeyinput.jsx';
import { useContext, useState } from 'react';
import { Link } from 'react-router';
import stateContext from '../context/stateContext.jsx';
import pages from '../util/pages.jsx';

export default function Navbar() {
    const { key, my_data } = useContext(stateContext);
    const [navLinksActive, setNavLinksActive] = useState('')

    return (
        <nav id="nav" className="navbar">
            <div className="navbar-container">

                <Link to="/home" className="logo">
                    <img src={my_data?.profile_image || "https://placehold.co/40x40"} alt="PFP" className="logo-img" id="logo-icon" />
                    <span className="logo-text" id="nav-title">{my_data?.name || "TornAIDS"}</span>
                </Link>

                {!key && <Apikeyinput />}


                <ul id="navlink-holder" className={`nav-links ${navLinksActive}`}>
                    {Object.keys(pages).map((page) => {
                        return <li key={page}>
                            <Link to={"/" + pages[page].link} onClick={() => {
                                setNavLinksActive('');
                            }}>{pages[page].name}</Link>
                        </li>
                    })}
                </ul>
                <button className="mobile-menu-btn" onClick={() => {
                    navLinksActive == '' ? setNavLinksActive('active') : setNavLinksActive('');
                }}>☰</button>
            </div>
        </nav>

    )
}