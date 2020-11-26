import { useState } from "react";
import { useDispatch } from "react-redux";
import { InputField } from "components/InputField";
import { turnToLogin } from "redux/actions";

const formInitialize = {
  name: "",
  login: "",
  password: "",
  passwordCheck: "",
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(formInitialize);

  const onInputChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
  };

  const onMemberBtnClick = () => {
    dispatch(turnToLogin());
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h3 className="text-center">Registration form</h3>
      <InputField
        name="name"
        type="text"
        label="Username"
        onInputChange={onInputChange}
      />
      <InputField
        name="login"
        type="email"
        label="Email address"
        onInputChange={onInputChange}
      />
      <InputField
        name="password"
        type="password"
        label="Password"
        onInputChange={onInputChange}
      />
      <InputField
        name="passwordCheck"
        type="password"
        label="Repeate password"
        placeholder="Please input same password"
        onInputChange={onInputChange}
      />
      <button
        type="button"
        className="btn btn-link pl-0"
        onClick={onMemberBtnClick}
      >
        Do you have login?
      </button>
      <button type="submit" className="btn btn-primary float-right">
        Register
      </button>
    </form>
  );
};
