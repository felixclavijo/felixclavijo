import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { navigation_data } from "../../Data/Navigation_data";

import "./Navigation.scss";

// prettier-ignore
function Navigation() {

    const { theme, setTheme } = useContext(ThemeContext)

    const [pathname, setPathname] = useState('/')

    // useEffect(() => {
    //     console.log('The Pathname Changed: ', window.location.pathname)
    // }, [window.location.pathname])

    return (
        <nav className="navbar navbar-expand-lg background-theme">
            <div className="container-fluid">
                <h3 className="navbar-brand text-theme">Navbar</h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            navigation_data?.map((navigation, i) =>
                                <li className="nav-item" key={i}>
                                    <Link to={navigation.path} className={`nav-link text-theme ${pathname === navigation.path ? 'active' : ''}`} onClick={() => setPathname(navigation.path)}>
                                        {navigation.title}
                                    </Link>
                                </li>
                            )
                        }
                        <li>
                            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                                {
                                    theme === ''
                                }
                                <FontAwesomeIcon icon="sun"/>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
