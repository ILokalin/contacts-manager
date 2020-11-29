import { useState } from "react";
import { useDispatch } from "react-redux";
import { InputField } from "components/InputField";
import { turnToRegistration, userLogin } from "redux/actions";
import { validity } from "utils/validity";

const formInitial = {
  login: {
    value: "",
    isValidity: "",
  },
  password: {
    value: "",
    isValidity: "",
  },
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [{ login, password }, setForm] = useState(formInitial);

  const onInputChange = ({ target }) => {
    setForm({
      ...{ login, password },
      [target.name]: validity({ target }),
    });
  };

  const onRegisterBtnClick = () => {
    dispatch(turnToRegistration());
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(userLogin({ userName: "Messi", userID: "user12345" }));
  };

  const isValidity = login.isValidity && password.isValidity;

  return (
    <form onSubmit={onFormSubmit}>
      <h3 className="text-center">Contacts Manager</h3>
      <InputField
        name="login"
        type="email"
        label="Email address"
        placeholder="Use email for login"
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
      <button
        type="button"
        className="btn btn-link pl-0"
        value={password.value}
        onClick={onRegisterBtnClick}
      >
        Don't have login?
      </button>
      <button
        type="submit"
        className="btn btn-primary float-right"
        disabled={!isValidity}
      >
        Login
      </button>
    </form>
  );
};
