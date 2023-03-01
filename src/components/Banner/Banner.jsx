import image_banner from '../../images/banner.png'

import classes from './Banner.module.css'

function Banner() {

	return (
		<div className={classes.c_banner}>
			<img src={image_banner} alt="Banner du site Kasa" />
			<p>Chez vous, partout et ailleurs</p>
		</div>
	)
}

export default Banner