import React from "react";
import Button from "react-bootstrap/Button"
import { connect } from "react-redux";
import { editInfoPost } from "../actions/EditInfo";

const InfoEdit = (props) => {
    return(
        <div>
            <form onSubmit={props.togglePopup}>
                <Button type='submit'>Edit Info</Button>
            </form>
        </div>
        
    )   
}

export default InfoEdit;