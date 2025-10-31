import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { OptionsProps, QuizData } from "@/utils/TypeData";
import he from "he";
import { useState } from "react";

export default function QuizForm(props: QuizData & OptionsProps) {
  const [options] = useState<string[]>(
    [props.correct_answer, ...props.incorrect_answers].sort(
      () => Math.random() - 0.5
    )
  );

  return (
    <>
      <div className="w-md">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Quiz App</CardTitle>
          </CardHeader>
          <div className="px-6">
            <Separator />
          </div>
          <CardContent>
            <p className="text-lg mb-4">{`${he.decode(props.question)}`}</p>
            <ul className="text-lg flex flex-col gap-3">
              {options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => {
                    if (!props.answered) props.handleAnswer(option);
                  }}
                  className={`border-2 rounded-md p-3 hover:cursor-pointer ${
                    props.answered
                      ? "pointer-events-none"
                      : "hover:cursor-pointer"
                  } ${
                    props.answered
                      ? option === props.correct_answer
                        ? "bg-green-100 border-green-200"
                        : option === props.selectedAnswer
                        ? "bg-red-100 border-red-200"
                        : "pointer-events-none"
                      : ""
                  }`}
                >
                  {he.decode(option)}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="justify-center">
            <p>{`${props.index + 1} of ${props.length} Questions`}</p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
