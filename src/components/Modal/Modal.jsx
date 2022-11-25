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
