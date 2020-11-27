import { useState } from "react";
import { useDispatch } from "react-redux";
import { InputField } from "components/InputField";
import { turnToRegistration, userLogin } from "redux/actions";

const formInitial = {
  login: "",
  password: "",
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(formInitial);

  const onInputChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const onRegisterBtnClick = () => {
    dispatch(turnToRegistration());
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(userLogin({ userName: "Messi", userID: "user12345" }));
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h3 className="text-center">Contacts Manager</h3>
      <InputField
        name="login"
        type="email"
        label="Email address"
        placeholder="Use email for login"
        onInputChange={onInputChange}
      />
      <InputField
        name="password"
        type="password"
        label="Password"
        onInputChange={onInputChange}
      />
      <button
        type="button"
        className="btn btn-link pl-0"
        onClick={onRegisterBtnClick}
      >
        Don't have login?
      </button>
      <button type="submit" className="btn btn-primary float-right">
        Login
      </button>
    </form>
  );
};
