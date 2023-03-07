import React from 'react';

import classes from './Host.module.css';

/* Composant 'Host' 
contenant la props : - 'host' (objet JSON) {'name', 'picture'} (cf. 'host' du fichier data/logements.json)
                        où - 'name': prénom nom
                           - 'picture': URL de la photo de Host 
affichant le prénom, le nom en dessous (tous 2 alignés à droite), & la 'picture' à droite (dans un cercle)  
*/
function Host ({ host })  {
  const [prenom, nom] = host.name.split(' '); 

  return (
    <div className={classes.c_host}>
      <div className={classes.c_host__name}>
        <p>{prenom}</p>
        <p>{nom}</p>
      </div>
      <img className={classes.c_host__picture} src={host.picture} alt=""  />
    </div>
  );
};

export default Host;