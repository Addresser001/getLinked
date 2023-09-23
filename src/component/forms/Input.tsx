import { ChangeEventHandler, FocusEventHandler } from 'react';
import './styles.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { notificationVariant } from '../../utils/helpers';

interface props {
  errorMessage?: string;
  errorVisible?: boolean;
  className?: string;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string | number;
  type?: string;
  label?: string;
}

const CustomInput: React.FC<props> = ({
  name,
  errorMessage,
  errorVisible,
  onBlur,
  onChange,
  placeholder,
  disabled,
  value,
  type,
  label,
  className,
}) => {
  return (
    <div className={`custom_input ${className || ''}`}>
      <label htmlFor='' className='body text_color input_label'>
        {label}
      </label>
      <input
        className={errorVisible && errorMessage ? 'error' : ''}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        onBlur={onBlur}
      />

      <AnimatePresence>
        {errorVisible && errorMessage && (
          <motion.div
            variants={notificationVariant}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='error-message'
          >
            <small>{errorMessage}</small>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomInput;
