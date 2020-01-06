import React from 'react'
import {NavLink} from 'react-router-dom'
import '../style/NavBar.css'

const NavBar = () => 
    <div className='user-container'>
        <NavLink className="creation-link"
            to='/character-creation'
            exact>Character Creation
        </NavLink>
        <NavLink className="home-link"
            to='/user'
            exact>Home
        </NavLink>
        <NavLink className="characters-link"
            to='/characters'
            exact>View Characters
        </NavLink>
        <NavLink className="initiation-link"
            to='/initiation'
            exact>Initiation Tracker
        </NavLink>
    </div>


export default NavBar