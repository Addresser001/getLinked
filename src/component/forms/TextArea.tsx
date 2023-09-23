import { ChangeEventHandler, FocusEventHandler } from 'react';
import './styles.scss';
import { motion, AnimatePresence } from 'framer-motion';

interface props {
  errorMessage?: string;
  errorVisible?: boolean;
  className?: string;
  onBlur?: FocusEventHandler<HTMLTextAreaElement> | undefined;
  onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string | number;
  label?: string;
  cols?: number;
  rows?: number;
}

const TextArea: React.FC<props> = ({
  name,
  errorMessage,
  errorVisible,
  onBlur,
  onChange,
  placeholder,
  disabled,
  value,
  label,
  cols,
  rows,
  className,
}) => {
  return (
    <div className={`custom_input ${className || ''}`}>
      <label htmlFor='' className='body text_color'>
        {label}
      </label>
      <textarea
        className={errorVisible && errorMessage ? 'error' : ''}
        cols={cols}
        rows={rows}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
      ></textarea>
      <AnimatePresence>
        {errorVisible && errorMessage && (
          <motion.div
            initial={{
              bottom: '-40px',
              opacity: 0,
            }}
            animate={{
              bottom: '-20px',
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              bottom: '-40px',
              opacity: 0,
              transition: {
                duration: 0.15,
                ease: 'easeInOut',
                transitionEnd: {
                  display: 'none',
                },
              },
            }}
            className='error-message'
          >
            <small>{errorMessage}</small>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TextArea;
