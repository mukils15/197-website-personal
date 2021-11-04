import React from "react";
import "../styles/styles.css";
import { useState } from "react";
import { addInfo } from "../actions/addInfo";
import { connect } from "react-redux";

const InfoPopup = (props) => {
    const [imageUrl, changeURL] = useState("");
    const [desc, changeDesc] = useState("");
    

    const onSubmit = (event) => {
        props.handleClose;
        event.preventDefault();
    }

    return(
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                <form onSubmit={onSubmit}>
                    <label>
                        Image URL:
                        <br>
                        </br>
                        <input type="text" name="Image URL" value={imageUrl} onChange={e => changeURL(e.target.value)} />
                    </label>
                    <br>
                    </br>
                    <label>
                        Description:
                        <br>
                        </br>
                        <input type="text" name="description" value={desc} onChange={e => changeDesc(e.target.value)}/>
                    </label>
                    <br>
                    </br>
                    <button type='submit' onClick={() => props.addInfo({imageUrl, desc})}>Submit Info</button>
                </form>
            </div>
        </div> 
    )   
}

export default connect(null, {addInfo})(InfoPopup);