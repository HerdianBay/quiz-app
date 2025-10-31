import { SignupForm } from "@/components/signup-form";
import type { User } from "@/utils/TypeData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

export default function SignUpContainer() {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Signup gagal: Password dan Confirm Password tidak sesuai");
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const res = await fetch(`http:///localhost:4000/users?email=${email}`, {
      method: "GET",
    });
    const data: User[] = await res.json();

    if (data.length === 0) {
      const response = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, hashedPassword }),
      });
      if (response.ok) {
        alert("Signup berhasil, mengalihkan ke halaman login");
        navigate("/login");
      } else {
        throw new Error("Signup gagal: " + res.statusText);
      }
    } else {
      alert("Email sudah terdaftar, silahkan masukkan email yang lain");
      return;
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
