import React from 'react';
import { useState } from 'react';

import classes from './Carrousel.module.css';

import flecheGauche from '../../images/pc_fleche_gauche.svg';
import flecheDroite from '../../images/pc_fleche_droite.svg';
import pictoNonCourant from '../../images/pictoNonCourant.png'; // cf. https://www.flaticon.com/fr/chercher/5?word=cercle&shape=outline
import pictoCourant from '../../images/pictoCourant.png';

/* Composant 'Carrousel' 
- contenant les props : 'pictures' : array d'image(s) correspondant à 'pictures' (pour un idlogement) du fichier data/logements.json
- affichant le(s) image(s) de 'pictures'

- Si nbImages (nombre d'images de 'pictures') > 1 : ajouter
    - les flèches gauche & droite
    - le compteur (n° image courante / nbImages)
    - les nbImages bullet points (tous en blanc, sauf le bullet point de l'image courante mis en couleur orange)

- Règles de défilement des images :
    - si clic sur "flèche gauche" &  l'image courante est la 1ère : on affiche la dernière image 
    - si clic sur "flèche droite" & l'image courante est la dernière : on affiche la 1ère image
    - Si clic sur le i ème bullet point : on affiche la i ème image (& Le bullet point actif prend la couleur orange).
*/
function Carrousel({ pictures }) {

    const [imageCourante, setImageCourante] = useState(0);
    const nbImages = pictures.length;

    // MAJ la position de l'image courante Si clic sur la flèche gauche
    function precedant() {
        setImageCourante(imageCourante === 0 ? nbImages - 1 : imageCourante - 1);
    }

    // MAJ la position de l'image courante Si clic sur la flèche droite
    function suivant() {
        setImageCourante(imageCourante === nbImages - 1 ? 0 : imageCourante + 1);
    }

    // MAJ la position de l'image courante Si clic sur le ième picto bullet point  
    function activer(evt) {
        const str = evt.target.alt;
        // récupérer la position du picto sur lequel on a cliqué
        const p = Number(str.replace(/[^\d]/g, ''));
        setImageCourante(p);
    }

    // créer un array (contenant 0, 1, 2...nbImages-1) représentant les bullets points
    const pictos = new Array(nbImages);
    for (let i = 0; i < nbImages; i++) {
        pictos[i] = i;
    }

    return (
        <div className={classes.c_carrousel}>
            {pictures.map((picture, index) => {
                return (
                    <div
                        key={index}
                        className={index === imageCourante ? classes.c_carrousel___image_courante : ''}>
                        {/* on affiche l'image courante */ }
                        {index === imageCourante && (
                            <img src={picture} alt="" className={classes.c_carrousel__img} />
                        )}
                    </div>
                );
            })}

            {/* Si > 1 images : ajouter les flèches gauche & droite & le compteur & les BULLETS */}
            {nbImages > 1 ? (
                <div>
                    <div className={classes.c_carrousel__precedant} >
                        <img src={flecheGauche} alt="flèche gauche" onClick={precedant} />
                    </div>
                    <div className={classes.c_carrousel__suivant} onClick={suivant}>
                        <img src={flecheDroite} alt="flèche droite" />
                    </div>

                    <div className={classes.c_carrousel__compteur}>
                        <span> {imageCourante + 1}/ {nbImages} </span>
                        { /* BULLET debut */}
                        <div className={classes.c_pictos_bullet}>
                            {pictos.map((picto) =>
                                imageCourante === picto ? (
                                    <img
                                        key={picto.toString()}
                                        src={pictoCourant}
                                        alt={"picto courant " + picto}
                                    />
                                ) : (
                                    <img
                                        key={picto.toString()}
                                        src={pictoNonCourant}
                                        alt={"picto non courant " + picto}
                                        onClick={activer}
                                    />
                                )
                            )}
                        </div>
                        { /* BULLET fin */}
                    </div>
                </div>
            ) : ''}
        </div>
    );
}

export default Carrousel;