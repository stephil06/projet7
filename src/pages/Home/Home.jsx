import React from 'react';

import classes from './Home.module.css';

import image_banner from '../../images/banner.png';

import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';

/* Affiche tous les logements du fichier /data/logements.json
*/
function Home() {

  // récupérer le tableau des locations
  const locations = require('../../data/logements.json');
  // console.log(locations);

  return (
    <div className={classes.c_main}>
      <Banner image={image_banner} texte={"Chez vous, partout et ailleurs"} />

      <section className={classes.c_section_location}>
        { /* Pour chaque location : ajouter le composant <Card> */}
        {locations.map((location) => {
          return (
            <Card key={location.id} title={location.title} cover={location.cover} id={location.id}></Card>
          );
        }
        )}
      </section>
    </div>
  );
}

export default Home
