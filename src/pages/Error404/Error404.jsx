import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../components/Navigation/Navigation';

import classes from './Error404.module.css';

function Error404() {
  // mettre un titre dans l'onglet du navigateur
  document.title = "Page d'erreur";

  return (
    <div>
      <Navigation />
      <div className={classes.c_error}>
        <div className={classes.c_error__numero_et_message}>
          <p className={classes.c_error_numero}>404</p>
          <p className={classes.c_error_message}>  Oups! La page que vous demandez n'existe pas.  </p>
        </div>
        <Link className={classes.c_error__link} to="/"> Retourner sur la page d'accueil </Link>
      </div>
    </div>
  );
}

export default Error404;