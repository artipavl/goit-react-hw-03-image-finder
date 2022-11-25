export const ImageGalleryItem = ({src,alt,click,srcModal}) => {
  return (
    <li className="ImageGalleryItem-image" onClick={()=>click(srcModal,alt)}>
      <img src={src} alt={alt} />
    </li>
  );
};
