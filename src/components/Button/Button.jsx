import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
    return (
        <button type="button" className="Button" onClick={onClick}>
          <span>Load more</span>
        </button>
    )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}