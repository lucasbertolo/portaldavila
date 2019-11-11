import * as Yup from 'yup';

const ValidationInfo = Yup.object().shape({
  price: Yup.number()
    .required('Preço deve ser preenchido'),
  area: Yup.number()
    .min(0, 'Área deve ser maior que 0')
    .required('Valor requerido'),
  purpose_id: Yup.number()
    .required('É necessário escolher uma opção'),
  building_area: Yup.number()
    .max(Yup.ref('area'), 'Área construída deve ser menor que a área total'),
});

const ValidationDetails = Yup.object().shape({
  room: Yup.number()
    .min(0, 'Ops, o valor não pode ser negativo!')
    .max(10, 'O numero maximo de salas é 10!')
    .integer('O valor deve ser um numero inteiro'),
  dormitory: Yup.number()
    .integer('O valor deve ser um numero inteiro')
    .min(0, 'Ops, o valor não pode ser negativo!')
    .max(10, 'O numero maximo de quartos é 10!'),
  dining_room: Yup.number()
    .integer('O valor deve ser um numero inteiro')
    .min(0, 'Ops, o valor não pode ser negativo!')
    .max(5, 'O numero maximo de sala de jantares é 5!'),
  garage: Yup.number()
    .integer('O valor deve ser um numero inteiro')
    .min(0, 'Ops, o valor não pode ser negativo!')
    .max(10, 'O numero máximo de vagas de garagem é 10!'),
  bathroom: Yup.number()
    .integer('O valor deve ser um numero inteiro')
    .min(0, 'Ops, o valor não pode ser negativo!')
    .max(10, 'O numero maximo de banheiros é 10!'),
  visiting_room: Yup.number()
    .integer('O valor deve ser um numero inteiro')
    .min(0, 'Ops, o valor não pode ser negativo!')
    .max(5, 'O numero maximo de salas de visita é 5!'),
  suite: Yup.number()
    .integer('O valor deve ser um numero inteiro')
    .min(0, 'Ops, o valor não pode ser negativo!')
    .max(10, 'O numero máximo de suites é 10!'),
  laundry: Yup.number()
    .integer('O valor deve ser um numero inteiro')
    .min(0, 'Ops, o valor não pode ser negativo!')
    .max(5, 'O numero maximo de lavanderias é 5!'),
  washbasin: Yup.number()
    .integer('O valor deve ser um numero inteiro')
    .min(0, 'Ops, o valor não pode ser negativo!')
    .max(5, 'O numero maximo de lavabos é 5!'),
  kitchen: Yup.number()
    .integer('O valor deve ser um numero inteiro')
    .min(0, 'Ops, o valor não pode ser negativo!')
    .max(5, 'Too Long!'),
  office: Yup.number()
    .integer('O valor deve ser um numero inteiro')
    .min(0, 'Ops, o valor não pode ser negativo!')
    .max(5, 'O numero maximo de cozinhas é 5!'),
  gourmet_space: Yup.number()
    .integer('O valor deve ser um numero inteiro')
    .min(0, 'Ops, o valor não pode ser negativo!')
    .max(5, 'O numero maximo de areas gourmet é 5'),
});

const ValidationFeatures = Yup.object().shape({
  description: Yup.string()
    .max(200, 'Máximo de 200 caracteres'),
});

const ValidationLogin = Yup.object().shape({
  loginEmail: Yup.string().email('Campo deve ser um email'),
  registerEmail: Yup.string().email('Campo deve ser um email'),
  registerPassword: Yup.string()
    .min(8, 'Senha é muito curta, deve ter mais de 8 digitos'),
});

const ValidationFilter = (state) => {
  const {
    priceMax, priceMin, code, area, garage, dormitory,
  } = state;

  const validItems = [];

  if (priceMax > priceMin && priceMax > 300) {
    validItems.push({
      label: 'Preço', name: 'price', min: Number(priceMin), max: Number(priceMax),
    });
  }

  if (code > 0 && Number(code)) {
    validItems.push({ label: 'Código', name: 'code', value: Number(code) });
  }

  if (area > 10 && area < 10000 && Number(area)) {
    validItems.push({ label: 'Área', name: 'area', value: Number(area) });
  }

  if (dormitory < 10 && dormitory > 0 && Number(dormitory)) {
    validItems.push({
      label: 'Nº Dormitórios', name: 'dormitory', value: Number(dormitory),
    });
  }

  if (garage < 10 && garage > 0 && Number(garage)) {
    validItems.push({ label: 'Nº Vagas', name: 'garage', value: Number(garage) });
  }

  return validItems;
};


export {
  ValidationInfo,
  ValidationDetails,
  ValidationFeatures,
  ValidationLogin,
  ValidationFilter,
};
