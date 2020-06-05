import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { DISPLAY_FORM } from '../actions/index';

const Navigation = (props) => {
    return <header>
        <span>Logo</span>
        <nav>
            <NavLink to="/" exact activeClassName="activeTab">Home</NavLink>
            <NavLink to="/tasks" activeClassName="activeTab">Tasks</NavLink>
            <NavLink to="/done" activeClassName="activeTab">Done</NavLink>
        </nav>
        <span onClick={props.toggleForm}
         style={{border: '1px solid', cursor: 'pointer'}}>
             Create new Task
        </span>
    </header>
}

const mapDispatchToProps = (dispatch) => ({
    toggleForm: () => {
        console.log('hiiii')
        dispatch({
            type: DISPLAY_FORM
        })
    }
})

const mapStateToProps = (state) => ({
    visible: state.formVisible
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
