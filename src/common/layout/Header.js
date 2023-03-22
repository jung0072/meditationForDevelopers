import { NavLink } from 'react-router-dom';
import './Header.css'

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/community'>Community</NavLink>
        <NavLink to='/about'>About</NavLink>
      </nav>
    </header>
  )
}