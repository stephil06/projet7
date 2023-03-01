// import './footer.css'

import classes from './Footer.module.css'

import image_logo from '../../images/logo_kasa_footer.png'

function Footer() {

	return (
		<footer className={classes.c_footer}>
			<img src= {image_logo} alt="logo de la société Kasa" />
			<p>© 2020 Kasa. All rights reserved</p>
		</footer>
	)

}

export default Footer