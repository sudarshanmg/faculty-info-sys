// hooks
import { forwardRef } from 'react';

// styles
import classes from './Input.module.css';

const Input = forwardRef((props, ref) => {
  return (
    <input
      type={props.type}
      className={classes.input}
      placeholder={props.placeholder}
      ref={ref}
    />
  );
});

export default Input;
