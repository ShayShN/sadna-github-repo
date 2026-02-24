import { useEffect, useState } from "react";

export default function GameHeader() {
  const [timeLeft, setTimeLeft] = useState(3 * 60)

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <header>
      <h1 className="text-amber-50">
         {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </h1>
    </header>
  );
}