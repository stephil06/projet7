import React from "react";
import { Link } from 'react-router-dom';
import { useState } from 'react';

import classes from './Navigation.module.css'
import image_logo from '../../images/logo_kasa_header.png'

/* Composant 'Navigation'
contenant 3 <Link> : - Image du logo de la société (stokée dans le dossier 'images') : dirige sur la page d'accueil
                     - Accueil : dirige sur la page d'accueil
                     - A propos : : dirige sur la page A propos                  
*/
function Navigation() {
  // identifier l'url de la page courante
  const url = window.location.href;
  
  let pageCourante = 'autre';
  if( url === 'http://localhost:3000' || url === 'http://localhost:3000/' ) 
    pageCourante = 'home';
  else if( url.endsWith('/apropos') ) 
    pageCourante = 'about';
  else 
    pageCourante = 'autre'; 
  // alert("page:" + pageCourante + '-' + window.location.href);

  // affecter 'lienActif' à la page courante ; & nommer 'setActif' la fonction affectant 'lienActif'
  // 'lienActif' peux prendre la valeur 'about' ou 'home'
  const [lienActif, setActif] = useState(pageCourante);

  return (
    <nav className={classes.c_nav}>
      <Link to={'/'}>
        <img className={classes.c_nav__logo} src={image_logo} alt="logo de la société Kasa" />
      </Link>
      <div className={classes.c_links} >
        <Link className={lienActif === 'home' ? classes.c_nav__link_actif : classes.c_nav__link_inactif}
          to="/" onClick={() => setActif('home')}>Accueil
        </Link>
        <Link className={lienActif === 'about' ? classes.c_nav__link_actif : classes.c_nav__link_inactif}
          to="/apropos" onClick={() => setActif('about')}>A propos
        </Link>
      </div>
    </nav>
  )
}

export default Navigation
