import React from 'react';
import {connect} from 'react-redux';
import { HIDE_FORM } from '../actions';

const FormContainer = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.toggleInvisible();
    }
    return (
    <div  className="task-form">
        <form name="task-form" onSubmit={handleSubmit}>
            <h2>Add Task</h2>
            <div>
                <label htmlFor="task-name">What Do you want to do</label>
                <input type="text" id="task-name" />
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