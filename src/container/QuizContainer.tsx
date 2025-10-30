import QuizForm from "@/components/quiz-form";
import type { QuizData, RawData } from "@/utils/TypeData";
import { useEffect, useState } from "react";

export default function QuizContainer() {
  const [quiz, setQuiz] = useState<QuizData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [answered, setAnswered] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [countCorrectAnswer, setCountCorrectAnswer] = useState<number>(0);
  const [startQuestion, setStartQuestion] = useState<number>(0);
  useEffect(() => {
    const getQuiz = async () => {
      try {
        const res = await fetch(
          "https://opentdb.com/api.php?amount=2&type=multiple",
          {
            method: "GET",
          }
        );
        if (res.ok) {
          const data: RawData = await res.json();
          setQuiz(data.results);
          setLoading(false);
        }
      } catch (error) {
        alert(error + "try to refresh the browser");
      }
    };
    getQuiz();
  }, []);

  const handleAnswer = (option: string) => {
    setAnswered(true);
    setSelectedAnswer(option);
    if (option === quiz[startQuestion].correct_answer) {
      setCountCorrectAnswer((prev) => prev + 1);
    }

    setTimeout(() => {
      setAnswered(false);
      setSelectedAnswer("");
      setStartQuestion((prev) => prev + 1);
    }, 3000);
  };

  return (
    <div className="flex justify-center items-center min-h-svh">
      {loading && <h1>Loading...</h1>}
      {!loading && quiz.length > 0 && (
        <QuizForm
          {...quiz[startQuestion]}
          index={startQuestion}
          answered={answered}
          selectedAnswer={selectedAnswer}
          length={quiz.length}
          handleAnswer={handleAnswer}
        />
      )}
      {/* {loading ? (
        <h1>Loading...</h1>
      ) : (
        quiz.map((q, index) => (
          <QuizForm
            {...q}
            key={index}
            index={index}
            answered={answered}
            selectedAnswer={selectedAnswer}
            length={quiz.length}
            handleAnswer={handleAnswer}
          />
        ))
      )} */}
    </div>
  );
}
