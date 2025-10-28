import { SignupForm } from "@/components/signup-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpContainer() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName, email, password }),
    });

    if (res.ok) {
      alert("Signup berhasil, mengalihkan ke halaman login");
      navigate("/login");
    } else {
      throw new Error("Signup gagal: " + res.statusText);
    }
  };

  return (
    <SignupForm
      fullName={fullName}
      setFullName={setFullName}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      confirmPassword={confirmPassword}
      setConfirmPassword={setConfirmPassword}
      handleSubmit={handleSubmit}
    />
  );
}
