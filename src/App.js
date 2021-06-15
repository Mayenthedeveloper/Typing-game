import "./App.css";
import React, { useState, useEffect } from "react";
import Words from "./components/Words";
import Container from "./components/Container";
import Typeracer from "./components/Typeracer";
import Result from "./components/Result";

function App() {
  const [word, setWord] = useState(Words);
  const [newWord, setNewWord] = useState(word[0]);
  const [disabled, setDisabled] = useState(true);
  const [correctResults, setCorrectResults] = useState([]);
  const [wrongResult, setWrongResult] = useState([]);
  const [countCorrect, setCountcorrect] = useState(0);
  const [time, setTime] = useState(30);
  const [inputValue, setInputValue] = useState("");
  const [animation, setAnimation] = useState(null);

  console.log(word.length);

  let randomWord = Math.floor(Math.random() * word.length);

  const checkAnswer = () => {
    if (inputValue.trim() === newWord) {
      setCorrectResults((prevCorrect) => [...prevCorrect, newWord]);
      setCountcorrect((prevCorrect) => prevCorrect + 1);
      return;
    }
    setWrongResult((preWrong) => [...preWrong, inputValue]);
  };

  const handleInput = (e) => {
    if (e.charCode == 13 && inputValue.trim() !== "") {
      checkAnswer();
      setNewWord(word[randomWord]);
      setInputValue("");
    }
  };

  const handleStart = () => {
    setDisabled(!disabled);
    setCorrectResults([]);
    setWrongResult([]);
    setCountcorrect(0);
    setInputValue("");
  };

  useEffect(() => {
    if (time <= 30 && time !== 0 && disabled === false) {
      setTimeout(() => setTime((prevtime) => prevtime - 1), 1000);
    } else if (disabled) {
      setTime(30);
      setAnimation(null);
    } else if (time === 0) {
      setDisabled(true);
    }
    if (time <= 0) {
      setAnimation("scaleNummber 2s infinite");
    }
  }, [disabled, time]);

  useEffect(() => {
    setNewWord(word[randomWord]);
  }, []);

  return (
    <div className="App">
      <Container>
        <Typeracer
          newWord={newWord}
          inputValue={inputValue}
          setInputValue={setInputValue}
          disabled={disabled}
          time={time}
          animation={animation}
          handleInput={handleInput}
          handleStart={handleStart}
        />
      </Container>
      <Result
        correctResults={correctResults}
        wrongResult={wrongResult}
        countCorrect={countCorrect}
      />
    </div>
  );
}

export default App;
