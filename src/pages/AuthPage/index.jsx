import { useSelector } from "react-redux";
import { LoginForm, RegisterForm } from "components";

export const AuthPage = () => {
  const isRegistrationProc = useSelector(({ auth }) => auth.isRegistrationProc);

  return (
    <div className="row h-75 justify-content-md-center align-items-center">
      <div className="container col col-lg-6 col-md-8">
        {isRegistrationProc ? <RegisterForm /> : <LoginForm />}
      </div>
    </div>
  );
};
