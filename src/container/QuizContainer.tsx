import QuizForm from "@/components/quiz-form";
import QuizScore from "@/components/quiz-score";
import type { CountdownProps, QuizData, RawData } from "@/utils/TypeData";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";

export default function QuizContainer() {
  const [quiz, setQuiz] = useState<QuizData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [answered, setAnswered] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [countCorrectAnswer, setCountCorrectAnswer] = useState<number>(0);
  const [startQuestion, setStartQuestion] = useState<number>(0);
  const [countdown, setCountdown] = useState<number | undefined>(undefined);
  const [totalAnswered, setTotalAnswered] = useState<number>(0);
  const [finished, setFinished] = useState<boolean>(false);

  useEffect(() => {
    const getQuiz = async () => {
      try {
        const res = await fetch(
          "https://opentdb.com/api.php?amount=10&type=multiple",
          {
            method: "GET",
          }
        );
        if (res.ok) {
          const data: RawData = await res.json();
          setQuiz(data.results);
          setLoading(false);
        }
        // } else {
        //   throw new Error("Failed to fetch quiz data ");
        // }
      } catch (error) {
        alert(error + "try to refresh the browser");
      }
    };
    getQuiz();
  }, []);

  useEffect(() => {
    if (!loading) {
      setCountdown(Date.now() + 15 * 60 * 1000);
    }
  }, [loading]);

  const handleAnswer = (option: string) => {
    if (finished) return;

    setAnswered(true);
    setSelectedAnswer(option);
    setTotalAnswered((prev) => prev + 1);
    if (option === quiz[startQuestion].correct_answer) {
      setCountCorrectAnswer((prev) => prev + 1);
    }

    setTimeout(() => {
      setAnswered(false);
      setSelectedAnswer("");
      if (startQuestion + 1 === quiz.length) {
        setFinished(true);
      } else {
        setStartQuestion((prev) => prev + 1);
      }
    }, 1500);
  };

  const renderer = ({ minutes, seconds, completed }: CountdownProps) => {
    if (completed) {
      return <span className="self-end">Waktu Habis</span>;
    } else {
      return (
        <span className="self-end">
          {minutes}:{seconds}
        </span>
      );
    }
  };

  const handleCompleted = () => {
    setFinished(true);
    setStartQuestion(quiz.length);
  };

  return (
    <div className="flex justify-center items-center min-h-svh">
      {loading && <h1>Loading...</h1>}
      {!loading && quiz.length > 0 && !finished && countdown !== undefined && (
        <div className="flex flex-col gap-3">
          <Countdown
            date={countdown}
            renderer={renderer}
            onComplete={handleCompleted}
          />
          <QuizForm
            {...quiz[startQuestion]}
            index={startQuestion}
            key={startQuestion}
            answered={answered}
            selectedAnswer={selectedAnswer}
            length={quiz.length}
            handleAnswer={handleAnswer}
          />
        </div>
      )}
      {finished && !loading && (
        <QuizScore
          length={quiz.length}
          score={countCorrectAnswer}
          totalAnswered={totalAnswered}
        />
      )}
    </div>
  );
}
