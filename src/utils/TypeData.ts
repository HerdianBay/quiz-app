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
  hashedPassword: string;
}

export interface RawData {
  response_code: number;
  results: QuizData[];
}

export interface QuizData {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface OptionsProps {
  length: number;
  index: number;
  answered: boolean;
  selectedAnswer: string;
  handleAnswer: (option: string) => void;
}

export interface QuizScoreProps {
  length: number;
  score: number;
  totalAnswered: number;
}

export interface CountdownProps {
  minutes: number;
  seconds: number;
  completed: boolean;
}
