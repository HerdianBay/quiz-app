import Logout from "@/components/logout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { fullName } = JSON.parse(sessionStorage.getItem("user") || "{}");
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-svh text-center">
      <Logout />
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle>Welcome, {fullName}</CardTitle>
            <CardDescription>
              Klik tombol di bawah ini untuk memulai kuis dan menguji
              pengetahuan Anda! Soal berjumlah 10 pertanyaan dengan berbagai
              tingkat kesulitan dan kategori. Waktu untuk mengerjakan soal
              adalah 15 menit. Semoga beruntung!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              className="hover:cursor-pointer"
              onClick={() => navigate("/quiz")}
            >
              Start The Quiz
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
