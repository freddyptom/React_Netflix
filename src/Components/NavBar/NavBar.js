import React from 'react'
import netflix from './../../Images/Netflix_logo.png'
import avatar from './../../Images/avatar.png'
import './NavBar.css'
function NavBar(){
    return(
        <div className="navbar">
            <img className="logo" src={netflix} alt="Netflix/logo"/>
            <h1 className="homeLogo"> Home</h1>
            <h1 classname="tvShow">TV Shows</h1>
            <h1 className="move">Movies</h1>
            <h1 className="newPop">New and Popular</h1>
            <h1 classname="myList">My List</h1>
            <img className="avatar" src={avatar} alt="avatar"/>   
        </div>
    )
}

export default  NavBar
