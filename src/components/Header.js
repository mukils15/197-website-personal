import React from "react";
import Button from "react-bootstrap/Button"
import Info from "./Info";
import InfoEdit from "./InfoEdit";
import { useState } from "react";
import InfoPopup from "./InfoPopup";
import "../styles/styles.css";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div>
            <div className="Header">
                <Info>
                </Info>
            </div>   
        </div>
        
    )   
}

export default Header;