// import './App.css';
import '../main/Main.css';

import React from 'react'

const navbar = () => {
  return (
    <div>
      <nav>
        <div className="navbar">
            <ul>
            <div className="logo">explainLife</div>
                
                <li><a href="#">About us</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Get In Touch</a></li>
                <div className="search"><input type="search" name="search" id="" placeholder='Search Here' /></div>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default navbar
