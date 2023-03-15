import React from 'react';
import { useLoaderData } from 'react-router-dom'; // pour utiliser la fonction : data = useLoaderData();

import classes from './Home.module.css';

import image_banner from '../../images/banner.png';

import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';

/* Affiche tous les logements du fichier /data/logements.json
*/
function Home() {

  // mettre un titre dynamique dans l'onglet du navigateur
  // document.title = `HomePage`;

  // récupérer le tableau des logements
  const logements = useLoaderData();

  return (
    <div className={classes.c_main}>
      <Banner image={image_banner} texte={"Chez vous, partout et ailleurs"} />

      <section className={classes.c_section_location}>
        { /* Pour chaque location : ajouter le composant <Card> */}
        {logements.map((location) => {
          return (
            <Card key={location.id} id={location.id} cover={location.cover} title={location.title}></Card>
          );
        }
        )}
      </section>
    </div>
  );
}

export default Home;
