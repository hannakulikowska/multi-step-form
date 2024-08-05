import { useEffect, useState } from 'react';
import { useFormContext } from './hooks/useFormContext';

interface CheckboxButtonProps {
  id: string;
  name: string;
  label: string;
}

const CheckboxButton: React.FC<CheckboxButtonProps> = ({ id, name, label }) => {
  const { formData, updateFormData } = useFormContext();
  const [isChecked, setIsChecked] = useState<boolean>(formData[id] || false);

  useEffect(() => {
    updateFormData(id, isChecked);
  }, [isChecked, id, updateFormData]);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="col-md-6 mb-3">
      <input
        id={id}
        name={name}
        type="checkbox"
        className="btn-check"
        required
        autoComplete="off"
        checked={isChecked}
        onChange={handleChange}
      />
      <label
        className="custom-checkbox btn btn-outline-secondary w-100 d-flex align-items-center justify-content-start text-capitalize"
        htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default CheckboxButton;
