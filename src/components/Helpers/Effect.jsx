import { useEffect } from 'react';

export default function Effect(props) {
  const effect = () => {
    props.formik.submitForm();
  };

  useEffect(
    () => () => effect(),
    [],
  );
  return null;
}
