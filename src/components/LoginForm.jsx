import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { turnToRegistration, getAuthenticate } from "redux/actions";
import { useInput } from "hooks";
import { InputField } from "components";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const login = useInput("");
  const password = useInput("");

  useEffect(() => {
    login.setFocus();
    // eslint-disable-next-line
  }, []);

  const onRegisterBtnClick = () => {
    dispatch(turnToRegistration());
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(getAuthenticate({ login: login.value, password: password.value }));
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
        refer={login.refer}
        {...login}
      />
      <InputField
        name="password"
        type="password"
        label="Password"
        refer={password.refer}
        {...password}
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
