function Card() {
  
    const jsonData= require('../../data/logements.json'); 
    console.log(jsonData);

    const id = jsonData[0].id; // c67ab8a7
    const titre= jsonData[0].title; // Appartement cosy
    const urlImage = jsonData[0].cover; 

    // const titre= "Appartement cosy";
    // const urlImage = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg";

    return (
		<article className='c_article'>
			<p>CARD</p>
            <img className='c_article__img' src={urlImage} alt="location" />
            <h2 className='c_article__titre'>{titre}</h2>
		</article>
	)

  }
  
  export default Card