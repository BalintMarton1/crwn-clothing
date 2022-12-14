import SignUpForm from "../Sign-up-form/sign-up-form.component";
import SignInForm from "../Sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm></SignInForm>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default Authentication;
