import React from "react";

const FormRow = ({ type, name, labelText, defaultValue, onChange }) => {
  return (
    <div>
      <div className="form-row">
        <label htmlFor={name} className="form-label">
          {labelText || name}
        </label>
        <input
          defaultValue={defaultValue || ""}
          type={type}
          required
          id={name}
          name={name}
          className="form-input"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default FormRow;
