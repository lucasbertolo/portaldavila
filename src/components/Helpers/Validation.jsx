import * as Yup from 'yup';

const ValidationInfo = Yup.object().shape({
  area: Yup.number()
    .min(0)
    .required('Valor requerido'),
  building_area: Yup.number()
    .lessThan(Yup.ref('area'), 'Área construída deve ser menor que a área total'),
});

const ValidationDetails = Yup.object().shape({
  room: Yup.number()
    .min(0, 'Too Short!')
    .max(5, 'Too Long!'),
  dormitory: Yup.number()
    .min(0, 'Too Short!')
    .max(10, 'Too Long!'),
  dining_room: Yup.number()
    .min(0, 'Too Short!')
    .max(5, 'Too Long!'),
  garage: Yup.number()
    .min(0, 'Too Short!')
    .max(10, 'Too Long!'),
  bathroom: Yup.number()
    .min(0, 'Too Short!')
    .max(10, 'Too Long!'),
  visiting_room: Yup.number()
    .min(0, 'Too Short!')
    .max(5, 'Too Long!'),
  suite: Yup.number()
    .min(0, 'Too Short!')
    .max(10, 'Too Long!'),
  laundry: Yup.number()
    .min(0, 'Too Short!')
    .max(5, 'Too Long!'),
  washbasin: Yup.number()
    .min(0, 'Too Short!')
    .max(5, 'Too Long!'),
  kitchen: Yup.number()
    .min(0, 'Too Short!')
    .max(5, 'Too Long!'),
  office: Yup.number()
    .min(0, 'Too Short!')
    .max(5, 'Too Long!'),
  gourmet_space: Yup.number()
    .min(0, 'Too Short!')
    .max(5, 'Too Long!'),
});


export {
  ValidationInfo,
  ValidationDetails,
};
