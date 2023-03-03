import { MathJax } from "better-react-mathjax";
import React, { useState, useEffect } from "react";
import { getQuestions } from "../utils/mathsAPI";
import { addSpaceBeforeCapital } from "../utils/trimString";
import { Question } from "../types/@types";

const MathQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await getQuestions();
      setQuestions(response);
    };
    fetchQuestions();
  }, []);

  if (!questions) return <></>;

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const renderQuestion = (question: Question) => {
    return (
      <div>
        <div className="font-bold text-xl pb-4">
          {addSpaceBeforeCapital(question.ChapterID)}
        </div>
        <div className="pb-1 border border-black">
          <div className="bg-gray-200 px-4 py-8 border-b border-black">
            <MathJax key={question.Question}>{question?.Question}</MathJax>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto mt-20">
      <div className="h-40 max-lg:h-48 max-sm:h-64">
        {questions && questions.length > 0 && (
          <div className="mx-auto w-2/3">
            {renderQuestion(questions[currentQuestion])}
          </div>
        )}
      </div>
      {questions && questions.length > 0 && (
        <div className="flex justify-between mx-auto mt-8 w-2/3">
          <button
            onClick={goToPreviousQuestion}
            className={`bg-white p-2 border-black rounded-lg w-36 max-sm:w-20 max-sm:text-sm text-black ${
              currentQuestion === 0
                ? "cursor-default border"
                : "font-semibold border-2 hover:bg-black hover:text-white"
            }`}
          >
            Previous
          </button>
          <button
            onClick={goToNextQuestion}
            className={`bg-white p-2 border-black rounded-lg w-36 max-sm:w-20 max-sm:text-sm text-black ${
              currentQuestion === questions.length - 1
                ? "cursor-default border"
                : "font-semibold border-2 hover:bg-black hover:text-white"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default MathQuestions;
