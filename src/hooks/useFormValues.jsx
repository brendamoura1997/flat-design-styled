import { useCallback, useState } from "react";

const useFormValues = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = useCallback(({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value;
    setValues((current) => ({ ...current, [target.name]: value }));
  }, []);

  const getFieldProps = (name) => ({
    name,
    value: values[name],
    onChange: handleChange,
  });

  return { values, handleChange, getFieldProps };
};

export default useFormValues;
