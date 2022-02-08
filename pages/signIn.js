import React, { useRef } from "react";
import { useRouter } from "next/router";

const SignInPage = () => {
  const router = useRouter();
  const emailInput = useRef();
  const passwordInput = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailInput.current.value;
    const password = passwordInput.current.value;

    const response = await fetch("/api/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      return router.push("/private");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Email: <input type="text" ref={emailInput} />
        </label>
      </div>
      <div>
        <label>
          Password: <input type="password" ref={passwordInput} />
        </label>
      </div>
      <div>
        <button type="submit">Sign in</button>
      </div>
    </form>
  );
};

export default SignInPage;