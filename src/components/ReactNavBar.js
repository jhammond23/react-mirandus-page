/*import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import React from "react";
  
export default function Navbar() {

  return <nav className="nav">
    <Link to="/" className="navTitle">Mirandus Hub</Link>
    <ul>
      <CustomLink to='/exemplars' className='nav-links'>Exemplars</CustomLink>
      <CustomLink to='/deeds' className='nav-links'>Deeds</CustomLink>
      <CustomLink to='/buildings' className='nav-links'>Buildings</CustomLink>
    </ul>
  </nav>
}

function CustomLink ({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} { ...props }>{children}</Link>
    </li>
  )
}

*/