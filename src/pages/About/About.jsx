import React from 'react';

import image_banner from '../../images/banner_about.jpg';

import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';

import classes from './About.module.css';

// creer un array contenant les qualités ("nom" & "description")
const qualites = [
  {
    nom: 'Fiabilité',
    description: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
  },
  {
    nom: 'Respect',
    description: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },
  {
    nom: 'Service',
    description: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
  },
  {
    nom: 'Sécurité',
    description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  }
];

/* Page 'About' : 
    - affiche <Banner> ({image, texte}) (réutilisé dans la Page 'Home' )
    - affiche les 4 <Collapse ({label, contenu})
      (réutilisé dans la page 'DetailLocation')
    NB: L'affichage de <Navigation> & de <Footer> : via <BaseLayout>    
*/
function About() {

  // mettre un titre dans l'onglet du navigateur
  document.title = "A propos";

  return (
    <div>
      <div className={classes.c_banner_about}>
        <Banner image={image_banner} />
      </div>

      <section className={classes.c_section_about}>

        { /* Pour chaque qualité : ajouter un <Collapse> /> */}
        {qualites.map((qualite, index) => {
          return (
            <Collapse key={index} label={qualite.nom} contenu={qualite.description} />
          );
        }
        )}
      </section>
    </div>
  );
}

export default About
