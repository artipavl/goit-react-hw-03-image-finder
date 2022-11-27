import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ src, alt, click, srcModal }) => {
  return (
    <li className="ImageGalleryItem" onClick={() => click(srcModal, alt)}>
      <img className="ImageGalleryItem-image" src={src} alt={alt} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  srcModal: PropTypes.string.isRequired,
};
