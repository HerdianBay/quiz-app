import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export default function Logout() {
  const navigate = useNavigate();
  return (
    <div className="absolute top-4 right-4">
      <Button
        onClick={() => {
          sessionStorage.clear();
          navigate("/login");
        }}
        className="hover:cursor-pointer"
      >
        Logout
      </Button>
    </div>
  );
}
