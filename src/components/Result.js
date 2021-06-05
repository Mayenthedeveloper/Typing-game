import React from "react";

const Results = ({ correctResults, wrongResult, countCorrect }) => {
  //const { correctResults, wrongResult, countCorrect } = props;

  return (
    <div className="results">
      <div className="title">
        <p>Correct Answers: {countCorrect}</p>
      </div>
      <div className="resultsContainer">
        <div className="correctResults">
          {correctResults.map((correctWord, index) => (
            <div key={index} className="row">
              <p>{correctWord}</p>
            </div>
          ))}
        </div>
        <div className="wrongResults">
          {wrongResult.map((wrongWord, index) => (
            <div key={index} className="row">
              <p>{wrongWord}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
