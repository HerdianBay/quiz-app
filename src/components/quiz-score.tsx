import type { QuizScoreProps } from "@/utils/TypeData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export default function QuizScore(props: QuizScoreProps) {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-sm text-center">
      <Card>
        <CardHeader>
          <CardTitle>Quiz Completed</CardTitle>
          <CardDescription>
            You answer {props.totalAnswered} from {props.length}
          </CardDescription>
          <CardDescription>Total correct answer: {props.score}</CardDescription>
          <CardDescription>
            Total wrong answer: {props.length - props.score}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={() => navigate("/")}
            className="hover:cursor-pointer"
          >
            Homepage
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
