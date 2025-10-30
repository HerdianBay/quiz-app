import { LoginForm } from "@/components/login-form";
import type { User } from "@/utils/TypeData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginContainer() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:4000/users?email=${email}`, {
      method: "GET",
    });

    if (res.ok) {
      const user: User[] = await res.json();
      if (user.length === 0) {
        alert("Login gagal: User tidak ditemukan");
        return;
      }
      if (user[0].password === password) {
        const { fullName } = user[0];
        sessionStorage.setItem("user", JSON.stringify({ fullName }));
        alert("Login berhasil, mengarahkan Anda ke halaman dashboard");
        navigate("/");
      } else {
        alert("Login gagal: Password salah");
        return;
      }
    }
  };

  return (
    <LoginForm
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
}
