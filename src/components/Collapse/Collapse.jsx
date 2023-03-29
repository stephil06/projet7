import React from 'react';
import { useState } from 'react';

import classes from './Collapse.module.css';

/* Composant 'Collapse'
   - contenant :  - les props : 'label' (le label du bouton) 
                        & 'contenu' (texte visible ou invisible selon la valeur de open)
                  - la variable 'open' 
   - Si open est à true :   - la lettre 'V' est inversée
                            - le contenu est visible (et mis dans une balise <p>)
   - Si clic sur le bouton : la valeur de la constante open est inversée          
*/
function Collapse({ label, contenu }) {
    const [open, setOPen] = useState(false); // initialement open est à false

    // déclenchée Si clic sur le <button> : inverser la valeur de open 
    const basculer = () => {
        setOPen(!open);
    };

    return (
        <div>
            <button className={classes.c_collapse__button} onClick={basculer}>{label}
                { /* Si open : appliquer la classe 'c_collapse__signe_open' (i.e inverser la lettre 'V') */}
                <span className={open ? classes.c_collapse__signe_open : ''}>V</span>
            </button>

            { /* Si open : ajout du <p> */}
            {open && (<p className={classes.c_collapse__contenu}>{contenu}</p>)}

        </div>
    );
}

export default Collapse;
