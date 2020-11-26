import { AuthForm } from "components/AuthForm";

export const AuthPage = () => {
  return (
    <div className="row h-75 justify-content-md-center align-items-center">
      <div className="col-6">
        <h2 className="text-center mb-4">Contacts Manager</h2>
        <AuthForm />
      </div>
    </div>
  );
};
