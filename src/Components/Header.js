import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={styleHeader}>
      <h1>React Application</h1>
      <Link to='/' style={linkStyle}>Search Movies</Link> | <Link to='/todo' style={linkStyle}>Todo App</Link> | <Link to='/about' style={linkStyle}>About</Link>
    </header>
  )
}

const styleHeader = {
  background: 'rgb(47, 50, 97)',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}
export default Header;