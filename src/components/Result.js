import React from "react";

const Results = ({ correctResults, wrongResult, countCorrect }) => {
  //const { correctResults, wrongResult, countCorrect } = props;

  return (
    <div className="results">
      <div className="title">
        <p>Correct Answers: {countCorrect}</p>
      </div>
      <div className="resultsContainer">
        <div className="correctResults"></div>
        {correctResults.map((correctWord, index) => (
          <div key={index} className="row">
            <p>{correctWord}</p>
          </div>
        ))}
      </div>
      <div className="wrongResults">
        <p>Wrong</p>
      </div>
    </div>
  );
};

export default Results;
