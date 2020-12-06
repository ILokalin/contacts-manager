import { useDispatch } from "react-redux";
import { turnToLogin } from "redux/actions";
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
        name="password"
        type="password"
        label="Password"
        value={password.value}
        onInputChange={onPasswordChange}
      />
      <InputField
        name="passwordCheck"
        type="password"
        label="Repeate password"
        placeholder="Please input same password"
        value={passwordCheck.value}
        onInputChange={onPasswordCheckChange}
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
