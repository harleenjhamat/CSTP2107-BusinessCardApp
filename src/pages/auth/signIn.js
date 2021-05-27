import { signIn } from "next-auth/client";

import GoogleLoginButton from "../../components/GoogleLoginButton";

export default function SignIn() {
  return (
    <>
        <div className="card m-5 p-5">
          <div className="card-body text-center">
            <h1>Login</h1>
            <GoogleLoginButton handleSignIn={() => signIn("google")} />
          </div>
        </div>
    </>
  );
}
