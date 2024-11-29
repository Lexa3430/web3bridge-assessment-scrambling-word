"use client"
import { useState } from 'react';
import ScrambledWord from '@/component/ScrambledWord';
import ScoreBoard from '@/component/ScoreBoard';
import Hint from '@/component/ Hint';
import { scrambleWord, getHint } from '@/utils/gameHelpers';
import Timer from '@/component/Timer';

const WORDS = ['nextjs', 'react', 'javascript', 'developer', 'frontend'];

const Home = () => {
  const [currentWord, setCurrentWord] = useState(WORDS[0]);
  const [scrambledWord, setScrambledWord] = useState(scrambleWord(WORDS[0]));
  const [guess, setGuess] = useState('');
  const [score, setScore] = useState(0);
  const [hint, setHint] = useState('');
  const [timeKey, setTimeKey] = useState(0);

  const handleInputChange = (e) => setGuess(e.target.value);

  const handleGuess = () => {
    if (guess.trim().toLowerCase() === currentWord.toLowerCase()) {
      const nextIndex = (WORDS.indexOf(currentWord) + 1) % WORDS.length;
      const nextWord = WORDS[nextIndex];
      setScore(score + 1);
      setCurrentWord(nextWord);
      setScrambledWord(scrambleWord(nextWord));
      setGuess('');
      setHint('');
    } else {
      alert('Incorrect guess, try again!');
    }
  };

  const handleTimeUp = () => {
    alert("Time is up! Moving to the next word.");
    const nextIndex = (WORDS.indexOf(currentWord) + 1) % WORDS.length;
    const nextWord = WORDS[nextIndex];
    setCurrentWord(nextWord);
    setScrambledWord(scrambleWord(nextWord));
    setGuess("");
    setHint("");
    setTimeKey((prevKey) => prevKey + 1);
  };

  const handleHint = () => setHint(getHint(currentWord));

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Word Scramble Game</h1>
      <ScrambledWord scrambledWord={scrambledWord} />
      <div className="mt-4">
        <input
          type="text"
          value={guess}
          onChange={handleInputChange}
          placeholder="Enter your guess"
          className="px-4 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          onClick={handleGuess}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit Guess
        </button>
        <button
          onClick={handleHint}
          className="ml-2 px-4 py-2 bg-gray-500 text-white rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Get Hint
        </button>
      </div>
      <Timer key={timeKey} initialTime={30} onTimeUp={handleTimeUp} />
      <ScoreBoard score={score} />
      {hint && <Hint hint={hint} />}
    </div>
  );
};

export default Home;
