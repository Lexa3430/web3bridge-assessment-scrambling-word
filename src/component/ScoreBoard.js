const ScoreBoard = ({ score }) => {
    return (
      <p className="mt-4 text-lg font-medium text-black">
        Your Score: <span className="font-bold">{score}</span>
      </p>
    );
  };
  
  export default ScoreBoard;
  