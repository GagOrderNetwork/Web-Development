import "./styles.scss";
import React from "react";
import { Field, ErrorMessage } from "formik";
import TextField from "@material-ui/core/TextField";

function FormikField(props) {
  const { label, name, required, type = "text" } = props;
  return (
    <div className="gn-formik_field">
      <Field
        required={required}
        as={TextField}
        fullWidth
        label={label}
        name={name}
        helperText={<ErrorMessage name={name} />}
        type={type}
      />
    </div>
  );
}

export { FormikField };
