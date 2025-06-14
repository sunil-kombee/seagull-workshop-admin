"use client";
import React from "react";
import LoginForm from "../../components/LoginForm";
import loginBG from "../../assets/login-bg.png";

const LoginPage = () => (
  <div
    className="min-h-screen flex items-center justify-center bg-cover bg-center py-16"
    style={{ backgroundImage: `url(${loginBG.src})` }}
  >
    <LoginForm />
  </div>
);

export default LoginPage;
