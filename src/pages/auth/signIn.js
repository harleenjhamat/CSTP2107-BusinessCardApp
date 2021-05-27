import { signIn } from "next-auth/client";

import GoogleLoginButton from "../../components/GoogleLoginButton";
import styles from "../../styles/login.module.scss";

export default function SignIn() {
  return (
    <>
    <div className={styles.loginContainer}>
      <div className="card m-5 p-5">
        <div className="card-body text-center">
          <h1>Login</h1>
          <GoogleLoginButton handleSignIn={() => signIn("google")} />
        </div>
      </div>
    </div>
    </>
  );
}
