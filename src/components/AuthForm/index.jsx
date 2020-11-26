import { useState } from "react";
import { InputField } from "components/InputField";

const formInitialize = {
  login: "",
  password: "",
};

export const AuthForm = () => {
  const [form, setForm] = useState(formInitialize);

  const onInputChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  return (
    <form>
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
      <button type="button" className="btn btn-secondary mr-4">
        Don't have login?
      </button>
      <button type="submit" className="btn btn-primary float-right">
        Login
      </button>
    </form>
  );
};
