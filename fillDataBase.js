const faker = require("faker");
const fs = require("fs");

const MAX_USERS = 10;
const MAX_CONTACTS = 200;
const EASY_PASSWORD = "asd12A#";

const users = [];
const contacts = [];

const randomIndex = () => Math.floor(Math.random() * MAX_USERS);

const dCreatePhone = () => {
  return Math.floor(Math.random() * 10000000000) + 999999999;
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
    phone: dCreatePhone().toString(),
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
    contacts.push(createContact(users[randomIndex()].id));
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
