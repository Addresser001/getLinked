import { ChangeEventHandler, FocusEventHandler } from 'react';
import './styles.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { notificationVariant } from '../../utils/helpers';

interface props {
  errorMessage?: string;
  errorVisible?: boolean;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  name?: string;
  disabled?: boolean;
  label?: string;
}

const CustomCheckBox: React.FC<props> = ({
  name,
  errorMessage,
  errorVisible,
  onChange,
  label,
  className,
}) => {
  return (
    <div
      className={`custom_input ${className || ''}`}
      style={{ padding: '16px 0px 22px 0px' }}
    >
      <div className='checkbox' style={{ display: 'flex' }}>
        <input
          style={{
            width: '14px',
            height: '14px',
            flexShrink: 0,
            borderRadius: '2px',
            border: '1px solid #fff',
          }}
          className={errorVisible && errorMessage ? 'error' : ''}
          name={name}
          type='checkbox'
          onChange={onChange}
        />
        <label htmlFor='' className='body text_color input_label'>
          {label}
        </label>
      </div>

      <AnimatePresence>
        {errorVisible && errorMessage && (
          <motion.div
            variants={notificationVariant}
            initial='hidden'
            animate='visible'
            exit='exit'
            style={{ color: 'red' }}
          >
            <small>{errorMessage}</small>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomCheckBox;
