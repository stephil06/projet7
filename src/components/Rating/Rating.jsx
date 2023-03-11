import React from 'react';

import pictoNegatif from '../../images/picto_evaluation_negative.jpg';
import pictoPositif from '../../images/picto_evaluation_positive.jpg';

import classes from './Rating.module.css';

/* Composant 'Rating' 
contenant les props : - 'nbPositif' : nombre de picto d'évaluations positives
                      - 'nbTotal' : nombre total de picto 
affichant les nbPositif (sur nbTotal) picto d'évaluations positives, suivi des pictos d'évaluation négatives
*/
function Rating({nbPositif, nbTotal}) {

    // créer un array contenant 0, 1, 2...nbTotal-1
    var pictos = new Array(nbTotal);
    for (var i = 0; i < nbTotal; i++) {
        pictos[i] = i;
    }

    return (
        <div className={classes.c_rating}>

            {pictos.map((picto) =>
                nbPositif >= picto + 1 ? (
                    <img
                        key={picto.toString()}
                        className={classes.c_rating__img}
                        src={pictoPositif}
                        alt="picto d'évaluation positive"
                    />
                ) : (
                    <img
                        key={picto.toString()}
                        className={classes.c_rating__img}
                        src={pictoNegatif}
                        alt="picto d'évaluation négative"
                    />
                )
            )}
        </div>
    );
};

export default Rating;