import React from 'react';
import { useLoaderData } from 'react-router-dom'; // pour utiliser la fonction : data = useLoaderData();

import classes from './DetailLocation.module.css';

import Carrousel from '../../components/Carrousel/Carrousel';
import Tag from '../../components/Tag/Tag';
import Host from '../../components/Host/Host';
import Rating from '../../components/Rating/Rating';
import Collapse from '../../components/Collapse/Collapse';

import Error404 from '../../pages/Error404/Error404';

/* Affiche le logement ayant pour id le id du Logement passé dans l'URL (cf. App.js : <Route path="location/:id")
*/
function DetailLocation() {
 
  // mettre un titre dynamique dans l'onglet du navigateur
  // document.title = "Détail location";

  // récupérer le logement ayant pour id logtId
  const logt = useLoaderData();
  // console.log("logt:" + logt);

  let equipements = undefined;
  if (logt !== undefined) {
    // Pour l'array logt.equipments : met chacun de ses éléments avec des balises <li> dans la constante 'equipements'
    equipements = logt.equipments.map((equipment, i) => {
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
  } else { return <Error404 /> }
}

export default DetailLocation;