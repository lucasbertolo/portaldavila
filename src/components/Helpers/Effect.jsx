import { useEffect } from 'react';

export default function Effect(props) {
  const effect = () => {
    const { formik } = props;
    // CHECA SE FORM NAO TEM ERROS
    if (Object.entries(formik.errors).length === 0 && formik.errors.constructor === Object) {
      formik.submitForm();
    }
  };

  useEffect(
    () => () => effect(),
    [],
  );
  return null;
}
