import { useState } from "react";

const useForm = ({ initialValues, validate, onSubmit }) => {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});

  const errors = validate(values);

  const handleChange = ({ target }) =>
    setValues((current) => ({ ...current, [target.name]: target.value }));

  const handleBlur = ({ target }) =>
    setTouched((current) => ({ ...current, [target.name]: true }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const invalidFields = Object.keys(errors);

    if (invalidFields.length > 0) {
      setTouched(
        Object.fromEntries(Object.keys(values).map((field) => [field, true])),
      );
      event.currentTarget.elements.namedItem(invalidFields[0])?.focus();
      return;
    }

    onSubmit(values);
    setValues(initialValues);
    setTouched({});
  };

  const getFieldProps = (name) => ({
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    error: touched[name] ? errors[name] : undefined,
  });

  return { handleSubmit, getFieldProps };
};

export default useForm;
