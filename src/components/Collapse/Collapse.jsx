import React from 'react';
import { useState } from 'react';

import classes from './Collapse.module.css';

/* Composant 'Collapse'
   - contenant :  - les props : 'label' (le label du bouton) & 'contenu' (texte visible ou invisble selon la valeur de open)
                  - la constante 'open' 
   - Si open est à true :   - la lettre 'V' est inversée
                            - le contenu est visible 
                                    - Si contenu est un array : chaque élément est mis dans un <ul>
                                    - Sinon contenu est mis dans <p> 
   - Si clic sur le bouton : la valeur de la constante open est inversée          
*/
function Collapse({label, contenu}) {
    const [open, setOPen] = useState(false);

    // déclenchée Si clic sur le <button> : inverser la valeur de open 
    const basculer = () => {
        setOPen(!open);
    };

    return (
        <div>
            <button className={classes.c_collapse__button} onClick={basculer}>{label}
                { /* Si open : appliquer la classe 'c_collapse__signe_open' (i.e inverser la lettre 'V') */}
                <p className={open ? classes.c_collapse__signe_open : ''}>V</p>
            </button>

            { /* Si open : 
                    - Si contenu est un array : ajout des <ul>
                    - Sinon ajout du <p> */}
            {open && (
                (Array.isArray(contenu)) ?
                (
                    <ul className={classes.c_collapse__contenu}>
                        {contenu.map((elt, index) => (
                            <li key={index} className={classes.c_collapse__li}>{elt}</li>
                        ))}
                    </ul>
                ) :
                    <p className={classes.c_collapse__contenu}>{contenu}</p>
                  
            )}

        </div>
    );
}

export default Collapse;
