const ScrambledWord = ({ scrambledWord }) => {
    return (
      <h2 className="text-2xl font-bold text-gray-800">
        Guess the word: <span className="text-black text-4xl font-bold">{scrambledWord}</span>
      </h2>
    );
  };
  
  export default ScrambledWord;
  