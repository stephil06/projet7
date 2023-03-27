import React from 'react';

import {Outlet} from 'react-router-dom'; 
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
 
/* Composant 'BaseLayout' : 
    - Toutes les pages du site (SAUF la page 'Error404') a la mise en page suivante : 
*/
function BaseLayout() {

    return (
        <>
            <Navigation />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>

    )
}

export default BaseLayout;