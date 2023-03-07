import React from 'react';

import classes from './Tag.module.css';

/* Composant 'Tag' 
contenant les props : - 'texte' : (via 'c_tag__texte') : couleur de la charte & font-size
affichant le 'texte' dans un rectangle (via 'c_tag') : - background au couleur de la charte 
                                                       - de longueur & largeur fixes
                                                       - aux angles arrondis (via 'c_tag')
*/

function Tag(props) {
    return (
        <div className={classes.c_tag}>
            <p className={classes.c_tag__texte}>{props.texte}</p>
        </div>
    );
}

export default Tag;