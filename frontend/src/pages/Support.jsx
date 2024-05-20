import React, { useEffect, useRef, useState } from "react";
import Header from "../features/home/Header";

const prevrittenAnswer = [
  {
    id: 1,
    question: "Hello, how can I help you?",
  },
  {
    id: 2,
    question:
      "Okay, I would like to ask you a follow-up question. Then, our team will get back to you shortly.",
  },
  {
    id: 3,
    question: "Please provide me with your booking ID.",
  },

  {
    id: 4,
    question: "Please provide me with your email address.",
  },

  {
    id: 5,
    question: "Please provide me with your phone number.",
  },

  {
    id: 6,
    question: "Thank you for contacting us. We will get back to you shortly.",
  },
];

const Support = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(0);
  const [chat, setChat] = useState([prevrittenAnswer[0]]);
  const messagesEndRef = useRef(null);

  const handleAnswer = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const answer = {
      id: Math.random(),
      question: formData.get("text"),
      isUser: true,
    };

    setAnswers([...answers, answer]);
    setChat([...chat, answer]);
    setIsAnswered(isAnswered + 1);

    e.target.reset();
  };

  useEffect(() => {
    if (isAnswered > 0 && isAnswered < 5) {
      setTimeout(() => {
        setChat([...chat, prevrittenAnswer[isAnswered]]);
      }, Math.random() * 1000);
    } else if (isAnswered === 5) {
      setTimeout(() => {
        setChat([...chat, prevrittenAnswer[5]]);
      }, Math.random() * 1000);
    } else {
      return;
    }
  }, [isAnswered]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [chat]);

  return (
    <div className="relative flex h-full w-full flex-col gap-8 p-4">
      <Header />

      <div className="flex h-full flex-col gap-4 overflow-scroll">
        <h2 className="text-lg font-semibold">Chat with Admin</h2>
        <div className="flex h-full flex-col gap-4">
          {chat.map((answer) => (
            <div
              className={`flex flex-col gap-2 p-2 ${
                answer.isUser ? "ml-auto" : "mr-auto"
              }`}
              key={answer.id}
            >
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                  <img
                    src="https://placehold.co/400x400"
                    alt="Admin"
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold">
                      {answer.isUser ? "You" : "Admin"}
                    </p>
                    <p className="text-sm font-light">{answer.question}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <form className="flex w-full flex-row gap-2" onSubmit={handleAnswer}>
        <input
          type="text"
          placeholder="Type your message here..."
          className="w-full border p-2"
          name="text"
        />
        <button className="border bg-blue-500 p-2 text-white">Send</button>
      </form>
    </div>
  );
};

export default Support;
