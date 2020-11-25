import { useEffect, useState } from "react";

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
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="login"
          onChange={onInputChange}
        />
        <small id="emailHelp" className="form-text text-muted">
          Use email for login.
        </small>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          name="password"
          onChange={onInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};
