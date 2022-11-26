export const ImageGalleryItem = ({src,alt,click,srcModal}) => {
  return (
    <li className="ImageGalleryItem" onClick={()=>click(srcModal,alt)}>
      <img className="ImageGalleryItem-image" src={src} alt={alt} />
    </li>
  );
};
