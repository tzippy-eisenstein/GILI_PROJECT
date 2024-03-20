import { useSelector } from 'react-redux'
// import './style.css'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useRef } from 'react'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import { Home as HomeIcon, Phone as PhoneIcon, Apartment as ApartmentIcon } from '@mui/icons-material';
import { AccountMenu } from '../personalOptions/options';

export const Nav = () => {
    debugger
    return <>
<div className="main-nav">
  <NavLink to='Home' className={'link icon-link'}><CottageOutlinedIcon style={{ fontSize: 30, color: '#AF8C53', display: 'inline-block' }}></CottageOutlinedIcon></NavLink>
  <NavLink to='Contact' className={'link icon-link'}><ContactMailOutlinedIcon style={{ fontSize: 30, color: '#AF8C53' }} /></NavLink>
  <NavLink to='Apartments' className={'link icon-link'}><ApartmentIcon style={{ fontSize: 30, color: '#AF8C53' }} /></NavLink>
  <AccountMenu></AccountMenu>
  
  {/* {name.firstName != 'Annonymous' && name.email != Manager.email && <NavLink  to='personalArea' className={'link'} >{name.firstName}</NavLink>} */}

  <div className="authentication-links">
    <NavLink to='Register' className={'link authentication-link'}>register</NavLink>
    <NavLink to='Login' className={'link authentication-link'}>Login</NavLink>
  </div>
</div>



        {/*         <div className={'nav'}>
            <NavLink to='Home' className={'link'}>Home</NavLink>
            <NavLink to='Recipes' className={'link'}>Recipes</NavLink>
            <NavLink to='SignIn' className={'link'}>SignIn</NavLink>
            <NavLink id='right' to='LogIn' className={'link'}>Log In</NavLink>
            {name.firstName != 'Annonymous' && name.email != Manager.email && <NavLink  to='personalArea' className={'link'} >{name.firstName}</NavLink>}
            {name.email == Manager.email && <NavLink to='Manager' className={'link'}>Manager</NavLink>}
        </div> */}
    </>

    
}

