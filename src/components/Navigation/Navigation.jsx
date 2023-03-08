import React from "react";
import { Link } from 'react-router-dom';

import classes from './Navigation.module.css'
import image_logo from '../../images/logo_kasa_header.png'

/* Composant 'Navigation'
contenant 3 <Link> : - Image du logo de la société (stokée dans le dossier 'images') : dirige sur la page d'accueil
                     - Accueil : dirige sur la page d'accueil
                     - A propos : : dirige sur la page A propos                  
*/
function Navigation() {

  return (
    <nav className={classes.c_nav}>
      <Link to={'/'}>
        <img className={classes.c_nav__logo} src={image_logo} alt="logo de la société Kasa" />
      </Link>
      <div className={classes.c_links} >
        <Link className={classes.c_nav__link} to={'/'} > Accueil </Link>
        <Link className={classes.c_nav__link} to={'/apropos'} > A Propos </Link>
      </div>
    </nav>
  )
}

export default Navigation
