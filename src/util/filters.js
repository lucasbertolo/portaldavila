
const ModelObject = {
  EqualsTo: (obj, value, name) => {
    const res = obj.filter((x) => (
      x[name] === value
    ));

    return res;
  },

  MinMax: (obj, min, max, name) => {
    const res = obj.filter((x) => (
      x[name] > min && x[name] < max
    ));
    return res;
  },

  LessThan: (obj, value, name) => {
    const res = obj.filter((x) => (
      x[name] < value
    ));

    return res;
  },
};

export default ModelObject;
