import React from 'react';
import {Outlet} from 'react-router-dom'; 
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
 

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