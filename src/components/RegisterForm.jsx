import { useDispatch } from "react-redux";
import { turnToLogin, userRegister } from "redux/actions";
import { useInput } from "hooks";
import { InputField } from "components";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const name = useInput("");
  const login = useInput("");
  const password = useInput("");
  const passwordCheck = useInput("");

  const onPasswordChange = ({ target }) => {
    password.setAction({ type: "CREATE" });
    password.onInputChange({ target });
  };

  const onPasswordCheckChange = ({ target }) => {
    passwordCheck.setAction({ type: "CHECK", payload: password.value });
    passwordCheck.onInputChange({ target });
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(
      userRegister({
        name: name.value,
        login: login.value,
        password: password.value,
      })
    );
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
      <InputField name="name" type="text" label="Username" {...name} />
      <InputField name="login" type="email" label="Email address" {...login} />
      <InputField
        label="Password"
        name="password"
        onInputChange={onPasswordChange}
        type="password"
        value={password.value}
      />
      <InputField
        label="Repeate password"
        name="passwordCheck"
        onInputChange={onPasswordCheckChange}
        placeholder="Please input same password"
        type="password"
        value={passwordCheck.value}
      />
      <button
        className="btn btn-link pl-0"
        onClick={onMemberBtnClick}
        type="button"
      >
        Do you have login?
      </button>
      <button
        className="btn btn-primary float-right"
        disabled={!isValidity}
        type="submit"
      >
        Register
      </button>
    </form>
  );
};
