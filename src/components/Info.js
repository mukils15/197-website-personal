import React from "react";
import { getInfo } from "../selectors";
import { connect } from "react-redux";


const Info = ({ info }) => {
    console.log(info);
    if (info.image === '' || info.description === '' || info.image === null || info.description === null){
        return(
            <h1>
                Hi! My name is Mukil Shanmugam!
            </h1>
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
            </div>
        )  
    }
    
}

const mapStateToProps = state => {
    const info = getInfo(state);
    return { info };
}

export default connect(mapStateToProps)(Info);
