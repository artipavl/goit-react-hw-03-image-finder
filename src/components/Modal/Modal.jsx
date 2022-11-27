import PropTypes from 'prop-types';

export const Modal = ({ src, alt, close }) => {
  return (
    <div
      className="Overlay"
      onClick={e => e.target === e.currentTarget && close()}
    >
      <div className="Modal">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
