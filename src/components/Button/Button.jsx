import './Button.css';
import PropTypes from 'prop-types';

const Button = ({
  disabled = false,
  label,
  onClick
}) => {
  const onClickHandler = () => {
    if (!disabled) {
      onClick()
    }
  }
  return (
    <div data-testid="button" onClick={onClickHandler} className={`button ${disabled ? 'disabled' : ''}`}>
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
