const faker = require("faker");
const fs = require("fs");

const MAX_USERS = 10;
const MAX_CONTACTS = 200;
const EASY_PASSWORD = "asd12A#";

const users = [];
const contacts = [];

var MaskSelector = {
  1: "+9 999 999 9999", // usa
  20: "+99 9 99 99 99 99", //египет
  31: "+99 99 999 9999", //нидерландыы 99999999999
  32: "+99 9 999 99 99", // бельгия
  34: "+99 99 999 99 99", //испания
  359: "+999 9 999 99 99", //болгария
  36: "+99 9 999 99 99", //hung
  370: "+999 9 999 99 99", //литва
  373: "+999 99 99 99 99", //молд
  374: "+999 99 999999", //армения
  375: "+999 99 999 99 99", // bel
  380: "+999 99 999 99 99", // ukr
  39: "+99 999 999 9999", //италия
  420: "+999 9 99 99 99 99", //чехия
  43: "+99 9999 999999", // aus
  44: "+99 9 999 999 9999", //lon
  48: "+99 99 999 99 99", //польша
  49: "+99 9999 999999", // ger
  52: "+99 9 999 99 99 99", // мексика
  54: "+99 9 99 9999 9999", //аргентина
  60: "+99 9 99 99 99 99", //малазия
  61: "+99 9 99 99 99 99", //австрал
  7: "+9 999 999 99 99", // rus
  77: "+9 9999 99 99 99", // kaz
  84: "+99 99 99 99 99 99", //вьетнам
  86: "+99 99 9999 9999", //китай
  90: "+99 999 999 99 99", //турция
  92: "+99 99 99999999", //пакистан
  972: "+999 9 999 9999", //изра
  98: "+99 99 9999 99 99", //Иран
  992: "+999 99 999 99 99", // Таджикистан
  994: "+999 99 999 99 99", //азерб
  995: "+999 99 99 99 99", //грузия
  996: "+999 999 99 99 99", // кыргызстан
  998: "+999 99 999 99 99", //узб
  default: "+9 999 999 9999",
};

const randomIndex = (max) => Math.floor(Math.random() * max);

const createPhone = () => {
  const code = Object.entries(MaskSelector)[randomIndex(36)];

  const randomGenerate = (string, limit) => {
    if (string.length === limit) {
      return string;
    }
    return randomGenerate(string + Math.floor(Math.random() * 10), limit);
  };

  return randomGenerate(code[0], code[1].match(/[0-9]/g).length);
};

const createUser = () => {
  return {
    id: faker.random.uuid(),
    name: faker.fake("{{name.lastName}} {{name.firstName}}"),
    login: faker.internet.email(),
    password: faker.internet.password(),
  };
};

const createContact = (userId) => {
  return {
    id: faker.random.uuid(),
    userId: userId,
    name: faker.fake("{{name.lastName}} {{name.firstName}}"),
    phone: createPhone().toString(),
  };
};

const createUsers = () => {
  for (let i = 0; i < MAX_USERS; i += 1) {
    const user = createUser();
    if (i < 3) {
      user.password = EASY_PASSWORD;
      user.login = `test${i + 1}@mail.ru`;
    }
    users.push(user);
  }
};

const createContacts = () => {
  for (let i = 0; i < MAX_CONTACTS; i += 1) {
    contacts.push(createContact(users[randomIndex(MAX_USERS)].id));
  }
};

const createBase = () => {
  createUsers();
  createContacts();

  try {
    const data = fs.writeFileSync(
      "db.json",
      JSON.stringify({
        users,
        contacts,
      })
    );
    //файл записан успешно
  } catch (err) {
    console.error(err);
  }
};

createBase();

// console.log(createPhone());
