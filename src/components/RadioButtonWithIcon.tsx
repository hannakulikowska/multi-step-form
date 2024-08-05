import { useFormContext } from './hooks/useFormContext';

interface RadioButtonWithIconProps {
  id: string;
  name: string;
  imgSrc: string;
  label: string;
}

function RadioButtonWithIcon({ id, name, imgSrc, label }: RadioButtonWithIconProps) {
  const { formData, updateFormData } = useFormContext();
  const isChecked = formData[name] === id;

  const handleChange = () => {
    updateFormData(name, id);
  };

  return (
    <div className="col-md-6 mb-3">
      <input
        id={id}
        name={name}
        type="radio"
        className="btn-check"
        required
        autoComplete="off"
        checked={isChecked}
        onChange={handleChange}
      />
      <label
        className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-start text-capitalize"
        htmlFor={id}>
        <div
          className="rounded-circle p-2 bg-primary me-4"
          style={{ minWidth: '2.25rem', minHeight: '2.25rem' }}>
          <img src={imgSrc} alt={label} />
        </div>
        {label}
      </label>
    </div>
  );
}

export default RadioButtonWithIcon;
