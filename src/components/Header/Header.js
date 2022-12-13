import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion"
import { NavLink } from "react-router-dom";

import "./styles.css"

import logo from '../../assets/images/Paybek_logo.svg';

import menuIcon from '../../assets/icons/menu.svg';
import closeIcon from '../../assets/icons/close.svg';
import { openModal } from "../../redux/actions/paybekActions";

const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
}

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const currentIcon = isOpen ? closeIcon : menuIcon;
    const [isEnglish, setIsEnglish] = useState(true)

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    const toggleLanguage = () => {
        setIsEnglish(!isEnglish)
    }

    let menuOutsideRef = useRef();

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "inherit",
            color: isActive ? "#1652F0" : "#031250",
        }
    }

    const renderNavigationItems = () => (<nav className="navbar">
        <a><NavLink onClick={closeMenu} style={navLinkStyles} to="/" >Top Up</NavLink></a>
        {/* <a><NavLink onClick={closeMenu} style={navLinkStyles} to="/remittance" >Remittance</NavLink></a> */}
    </nav>)

    const languageButtons = () => (
        <div className="header-languagewrapper">
            <button style={{ color: isEnglish ? "#031250" : "#b0b8c1" }} className="header-languagebutton" onClick={() => { closeMenu(); toggleLanguage() }}>
                ENG
            </button>
            <p> | </p>
            <button style={{ color: isEnglish ? "#b0b8c1" : "#031250" }} className="header-languagebutton" onClick={() => { closeMenu(); toggleLanguage() }}>
                RUS
            </button>
        </div>
    )

    useEffect(() => {
        let toggleCloser = (e) => {
            if (!menuOutsideRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", toggleCloser)

        return () => {
            document.removeEventListener("mousedown", toggleCloser)
        }
    })

    return <div className="header-outer" ref={menuOutsideRef}>
        <div className="header-inner">
            <NavLink to="/"><img src={logo} alt="Paybek logo" /></NavLink>
            <div className="menuiconwrapper">
                {/* <a href="https://onelink.to/bf54g2"><button className="header-button__rounded menu-icon">Get the app</button></a> */}
                <img className="menu-icon" src={currentIcon} alt="Menu" onClick={toggleNavbar} />
            </div>
            <div className="header-items__right">
                {renderNavigationItems()}
                {/* <button onClick={openModal} className="header-button__rounded">Get the app</button> */}
                {/* {languageButtons()} */}
            </div>
        </div>
        <motion.div className="expandable-menu"
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.5 }}>
            {renderNavigationItems()}
            {/* {languageButtons()} */}
        </motion.div>
    </div>
}

export default Header;