import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"


export const ImageGallery = ({images, click}) => {
    return (
        <ul className="ImageGallery">
            {images.map(({id,webformatURL,tegs,largeImageURL}) => <ImageGalleryItem key={id} click={click} srcModal={largeImageURL} src={webformatURL} alt={tegs} />)}
        </ul>
    )
}