import image_banner from '../../images/banner.png'

function Banner() {

	return (
		<div className='c_banner'>
			<img src={image_banner} alt="Banner du site Kasa" />
			<p>Chez vous, partout et ailleurs</p>
		</div>
	)
}

export default Banner