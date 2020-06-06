import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Logo = styled.div`
    height: 4rem;
    width: 4rem;
    ${props => `background-image: url(${props.image});`}
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

const NavTab = ({children, className, activeClass, label, image, path, isExact}) => (
    <NavLink to={path} exact={isExact} className={className} activeClassName={activeClass}>
        <img src={image} alt="label" />
        <span>
            {label}
        </span>
        {children}
    </NavLink>
)

const NavBtn = styled(NavTab)`
    border: 1px solid;
    display: flex;
    justify-content: space-around;
    width: 5rem;
`;

const Headings = ({children, className}) => (
    <h4 className={className}>
        {children}
    </h4>
)

const Heading = styled(Headings)`
    font-weight: ${props => props.type === 'primary' ? 'bold;' : props.type === 'secondary' ? '500;' : '300;'}
    font-size: ${props => props.type === 'primary' ? '40px;' : props.type === 'secondary' ? '25px;' : '18px;'}
    line-height: ${props => props.type === 'primary' ? '50px;' : props.type === 'secondary' ? '31px;' : '22px;'}
`;

export { Logo, NavBtn, Heading }