import React from 'react';
import { connect } from 'react-redux';
import { Logo, NavBtn } from './styled/styledParts';
import { DISPLAY_FORM } from '../actions/index';
import homeImage from '../assets/img/home.png';
import logoImage from '../assets/img/TaskyLogo.png';
import tasksImage from '../assets/img/hard-drive.png';
import doneImage from '../assets/img/bookmark.png';


const Navigation = ({toggleForm}) => (
  <header className="navbar">
    <Logo image={logoImage} />
    <nav>
      <NavBtn
        activeClass="activeTab"
        label="Home"
        image={homeImage}
        path="/"
        isExact
      />
      <NavBtn
        activeClass="activeTab"
        label="Tasks"
        image={tasksImage}
        path="/tasks"
        isExact={false}
      />
      <NavBtn
        activeClass="activeTab"
        label="Done"
        image={doneImage}
        path="/done"
        isExact={false}
      />
    </nav>
    <button 
      onClick={toggleForm}
      type="button"
    >
      + Create new Task
    </button>
  </header>
);

const mapDispatchToProps = dispatch => ({
  toggleForm: () => {
    dispatch({
      type: DISPLAY_FORM,
    });
  },
});


export default connect(null, mapDispatchToProps)(Navigation);
