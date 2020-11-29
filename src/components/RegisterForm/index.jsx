import { useState } from "react";
import { useDispatch } from "react-redux";
import { InputField } from "components/InputField";
import { turnToLogin } from "redux/actions";
import { validity } from "utils/validity";

const formField = {
  value: "",
  isValidity: false,
};

const formInitialize = {
  name: Object.assign({}, formField),
  login: Object.assign({}, formField),
  password: Object.assign({}, formField),
  passwordCheck: Object.assign({}, formField),
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(formInitialize);
  const { name, login, password, passwordCheck } = form;

  const onInputChange = ({ target }) => {
    const { name } = target;
    const action = {
      type: name === "passwordCheck" ? "CHECK" : "CREATE",
      payload: password.value,
    };

    setForm({
      ...form,
      [target.name]: validity({ target, action }),
    });
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
  };

  const onMemberBtnClick = () => {
    dispatch(turnToLogin());
  };

  const isValidity = [name, login, password, passwordCheck].reduce(
    (acc, { isValidity }) => acc && isValidity,
    true
  );

  return (
    <form onSubmit={onFormSubmit}>
      <h3 className="text-center">Registration form</h3>
      <InputField
        name="name"
        type="text"
        label="Username"
        value={name.value}
        onInputChange={onInputChange}
      />
      <InputField
        name="login"
        type="email"
        label="Email address"
        value={login.value}
        onInputChange={onInputChange}
      />
      <InputField
        name="password"
        type="password"
        label="Password"
        value={password.value}
        onInputChange={onInputChange}
      />
      <InputField
        name="passwordCheck"
        type="password"
        label="Repeate password"
        placeholder="Please input same password"
        value={passwordCheck.value}
        onInputChange={onInputChange}
      />
      <button
        type="button"
        className="btn btn-link pl-0"
        onClick={onMemberBtnClick}
      >
        Do you have login?
      </button>
      <button
        type="submit"
        className="btn btn-primary float-right"
        disabled={!isValidity}
      >
        Register
      </button>
    </form>
  );
};
