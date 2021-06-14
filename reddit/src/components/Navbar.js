import React from 'react'
// import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import '../styles/navbar.css'
import avatar from '../assets/avatar.png'
import Homepage from '../pages/Homepage'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-items">
                <img className="avatar" src={avatar} />
                <p>Home</p>
                <p>Search</p>
                <p>Popular</p>
                <p>All</p>
                <p>Reddit Live</p>
                <p>Chat</p>
                <p>Notifications</p>
                <p>Create Post</p>
                <p>Buy Coins</p>
                <p>Profile</p>
                <p>Dropdown</p>
            </div>
        </div>
    )
}
