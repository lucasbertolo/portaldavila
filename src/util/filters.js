
const ModelObject = {
  EqualsTo: (obj, value, name) => {
    const res = obj.filter((x) => (
      x[name] === value
    ));

    return res;
  },

  MoreThan: (obj, value, name) => {
    const res = obj.filter((x) => (
      x[name] > value
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
