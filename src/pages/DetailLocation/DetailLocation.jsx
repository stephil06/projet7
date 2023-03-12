import React from 'react';
import { useParams } from 'react-router-dom';
import logts from '../../data/logements.json';

import classes from './DetailLocation.module.css';

import Carrousel from '../../components/Carrousel/Carrousel';
import Tag from '../../components/Tag/Tag';
import Host from '../../components/Host/Host';
import Rating from '../../components/Rating/Rating';
import Collapse from '../../components/Collapse/Collapse';

function DetailLocation() {

  // récupérer le paramètre de l'URL (i.e l'id de la location)
  const { id } = useParams();

  // mettre un titre dynamique dans l'onglet du navigateur
  // document.title = `Détail location ${id}`;

  // récupérer le tableau des logements
  // const logts = require('../../data/logements.json');
  // console.log(logts);

  // récupérer le logement ayant pour id logtId
  const logt = logts.find((logt) => logt.id === id); // console.log(logt);

  // Pour l'array logt.equipments : met chacun de ses éléments avec des balises <li> dans la constante 'equipements'
  const equipements = logt.equipments.map((equipment, i) => {
    return <li key={i} className={classes.c_equipements}> {equipment} </li>
  });
 
  return (

    <article className={classes.c_logement__article}>
      <Carrousel pictures={logt.pictures} />

      <div className={classes.c_logement__sans_image}>

        <div className={classes.c_logement__title_et_location_et_tags}>
          <h1 className={classes.c_logement__title}>{logt.title}</h1>
          <p className={classes.c_logement__location}>{logt.location}</p>

          <div className={classes.c_logement__tags}>
            {logt.tags.map((tag, index) => (
              <Tag key={index} texte={tag} />
            ))}
          </div>

        </div>
        <div className={classes.c_logement__host_et_rating}>
          <Host host={logt.host} />
          <Rating nbPositif={logt.rating} nbTotal={5} />
        </div>
      </div>

      <div className={classes.c_logement__collapses}>
        <Collapse label="Description" contenu={logt.description} />
        <Collapse label="Equipements" contenu={equipements} />
      </div>

    </article>
  )

}

export default DetailLocation;