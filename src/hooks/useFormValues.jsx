import { useCallback, useMemo, useState } from "react";

const useFormValues = (initialValues, { validate, formatters } = {}) => {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});

  const errors = useMemo(
    () => (validate ? validate(values) : {}),
    [validate, values],
  );

  const handleChange = useCallback(
    ({ target }) => {
      const rawValue =
        target.type === "checkbox" ? target.checked : target.value;
      const format = formatters?.[target.name];
      const value = format ? format(rawValue) : rawValue;
      setValues((current) => ({ ...current, [target.name]: value }));
    },
    [formatters],
  );

  const handleBlur = useCallback(({ target }) => {
    setTouched((current) => ({ ...current, [target.name]: true }));
  }, []);

  const patchValues = useCallback((patch) => {
    setValues((current) => ({ ...current, ...patch }));
    setTouched({});
  }, []);

  const validateAll = () => {
    setTouched(
      Object.fromEntries(Object.keys(values).map((field) => [field, true])),
    );
    return Object.keys(errors);
  };

  const getFieldProps = (name) => ({
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    error: touched[name] ? errors[name] : undefined,
  });

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    patchValues,
    validateAll,
    getFieldProps,
  };
};

export default useFormValues;
