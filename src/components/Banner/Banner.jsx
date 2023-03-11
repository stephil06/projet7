import classes from './Banner.module.css'

/* Composant 'Banner'
   - contenant les props : - 'image' : le fichier image associée à la Banner
                           - 'texte' : le texte mentionné dans l'image
						   		- (Si texte = '' Alors : pas de texte affiché)    
*/
function Banner({image, texte}) {

	return (
		<div className={classes.c_banner}>
			<img src={image} alt="Banner du site Kasa" />
			<p> {texte} </p>
		</div>
	)
}

export default Banner