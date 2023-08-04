import './Button.css';
import PropTypes from 'prop-types';

const Button = ({
  disabled = false,
  label,
  onClick
}) => {
  return (
    <div onClick={onClick} className={`button ${disabled ? 'disabled' : ''}`}>
      {label}
    </div>
  )
}

Button.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
