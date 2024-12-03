import React from "react";

const FormRow = ({ type, name, labelText, placeholder }) => {
  return (
    <div>
      <div className="form-row">
        <label htmlFor={name} className="form-label">
          {labelText || name}
        </label>
        <input
          placeholder={placeholder || ""}
          type={type}
          required
          id={name}
          name={name}
          className="form-input"
        />
      </div>
    </div>
  );
};

export default FormRow;
