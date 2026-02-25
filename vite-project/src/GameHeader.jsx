import { useEffect, useState } from "react";

export default function GameHeader({ gameOver, foundBombs}) {
  const [timeLeft, setTimeLeft] = useState(3 * 60);

  useEffect(() => {
    if (gameOver) return;

    if (timeLeft <= 0) {
      const timeout = setTimeout(() => location.reload(), 2500);
      return () => clearTimeout(timeout);
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, gameOver]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className='flex justify-around h-30'>
      <div className='flex flex-col text-white border-2 shadow'>
        <p className='border-b-2 p-4'>💣 Bomb Remaining</p>
         <h1 className="place-content-center align-middle text-5xl text-amber-200">
          {5-foundBombs.length}
        </h1>
      </div>

      <div className='flex flex-col text-white border-2 shadow'>
        <p className='border-b-2 p-4'>⏱️ Time Remaining</p>
        <h1 className="place-content-center align-middle text-5xl text-amber-200">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h1>
      </div>

      <div className='flex flex-col text-white border-2 shadow'>
        <p className='border-b-2 p-4'>🎬 Board Size</p>
         <h1 className="place-content-center align-middle text-5xl text-amber-200">
          10 x 10 </h1>
      </div>
    </div>
  );
}