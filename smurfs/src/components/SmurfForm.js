import React, { useState } from "react";
import { connect } from "react-redux";
import {addSmurf} from '../actions'

const SmurfForm = props => {
    const [smurf, setsmurf] = useState({
        name:"",
        age: "",
        height: ""
    });

    const onChange = e => {
        setsmurf({
            ...smurf,
            [e.target.name]: e.target.value
        })
    }

    return(
        <form onSubmit={e=>{e.preventDefault();
        props.addSmurf(smurf);
    setsmurf("");
}}>
    <label>Enter smurf name</label>
    <input
    name="name"
    value={smurf.name}
    onChange={onChange}
    />
    <label>Enter age</label>
    <input 
    name="age"
    value={smurf.age}
    onChange={onChange}
    />
    <label>Enter height</label>
    <input 
    name="height"
    value={smurf.height}
    onChange={onChange}/>

    <button type="submit">Add Smurf</button>
</form>
    )
}

const mapStateToProps = state => {
    return {
        addSmurf:state.addSmurf
    }
}
export default connect(mapStateToProps, {addSmurf})(SmurfForm)