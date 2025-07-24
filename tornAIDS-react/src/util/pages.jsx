import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Travel from '../pages/Travel.jsx';
import Vault from '../pages/Vault.jsx';
import Settings from '../pages/Settings.jsx';
const pages = {
    "home": {
        "name": "Home",
        "link": "",
        "Component": Home
    },
    "about": {
        "name": "About",
        "link": "about",
        "Component": About

    },
    "travel": {
        "name": "Travel",
        "link": "travel",
        "Component": Travel

    },
    "vault": {
        "name": "Vault",
        "link": "vault",
        "Component": Vault
    },
    "settings": {
        "name": "Settings",
        "link": "settings",
        "Component": Settings
    }
}

export default pages