import React from 'react'; // pour programmer des sites web d'une seule page (Single Page Application)
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } 
    from 'react-router-dom'; // precondition : npm install --save react-router-dom

import './App.css';

// import du composant
import BaseLayout from './components/BaseLayout/BaseLayout';

// import des 4 pages
import Home from './pages/Home/Home';
import DetailLocation from './pages/DetailLocation/DetailLocation';
import About from './pages/About/About';
import Error404 from './pages/Error404/Error404';

import data from './data/logements.json'; // data : array d'objets JSON logements


// retourner à partir du fichier logements.json un array de logements 
function LoaderListeLogements() {
  // console.log("data:" + data);
  return data;
}

// retourner le logement (objet JSON) ayant pour identifiant id (passé dans l'URL) 
function LoaderDetailLogement({ params }) {
  // récupérer le id passé dans l'URL
  const { id } = params;
  // console.log("id:" + id);

  // rechercher le logement ayant pour identifiant le id passé dans l'URL
  const logt = data.find((logt) => logt.id === id);
  return logt;
}


const router = createBrowserRouter(
  // loader : définir les fonctions de chargement des data
  // Pour récupérer les data dans Home & DetailLocation : 
  // 1) import { useLoaderData } from 'react-router-dom';
  // 2) data = useLoaderData();

  createRoutesFromElements(
    // Le composant <Route> définit une relation entre une URL et un Component. 
    // Cela signifie que lorsque l'utilisateur visite une URL sur le navigateur, 
    // un Component correspondant doit être rendu sur l'interface.

    <Route path="/" 
    suppressNoMatchWarning={true}
       element={<BaseLayout />} errorElement={<Error404 />} 
       render={document.title = "Erreur 404"}  >
      <Route 
        index element={<Home />} loader={LoaderListeLogements} 
        render={document.title = "Home"} />
      <Route path="location/:id"
      element={<DetailLocation />} loader={LoaderDetailLogement} 
      render={ document.title = "Détail location" } />
      <Route path="apropos" 
      element={<About />} 
      render= {document.title = "A propos"} />
    </Route>

  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;