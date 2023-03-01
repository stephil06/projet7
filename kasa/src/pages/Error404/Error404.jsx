import React from "react";
import { Link } from "react-router-dom";

import './Error404.css'

function Error404() {
  return (
    <div className="c_div__erreur">
      <h1> 404 </h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <p>Retourner sur la page d'accueil</p>
    </div>
  )
}

export default Error404
