'use client';
import React, { useState } from 'react';
import './signup.css'; 
import Link from 'next/link';
import SignupForm from './signupForm';

const Registration: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const passwordsMatch = password === confirmPassword;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    if (!passwordsMatch) return;

    // Handling form submission logic here
    console.log('Form submitted!');
  };

  return (
    <div className="registration-container">
      <div className="left-pane">
        <h1>CAPTURE. UPLOAD. INSPIRE.</h1>
        <p>
          Explore the latest snapshots from travelers across India — from serene
          backwaters to majestic forts, each photo captures a unique story of
          discovery.
        </p>
      </div>

      <div className="right-pane-container">
        <SignupForm />
      </div>
    </div>
  );
};

export default Registration;
