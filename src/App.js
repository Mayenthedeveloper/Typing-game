import "./App.css";
import React, { useState, useEffect } from "react";
import Words from "./components/Words";
import Container from "./components/Container";
import Typeracer from "./components/Typeracer";

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
        />
      </Container>
    </div>
  );
}

export default App;
