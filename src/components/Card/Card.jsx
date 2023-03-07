import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Card.module.css';

/* Composant 'Card'
   - contenant les props : - 'id' : id du logement
                           - 'cover' : l'URL de l'image du logement
                           - title : le titre du logement
   -  Affiche la Card du logement ayant pour id: id du logement    
   - Si clic sur la Card : redirection vers la page '/location/id          
*/
function Card(props) {

  return (
      <Link className={classes.c_card__location} to={'/location/' + props.id}>
        <img className={classes.c_card__img} src={props.cover} alt="location" />
        <h2 className={classes.c_card_titre}>{props.title}</h2>
      </Link>
  )

}

export default Card