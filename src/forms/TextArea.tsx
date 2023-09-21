import { ChangeEventHandler, FocusEventHandler } from "react";
import "./styles.scss";
import { motion, AnimatePresence } from "framer-motion";
import { notificationVariant } from "../utils/helpers";

interface props {
  errorMessage?: string;
  errorVisible?: boolean;
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
}) => {
  return (
    <div className="custom_input">
      <label htmlFor="" className="body text_color">{label}</label>
      <textarea
        className={errorVisible && errorMessage ? "error" : ""}
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
        {(errorVisible && errorMessage) &&
          <motion.div
            variants={notificationVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="error-message">
            <small>{errorMessage}</small>
          </motion.div>
        }
      </AnimatePresence>

    </div>
  );
};

export default TextArea;
