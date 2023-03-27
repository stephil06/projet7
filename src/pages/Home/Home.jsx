import React from 'react';
import { useLoaderData } from 'react-router-dom'; // pour utiliser la fonction : data = useLoaderData();

import classes from './Home.module.css';

import image_banner from '../../images/banner.png';

import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';

/* Page 'Home' : 
    - affiche <Banner> ({image, texte}) (réutilisé dans la Page 'About' )
    - récupère tous les logements du fichier logements.json dans un array, via useLoaderData()
    cf. App.js : <Route index element={<Home />} loader={LoaderListeLogements}
  
    - affiche chaque logement dans des <Card> ({ id, cover, title })
        - Si clic sur 1 Card : redirection vers la page '/location/id'
NB: L'affichage de <Navigation> & de <Footer> : via <BaseLayout>    
*/
function Home() {

  // mettre un titre dans l'onglet du navigateur
  document.title = "Page d'accueil Kasa";

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
