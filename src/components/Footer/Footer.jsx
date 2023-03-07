import classes from './Footer.module.css'

import image_logo from '../../images/logo_kasa_footer.png'

/* Composant 'Footer'
   - contenant :  - une image <img> (logo de la société)
                  - un paragraphe <p> 
*/
function Footer() {

	return (
		<footer className={classes.c_footer}>
			<img src= {image_logo} alt="logo de la société Kasa" />
			<p>© 2020 Kasa. All rights reserved</p>
		</footer>
	)

}

export default Footer