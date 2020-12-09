const faker = require("faker");
const fs = require("fs");

const MAX_USERS = 10;
const MAX_CONTACTS = 200;
const EASY_PASSWORD = "asd12A#";

const users = [];
const contacts = [];

var MaskSelector = {
  1: "+9 999 999 9999", // США
  20: "+99 9 99 99 99 99", // Египет
  213: "+999 999 99 99 99", // Алжир, Морокко
  216: "+999 99 999 999", // Того, Тунис
  218: "+999 99 999 99 99", // Ливия
  234: "+999 999 999 99 99", // Нигерия
  244: "+999 999 999 999", // Ангола
  255: "+999 99 999 99 99", // Танзания
  256: "+999 999 99 99 99", // Уганда
  263: "+999 99 9999999", // Зимбабве
  27: "+99 99 999 99 99", // ЮАР
  31: "+99 99 999 9999", // Нидерландыы 99999999999
  32: "+99 9 999 99 99", // Бельгия
  33: "+99 9 99 99 99 99", // Франция
  34: "+99 99 999 99 99", // Испания
  355: "+999 9 999 9999", // Албания
  357: "+999 99 999999", // Кипр
  358: "+999 99999999", // Финляндия
  359: "+999 9 999 99 99", // Болгария
  36: "+99 9 999 99 99", // Венгрия
  370: "+999 9 999 99 99", // Литва
  373: "+999 99 99 99 99", // Молдавия
  374: "+999 99 999999", // Армения
  375: "+999 99 999 99 99", // Беларусь
  380: "+999 99 999 99 99", // Украина
  385: "+999 9 9999 999", // Харватия
  386: "+999 9 999 99 99", // Словения
  387: "+999 99 999 999", // Бсония герцеговина
  39: "+99 999 999 9999", // Италия
  420: "+999 9 99 99 99 99", // Чехия
  43: "+99 9999 999999", // Австрия
  44: "+99 9 999 999 9999", // Англия
  45: "+99 99 99 99 99", // Дания
  48: "+99 99 999 99 99", // Польша
  49: "+99 9999 999999", // Германия
  501: "+999 9999999", // Белиз
  505: "+999 999 9999", // Никарагуа
  52: "+99 9 999 99 99 99", // Мексика
  54: "+99 9 99 9999 9999", // Аргентина
  56: "+99 9 9999 99 99", // Чили
  57: "+99 999 999 99 99", // Колумбия
  58: "+99 999 9999999", // Венесуэла
  592: "+999 999 99 99", // Гайана
  595: "+999 99 999 999", // Парагвай
  60: "+99 9 99 99 99 99", // Малазия
  61: "+99 9 99 99 99 99", // Австрал
  62: "+99 99 999 99 99", // Индонезия
  64: "+99 999 999 99 99", // Новая зеландия
  66: "+99 9 999 99 99", // Тайланд
  7: "+9 999 999 99 99", // Россия
  77: "+9 9999 99 99 99", // Казахстан +7
  84: "+99 99 99 99 99 99", // Вьетнам
  86: "+99 99 9999 9999", // Китай
  90: "+99 999 999 99 99", // Турция
  92: "+99 99 99999999", // Пакистан
  94: "+9999 9999999", // Шри ланка
  95: "+99 99 999 99 99", // Мьянма
  963: "+999 99 999 9999", // Сирия
  964: "+999 9 99 999 99 99", // Ирак
  966: "+999 99 999 99 99", // Саудовская Аравия
  967: "+999 9 99 99 99", // Йемен
  971: "+999 99 999 9999", // ОАЭ
  972: "+999 9 999 9999", // Израиль
  975: "+999 99 999999", // Бутан
  976: "+999 99 999 999", // Монголия
  977: "+9999 999 9999", // Непал
  98: "+99 99 9999 99 99", // Иран
  992: "+999 99 999 99 99", // Таджикистан
  994: "+999 99 999 99 99", // Азербаджан
  995: "+999 99 99 99 99", // Грузия
  996: "+999 999 99 99 99", // Кыргызстан
  998: "+999 99 999 99 99", // Узбекистан
  default: "+9 999 999 99999",
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
