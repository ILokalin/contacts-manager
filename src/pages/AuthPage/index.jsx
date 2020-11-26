import { useSelector } from "react-redux";
import { AuthForm } from "components/AuthForm";
import { RegisterForm } from "components/RegisterForm";

export const AuthPage = () => {
  const isRegistration = useSelector(({ auth }) => auth.isRegistration);

  return (
    <div className="row h-75 justify-content-md-center align-items-center">
      <div className="col-6">
        {isRegistration ? <RegisterForm /> : <AuthForm />}
      </div>
    </div>
  );
};
