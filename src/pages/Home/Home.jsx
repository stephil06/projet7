
import React from "react";
import { Link } from "react-router-dom";

// import image from "../../images/banner.png"

import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'

function Home() {
  return (
    <div className="home__banner">
      <p> homePage :</p>
      <Banner />
      <Card />
    </div>
  )
}

export default Home
