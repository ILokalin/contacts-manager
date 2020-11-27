const nameValidity = ({ field }) => {
  if (field.value.indexOf("hell") > -1) {
    console.log(field.value);
    return "Don't use this word";
  }
  return "";
};

const Handler = {
  name: nameValidity,
  default: () => "",
};

export const validity = (type, data) => {
  const handle = Handler[type] || Handler.default;
  handle(data);
};
