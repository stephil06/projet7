
import React from "react";
import { Link } from 'react-router-dom';

import classes from './Navigation.module.css'
import image_logo from '../../images/logo_kasa_header.png'


function Navigation() {

	return (
    <nav className={classes.c_nav}>
				<img src={image_logo} alt="logo de la société Kasa"/>
        <p>Accueil</p>
        <p>A propos</p>
	</nav>
  )
}

export default Navigation
