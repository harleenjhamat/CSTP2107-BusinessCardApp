import { signIn } from "next-auth/client";
import { signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";

import GoogleLoginButton from "../../../components/GoogleLoginButton";
import styles from "../../../styles/login.module.scss";

const ROOT = process.env.ROOT;

export default function Login() {
  const [session, loading] = useSession();
  const router = useRouter();
  const { prev } = router.query;
  const hostname = ROOT || window.location.origin; // Resolve the current hostname

  // If the user has already signed in, bring them back to the previous page
  if (session) {
    return router.back();
  }

  return (
    <>
      <div className={styles.loginContainer}>
        <div className="card m-5 p-5">
          <div className="card-body text-center">
            <h1>Login</h1>
            <GoogleLoginButton
              handleSignIn={() => {
                signIn("google", { callbackUrl: `${hostname}/` + prev });
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
