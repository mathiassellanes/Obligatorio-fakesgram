import { FC } from "react";
import './styles.scss';

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name: string;
}

const Input: FC<InputProps> = ({
  label,
  error,
  value = '',
  placeholder = '',
  type = 'text',
  onChange,
  className,
  name,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <div className={`field ${value ? 'has-content' : ''}`}>
      <label className="floating-label">{label}</label>
      <div className="control">
        <input
          className={`input ${className}`}
          value={value}
          onChange={handleChange}
          name={name}
          type={type}
          placeholder={placeholder}
        />
        <div className="error">
          {error && <p className="help">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Input;
