import * as Yup from 'yup';
import Model from '../../util/filters';

const ValidationInfo = Yup.object().shape({
  price: Yup.number()
    .min(1, 'Valor do imóvel deve ser maior que 0')
    .required('Preço deve ser preenchido'),
  area: Yup.number()
    .min(0, 'Área deve ser maior que 0')
    .required('Valor requerido'),
  type_id: Yup.number()
    .min(1, 'É necessário escolher uma opção')
    .required('Valor requerido'),
  neighborhood_id: Yup.number()
    .min(1, 'É necessário escolher uma opção')
    .required('Valor requerido'),
  purpose_id: Yup.number().required('É necessário escolher uma opção'),
  building_area: Yup.number().max(
    Yup.ref('area'),
    'Área construída deve ser menor que a área total',
  ),
});

const ValidationDetails = Yup.object().shape({
  living_room: Yup.number()
    .min(0, 'Ops, o valor não pode ser negativo!')
    .max(10, 'O número máximo de salas de estar é 10!')
    .integer('O valor deve ser um número inteiro'),
  dormitory: Yup.number()
    .integer('O valor deve ser um número inteiro')
    .min(0, 'Ops, o valor não pode ser negativo!')
    .max(10, 'O número máximo de quartos é 10!'),
  dining_room: Yup.number()
    .integer('O valor deve ser um número inteiro')
    .min(0, 'Ops, o valor não pode ser negativo!')
    .max(5, 'O número máximo de salas de jantar é 5!'),
  garage: Yup.number()
    .integer('O valor deve ser um número inteiro')
    .min(0, 'Ops, o valor não pode ser negativo!')
    .max(10, 'O número máximo de vagas de garagem é 10!'),
  bathroom: Yup.number()
    .integer('O valor deve ser um número inteiro')
    .min(0, 'Ops, o valor não pode ser negativo!')
    .max(10, 'O número máximo de banheiros é 10!'),
  suite: Yup.number()
    .integer('O valor deve ser um número inteiro')
    .min(0, 'Ops, o valor não pode ser negativo!')
    .max(10, 'O número máximo de suites é 10!'),
  laundry: Yup.number()
    .integer('O valor deve ser um número inteiro')
    .min(0, 'Ops, o valor não pode ser negativo!')
    .max(5, 'O número máximo de lavanderias é 5!'),
  washbasin: Yup.number()
    .integer('O valor deve ser um número inteiro')
    .min(0, 'Ops, o valor não pode ser negativo!')
    .max(5, 'O número máximo de lavabos é 5!'),
  kitchen: Yup.number()
    .integer('O valor deve ser um número inteiro')
    .min(0, 'Ops, o valor não pode ser negativo!')
    .max(5, 'O número máximo de cozinhas é 5!'),
  office: Yup.number()
    .integer('O valor deve ser um número inteiro')
    .min(0, 'Ops, o valor não pode ser negativo!')
    .max(5, 'O número máximo de escritórios é 5!'),
  gourmet_space: Yup.number()
    .integer('O valor deve ser um número inteiro')
    .min(0, 'Ops, o valor não pode ser negativo!')
    .max(5, 'O número máximo de areas gourmet é 5'),
});

const ValidationFeatures = Yup.object().shape({
  description: Yup.string().max(200, 'Máximo de 200 caracteres'),
});

const ValidationLogin = Yup.object().shape({
  loginEmail: Yup.string().email('Campo deve ser um email'),
  registerEmail: Yup.string().email('Campo deve ser um email'),
  registerPassword: Yup.string().min(
    8,
    'Senha é muito curta, deve ter mais de 8 digitos',
  ),
});


const ValidationEmail = Yup.object().shape({
  email: Yup.string().email('Campo deve ser um email'),
  name: Yup.string().required('Campo deve ser preenchido'),
  message: Yup.string().required('Campo deve ser preenchido'),
});

// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const ValidationUser = Yup.object().shape({
  email: Yup.string()
    .email('Campo deve ser um email')
    .required('Campo não pode ser vazio'),
  phone: Yup.string()
  // .matches(phoneRegExp, 'Número não é válido')
    .required('Telefone não pode ser vazio'),
});


const ValidationFilter = (state) => {
  const {
    priceMax,
    priceMin,
    code,
    area,
    garage,
    dormitory,
    neighborhood,
    type,
    purpose,
  } = state;

  const validItems = [];

  if (priceMax > priceMin && priceMax > 300) {
    validItems.push({
      label: 'Preço',
      name: 'price',
      min: Number(priceMin),
      max: Number(priceMax),
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
      label: 'Nº Dormitórios',
      name: 'dormitory',
      value: Number(dormitory),
    });
  }

  if (garage < 10 && garage > 0 && Number(garage)) {
    validItems.push({
      label: 'Nº Vagas',
      name: 'garage',
      value: Number(garage),
    });
  }

  if (neighborhood > 0) {
    validItems.push({
      label: 'Bairro',
      name: 'neighborhood',
      value: Number(neighborhood),
    });
  }

  if (type > 0) {
    validItems.push({ label: 'Tipo', name: 'type', value: Number(type) });
  }

  if (purpose > 0) {
    validItems.push({
      label: 'Propósito',
      name: 'purpose',
      value: Number(purpose),
    });
  }

  return validItems;
};

const ValidationGrid = (data, filterList) => {
  let items = data.slice(0);

  const code = filterList.filter((x) => x.name === 'code');
  if (code.length > 0) { items = Model.EqualsTo(items, Number(code[0].value), 'property_id'); }

  const price = filterList.filter((x) => x.name === 'price');
  if (price.length > 0) {
    items = Model.MinMax(
      items,
      Number(price[0].min),
      Number(price[0].max),
      'price',
    );
  }

  const area = filterList.filter((x) => x.name === 'area');
  if (area.length > 0) { items = Model.BiggerThan(items, Number(area[0].value), 'area'); }

  const dormitory = filterList.filter((x) => x.name === 'dormitory');
  if (dormitory.length > 0) { items = Model.BiggerThan(items, Number(dormitory[0].value), 'dormitory'); }

  const garage = filterList.filter((x) => x.name === 'garage');
  if (garage.length > 0) { items = Model.BiggerThan(items, Number(garage[0].value), 'garage'); }

  const neighborhood = filterList.filter((x) => x.name === 'neighborhood');
  if (neighborhood.length > 0) {
    items = Model.EqualsTo(
      items,
      Number(neighborhood[0].value),
      'neighborhood_id',
    );
  }

  const type = filterList.filter((x) => x.name === 'type');
  if (type.length > 0) { items = Model.EqualsTo(items, Number(type[0].value), 'type_id'); }

  const purpose = filterList.filter((x) => x.name === 'purpose');
  if (purpose.length > 0) { items = Model.EqualsTo(items, Number(purpose[0].value), 'purpose_id'); }

  return items;
};

export {
  ValidationInfo,
  ValidationDetails,
  ValidationFeatures,
  ValidationLogin,
  ValidationFilter,
  ValidationGrid,
  ValidationUser,
  ValidationEmail,
};
