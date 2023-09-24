import {
  ChangeEventHandler,
  Children,
  FocusEventHandler,
  ReactEventHandler,
  ReactNode,
} from 'react';
import './styles.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { notificationVariant } from '../../utils/helpers';

interface props {
  errorMessage?: string;
  errorVisible?: boolean;
  className?: string;
  onBlur?: FocusEventHandler<HTMLSelectElement> | undefined;
  onChange?: ReactEventHandler<HTMLSelectElement> | undefined;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  id?: string;
  children: ReactNode;
  value: string;
}

const CustomSelect: React.FC<props> = ({
  children,
  name,
  errorMessage,
  errorVisible,
  onBlur,
  onChange,
  placeholder,
  disabled,
  label,
  id,
  className,
  value,
}) => {
  return (
    <div className={`custom_input ${className || ''}`}>
      <label htmlFor='' className='body text_color input_label'>
        {label}
      </label>

      <select
        className={errorVisible && errorMessage ? 'error' : ''}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        onBlur={onBlur}
        value={value || undefined}
      >
        {children}
      </select>

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

export default CustomSelect;
