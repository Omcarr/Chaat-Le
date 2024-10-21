import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuizPage = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const questions = [
    {
      question: "What kind of vacation do you prefer?",
      options: [
        "A quiet cabin in the mountains",
        "A beach resort with lots of activities",
        "A bustling city with lots to explore",
        "Backpacking through remote areas",
      ],
    },
    {
      question: "How do you handle surprises in life?",
      options: [
        "I prefer to plan everything, no surprises",
        "I can handle small surprises",
        "I thrive in unexpected situations",
        "I actively seek out new and surprising experiences",
      ],
    },
    {
      question: "What’s your go-to way to de-stress?",
      options: [
        "Curling up with a good book or show",
        "Meeting up with friends for fun",
        "Doing something adventurous or thrilling",
        "Learning something new or engaging in a hobby",
      ],
    },
    {
      question: "What’s your usual preference for meal portions?",
      options: [
        "Light and small",
        "Something filling but not too heavy",
        "I like to have a good variety of dishes",
        "A hearty and substantial meal",
      ],
    },
    {
      question: "When trying new food, how adventurous are you?",
      options: [
        "I stick with safe, known options",
        "I’ll try something new if it’s a recommendation",
        "I like to experiment with flavors",
        "I’m always up for the wildest and most unique dishes",
      ],
    },
  ];

  const menuItems = {
    "Basic B Nachos": 40,
    "Samosa Chaat": 40,
    "Sev Puri": 40,
    "Papdi Chaat": 40,
    "Dahi Puri": 50,
    "Señor Nachos": 60,
    "Fiesta Nachos": 100,
  };

  const assignDish = (answers) => {
    let score = answers.reduce((acc, answer) => acc + answer, 0);
    if (score <= 5) return "Basic B Nachos";
    else if (score <= 8) return "Samosa Chaat";
    else if (score <= 12) return "Sev Puri";
    else if (score <= 15) return "Dahi Puri";
    else if (score <= 18) return "Señor Nachos";
    else return "Fiesta Nachos";
  };

  const handleAnswer = (optionIndex) => {
    setAnswers([...answers, optionIndex]);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      const dish = assignDish(answers);
      onComplete(dish);
      navigate("/result");
    }
  };

  return (
    <div className="min-h-screen bg-yellow-100 p-5 flex flex-col items-center justify-center">
      <div className="bg-green-500 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl text-white text-center font-bold mb-5">Chaat-Le Quiz</h1>
        <h2 className="text-xl text-white mb-4">{questions[step].question}</h2>
        <div className="flex flex-col space-y-4">
          {questions[step].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index + 1)}
              className="bg-yellow-300 text-green-800 py-2 px-4 rounded-lg hover:bg-yellow-400"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
