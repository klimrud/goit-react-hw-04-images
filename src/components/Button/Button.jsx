import { PropTypes } from 'prop-types';
import css from './Button.module.css';

export const Button = ({ onClickLoader }) => {
  return (
    <button type="button" className={css.button} onClick={onClickLoader}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClickLoader: PropTypes.func,
};
