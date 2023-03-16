import React from 'react';
import { NavLink } from 'react-router-dom'; // cf. TUTO https://ultimatecourses.com/blog/active-navlink-classes-with-react-router

import classes from './Navigation.module.css'
import image_logo from '../../images/logo_kasa_header.png'

/* Composant 'Navigation' :
Retourne une balise sémantique <nav>
contenant 3 <NavLink> : - Image du logo de la société (stokée dans le dossier 'images') : dirige sur la page d'accueil
                        - Accueil : dirige sur la page d'accueil 
                        - A propos : dirige sur la page A propos
NB : Usage de <NavLink> (à la place de <Link>) car <NavLink> gère le "active" via {isActive}
   => Si clic sur le lien 'Accueil' : celui-ci est souligné
      Si clic sur le lien 'A propos' : celui-ci est souligné.
NB : En version mobile : les liens sont en majuscules.      
*/
function Navigation() {

  return (

    <nav className={classes.c_nav}>
      <NavLink to={'/'}>
        <img className={classes.c_nav__logo} src={image_logo} alt="logo de la société Kasa" />
      </NavLink>
      <div className={classes.c_links} >
        <NavLink
          to={'/'}
          className={({ isActive }) => isActive ? classes.c_nav__link_actif : classes.c_nav__link_inactif}
        > Accueil
        </NavLink>
        <NavLink
          to={'/apropos'}
          className={({ isActive }) => isActive ? classes.c_nav__link_actif : classes.c_nav__link_inactif}
        > A propos
        </NavLink>
      </div>
    </nav>

  );

}

export default Navigation;
