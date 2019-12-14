import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
    <header style={headerStyle}>
        <h1>
            To Do List
        </h1>
        <Link style = {linkStyle} to ="/"> Home Page </Link> | <Link style = {linkStyle} to = "/about"> About </Link>
    </header>
    )
}
const linkStyle = {
    color: '#fff',
    textAlign: 'center',
    

}
const headerStyle = {
    background: '#add8e6',
    color: '#ffb6c1',
    textAlign: 'center',
    padding: '20px',
    border: 'solid pink'
}
export default Header;
