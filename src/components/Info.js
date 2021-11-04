import React from "react";
import { getInfo } from "../selectors";
import { connect } from "react-redux";
import { useState } from "react";
import InfoEdit from "./InfoEdit";
import InfoPopup from "./InfoPopup";

const Info = ({ info }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [editMode, setEdit] = useState(true);
    const togglePopup = (e) => {
        setIsOpen(!isOpen);
        e.preventDefault();
    }


    if (info.image === '' || info.description === '' || info.image === null || info.description === null){
        return(
            <div>
                <h1>
                    Hi! My name is Mukil Shanmugam!
                </h1>
                <InfoEdit togglePopup = {togglePopup}>  
                </InfoEdit>
                {isOpen && <InfoPopup
                handleClose={togglePopup}
                />}
            </div>
        )  
    } else {
        return(
            <div>
                <h1>
                    Hi! My name is Mukil Shanmugam!
                </h1>
                <img src={info.image} alt="Profile Image" width="100" height="100"/>
                <h1>
                    {info.description}
                </h1>
                <InfoEdit togglePopup = {togglePopup}>  
                </InfoEdit>
                {isOpen && <InfoPopup image = {info.image} desc = {info.description}
                handleClose={togglePopup}
                />}
            </div>
        )  
    }
    
}

const mapStateToProps = state => {
    const info = getInfo(state);
    return { info };
}

export default connect(mapStateToProps)(Info);
