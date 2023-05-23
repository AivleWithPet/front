import {Nav, NavA} from '../../styles/nav_css.js';

export default function NavBar() {
  return (
    <Nav>
      <div className='logo'>
        <img src='https://cfm.kt.com/images/v2/layout/gnb-ktlogo.png' alt='로고' />
      </div>
      <NavA>
        <a href=''>Sign In </a>
        <a href=''>Sign Up</a>
      </NavA>
    </Nav>
  )
}
