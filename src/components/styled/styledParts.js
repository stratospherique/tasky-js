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
    <img src={image} alt={label} />
    <span>
      {label}
    </span>
    {children}
  </NavLink>
)

const NavBtn = styled(NavTab)`
    border: 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8rem;
    height: 2.8rem;
    text-decoration: none;
    border-radius: .5rem;

    color: #E7E7ED;
    font-weight: 500;
    font-size: 1rem;

    & > img {
        margin-right: .4rem;
        height: 1.1rem;
        opacity: .2;
    }
`;

const Headings = ({children, className}) => (
  <h4 className={className}>
    {children}
  </h4>
);

const Heading = styled(Headings)`
    font-weight: ${props => (props.type === 'primary' ? 'bold;' : props.type === 'secondary' ? '500;' : '300;')}
    font-size: ${props => (props.type === 'primary' ? '2.5rem;' : props.type === 'secondary' ? '1.5rem;' : '1.2rem;')}
    line-height: ${props => (props.type === 'primary' ? '50px;' : props.type === 'secondary' ? '31px;' : '22px;')}
    margin-bottom: ${props => (props.type === 'primary' ? '1rem;' : props.type === 'secondary' ? '2.5rem;' : '1.5rem;')}
    color: ${props => (props.color ? props.color : 'black')};
`;

export { Logo, NavBtn, Heading };
