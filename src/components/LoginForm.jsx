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
        label="Email address"
        name="login"
        placeholder="Use email for login"
        refer={login.refer}
        type="email"
        {...login}
      />
      <InputField
        label="Password"
        name="password"
        refer={password.refer}
        type="password"
        {...password}
      />
      <button
        className="btn btn-link pl-0"
        onClick={onRegisterBtnClick}
        type="button"
        value={password.value}
      >
        Don't have login?
      </button>
      <button
        className="btn btn-primary float-right"
        disabled={!isValidity}
        type="submit"
      >
        Login
      </button>
    </form>
  );
};
