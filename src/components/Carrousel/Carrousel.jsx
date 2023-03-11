import React from 'react';
import { useState } from 'react';

import classes from './Carrousel.module.css';

import flecheGauche from '../../images/pc_fleche_gauche.svg';
import flecheDroite from '../../images/pc_fleche_droite.svg';

/* Composant 'Carrousel' 
- contenant les props : - 'pictures' : array d'image(s) correspondant à "pictures" (pour un idlogement) du fichier data/logements.json
- affichant le(s) image(s) de 'pictures'

- Si nbImages (nombre d'images de 'pictures') >=2 : 
        ajouter     les flèches gauche & droite 
                    & le compteur
                        (n° image courante / nbImages  pour la version Desktop)
                        (n° image courante dans un cercle pour la version Mobile).
- Règles de défilement des images :
    - Si l'image courante est la 1ère image & si l'utilisateur clique sur "flèche gauche" : on affiche la dernière image 
    - Si l'image courante est la dernière & si l'utilisateur clique sur "flèche droite" : on affiche la 1ère image. 
*/
function Carrousel({ pictures }) {

    const [imageCourante, setImageCourante] = useState(0);
    const nbImages = pictures.length;

    function suivant() {
        setImageCourante(imageCourante === nbImages - 1 ? 0 : imageCourante + 1);
    }

    function precedant() {
        setImageCourante(imageCourante === 0 ? nbImages - 1 : imageCourante - 1);
    }

    return (
        <div className={classes.c_carrousel}>
            {pictures.map((picture, index) => {
                return (
                    <div
                        key={index}
                        className={index === imageCourante ? classes.c_carrousel___image_courante : ''}>

                        {index === imageCourante && (
                            <img src={picture} alt="" className={classes.c_carrousel__img} />
                        )}
                    </div>
                );
            })}

            {/* Si >=2 images : ajouter les flèches gauche & droite & le compteur */}
            {nbImages > 1 ? (
                <div>
                    <div className={classes.c_carrousel__precedant} onClick={precedant}>
                        <img src={flecheGauche} alt="flèche gauche" />
                    </div>
                    <div className={classes.c_carrousel__suivant} onClick={suivant}>
                        <img src={flecheDroite} alt="flèche droite" />
                    </div>
                    <div className={classes.c_carrousel__compteur_pc}> {imageCourante + 1}/ {nbImages} </div>
                    <div className={classes.c_carrousel__compteur_mobile}> {imageCourante + 1} </div>
                </div>
            ) : ''}
        </div>
    );
}

export default Carrousel;