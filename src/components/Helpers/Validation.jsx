import * as Yup from 'yup';

const ValidationInfo = Yup.object().shape({
  area: Yup.number()
    .min(0)
    .required('Valor requerido'),
  building_area: Yup.number()
    .lessThan(Yup.ref('area'), 'Área construída deve ser menor que a área total'),
});

const ValidationDetails = Yup.object().shape({
  // TODO
});

export {
  ValidationInfo,
  ValidationDetails,
};
