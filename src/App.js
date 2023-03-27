import React from 'react'; // pour créer des sites web d'une seule page (Single Page Application)
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
function loaderListeLogements() {
  // console.log("data:" + data);
  return data;
}

// retourner le logement (objet JSON) ayant pour identifiant id (passé dans l'URL) 
function loaderDetailLogement({ params }) {
  // récupérer le id passé dans l'URL
  const { id } = params;
  // console.log("id:" + id);
  return data.find((logt) => logt.id === id);
}

const router = createBrowserRouter(

  createRoutesFromElements(
    // Le composant <Route> définit une relation entre une URL et un Composant
    // Via les props 'path' & 'element' 
    // => lorsque l'utilisateur visite une URL, le Composant correspondant est affiché.
    // Via la props 'errorElement' : on indique la page lorsqu'aucune route ne correspond.

    // La props 'loader' : définit la fonction de chargement des data
    // Pour récupérer les data dans Home & DetailLocation : 
    // 1) import { useLoaderData } from 'react-router-dom'; // 2) data = useLoaderData();

    <Route path='/'
      element={<BaseLayout />} errorElement={<Error404 />}
    >
      <Route
        index element={<Home />} loader={loaderListeLogements}
      />
      <Route path='location/:id'
        element={<DetailLocation />} loader={loaderDetailLogement}
      />
      <Route path='apropos'
        element={<About />}
      />
    </Route>

  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;