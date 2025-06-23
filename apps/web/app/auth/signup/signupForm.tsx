"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./signup.css";
import { Input } from "@/components/ui/input";
import SubmitButton from "@/components/ui/submitButton";
import { useActionState } from "react";
import { signUp } from "@/lib/auth";

const SignupForm = () => {
  const [state, action] = useActionState(signUp, undefined);

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  return (
    <>
      <div className="right-pane">
        <div className="header-text">
          <h2>Channel of India</h2>
        </div>
        <h3>Create Account</h3>

        
        <form action={action}>
          
          {state?.message && (
            <p className="text-sm text-red-500">{state.message}</p>
          )}

          <Input id="name" name="name" type="text" placeholder="Name" />
          {state?.error?.name?.map((err, i) => (
            <p key={i} className="text-sm text-red-500">
              {err}
            </p>
          ))}

          <Input id="email" name="email" type="email" placeholder="Email" />
          {state?.error?.email && (
            <p className="text-sm text-red-500">{state.error.email}</p>
          )}

          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          
          {state?.error?.password && (
            <div className="text-sm text-red-500">
              <p>Password must:</p>
              <ul>
                {state.error.password.map((error, i) => (
                  <li key={i}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div className="button-group">
            <SubmitButton>Sign Up</SubmitButton>
            <button type="button" className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>

        <p className="terms">
          <a href="#">Terms & Conditions</a>
        </p>
        <p className="signin-link">
          Already have an account? <Link href={"/auth/signin"}>Sign In</Link>
        </p>
      </div>
    </>
  );
};

export default SignupForm;
