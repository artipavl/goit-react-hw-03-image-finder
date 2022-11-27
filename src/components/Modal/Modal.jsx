import { Component } from 'react';
import PropTypes from 'prop-types';

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

  keyDown = e => {
    if (e.code === 'Escape') {
      this.props.close();
    }
  }

  render() {
    const { src, alt, close } = this.props;
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
  }
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
