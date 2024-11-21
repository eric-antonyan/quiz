import React, { useState } from "react";
import { quizData } from "../data/mockData";
import { AlertDialog, Button, Callout, Flex } from "@radix-ui/themes";


const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswerSubmit = () => {
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-5 text-blue-500">
        {currentQuestion + 1}
        <span className="text-black">/</span>
        <span className="text-2xl text-black">{quizData.length}</span>
      </h1>
      {
        (currentQuestion - 1) !== -1 && (
          <>
            <Callout.Root>
              <Callout.Icon>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              </Callout.Icon>
              <Callout.Text>
                Անցած հարցի պատասխան էր` ({quizData[currentQuestion - 1].answer})
              </Callout.Text>
            </Callout.Root>
          </>
        )
      }
      {isCompleted ? (
        <div className="text-center mt-5">
          <h2 className="text-2xl font-bold">Քուզիը վերջացավ</h2>
          <p className="mt-2 text-lg font-semibold">Շնորհակալություն մասնակցության համար :)</p>
        </div>
      ) : (
        <div className="mt-5">
          <h2 className="text-xl font-semibold mb-4">
            {quizData[currentQuestion].question}
          </h2>
          <img
            src={quizData[currentQuestion].image}
            alt="Question"
            className="w-full aspect-square object-cover rounded-lg mb-4"
          />
          <AlertDialog.Root>
            <AlertDialog.Trigger>
              <Button
                style={{ width: "100%" }}
                size={"4"}
                color="blue"
              >
                Ստուգել
              </Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
              <AlertDialog.Title>Հարցի պատասխան էր`</AlertDialog.Title>
              <AlertDialog.Description className="text-red-500 font-semibold">{quizData[currentQuestion].answer}</AlertDialog.Description>
              <Flex gap="3" justify="end">
                <AlertDialog.Action>
                  <Button onClick={handleAnswerSubmit} color="blue" size={"3"}>Առաջ</Button>
                </AlertDialog.Action>
              </Flex>
            </AlertDialog.Content>
          </AlertDialog.Root>
        </div>
      )}
      {
        isCompleted && (
          <Button color="blue" style={{width: "100%", marginTop: "30px"}} size={"4"}>Սկսել նորից</Button>
        )
      }
      <footer>
        <p className="text-center mt-5">&copy; 2024 Middle School of Sargis Karapetyan (MSoSK)</p>
      </footer>
    </div>
  );
};

export default Quiz;
