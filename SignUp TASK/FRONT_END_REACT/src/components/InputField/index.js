const InputField = ({ fieldId, label, name, value, setValue }) => {
  return (
    <div className="mb-3 row">
      <label htmlFor={fieldId} className="col sm-2 col-form-labelinput">
        {label}
      </label>
      <div className="col-sm-10">
        <input
          type="text"
          id={fieldId}
          name={name}
          className="form-control-plainetext"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default InputField;
