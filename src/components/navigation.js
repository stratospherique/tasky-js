import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <header>
        <span>Logo</span>
        <nav>
            <NavLink to="/" exact activeClassName="activeTab">Home</NavLink>
            <NavLink to="/tasks" activeClassName="activeTab">Tasks</NavLink>
            <NavLink to="/done" activeClassName="activeTab">Done</NavLink>
        </nav>
    </header>
)

export default Navigation;
