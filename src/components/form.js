import React, { useState } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { HIDE_FORM } from '../actions';

const FormContainer = (props) => {

    const [formState, setFormState] = useState({
        candidate_email: 'ahmed.mahfoudh1991@gmail.com',
        label: null,
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(formState))
        axios({
            method: 'post',
            url: '/task',
        headers:{
            "Content-Type": "application/json",
        },
        data: JSON.stringify(formState)
        })
        .then((response) => {
            console.log(response.data);
            props.toggleInvisible();
        })
        .catch((err) => {
            console.dir(err)
        })
    }

    const handleLabelChange = (e) => {
        setFormState({
            ...formState,
            label: e.target.value
        })
        
    }

    return (
    <div  className="task-form">
        <form name="task-form" onSubmit={handleSubmit}>
            <h2>Add Task</h2>
            <div>
                <label htmlFor="task-name">What Do you want to do</label>
                <input type="text" id="task-name" onChange={handleLabelChange} />
            </div>
            <button type="submit">I'll do it</button>
        </form>
    </div>
)}

const mapStateToProps = (state) => ({
    visible: state.formVisible
})

const mapDispatchToProps = (dispatch) => ({
    toggleInvisible: () => {
        dispatch({
            type: HIDE_FORM
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);