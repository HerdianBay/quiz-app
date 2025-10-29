import type React from "react";

export interface LoginProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export interface SignUpProps {
  fullName: string;
  setFullName: (fullName: string) => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (confirmPassword: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export interface User {
  id?: string;
  fullName: string;
  email: string;
  password: string;
}
