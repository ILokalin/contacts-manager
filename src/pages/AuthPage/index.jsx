import { useSelector } from "react-redux";
import { LoginForm } from "components/LoginForm";
import { RegisterForm } from "components/RegisterForm";

export const AuthPage = () => {
  const isRegistrationProc = useSelector(({ auth }) => auth.isRegistrationProc);

  return (
    <div className="row h-75 justify-content-md-center align-items-center">
      <div className="col-6">
        {isRegistrationProc ? <RegisterForm /> : <LoginForm />}
      </div>
    </div>
  );
};
