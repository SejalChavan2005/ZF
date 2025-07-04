"use client";
import React,{PropsWithChildren} from 'react';
import { useFormStatus } from 'react-dom';
//import { Button } from '@/components/ui/button';
import '@/app/auth/signup/signup.css';


const SubmitButton = ({ children }: PropsWithChildren) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="signup-btn">
      {pending ? "Submitting..." : children}
    </button>

  );
};

export default SubmitButton;