import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Logo, NavBtn } from './styled/styledParts';
import { DISPLAY_FORM } from '../actions/index';
import homeImage from '../assets/img/home.png';
import logoImage from '../assets/img/TaskyLogo.png';
import tasksImage from '../assets/img/hard-drive.png';
import doneImage from '../assets/img/bookmark.png';


const Navigation = (props) => {
    return <header>
        <Logo image={logoImage} />
        <nav>
            {/*<NavLink to="/" exact activeClassName="activeTab">Home</NavLink>*/}
            <NavBtn activeClass="activeTab" 
                label="Home"
                image={homeImage}
                path="/"
                isExact={true}
            />
            <NavBtn activeClass="activeTab" 
                label="Tasks"
                image={tasksImage}
                path="/tasks"
                isExact={false}
            />
            <NavBtn activeClass="activeTab" 
                label="Done"
                image={doneImage}
                path="/done"
                isExact={false}
            />
        </nav>
        <button onClick={props.toggleForm}
         style={{border: '1px solid', cursor: 'pointer'}}>
             {`+  Create new Task`}
        </button>
    </header>
}

const mapDispatchToProps = (dispatch) => ({
    toggleForm: () => {
        dispatch({
            type: DISPLAY_FORM
        })
    }
})

const mapStateToProps = (state) => ({
    visible: state.formVisible
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
