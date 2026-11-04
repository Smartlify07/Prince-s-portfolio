import { useEffect, useState } from 'react';

export type Countdown = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  isExpired: boolean;
};

const pad = (value: number) => String(value).padStart(2, '0');

const getRemaining = (deadline: number): Countdown => {
  const remainingMs = Math.max(deadline - Date.now(), 0);
  const totalSeconds = Math.floor(remainingMs / 1000);

  return {
    days: pad(Math.floor(totalSeconds / 86_400)),
    hours: pad(Math.floor((totalSeconds % 86_400) / 3_600)),
    minutes: pad(Math.floor((totalSeconds % 3_600) / 60)),
    seconds: pad(totalSeconds % 60),
    isExpired: remainingMs === 0,
  };
};

export function useCountdown(deadline: string): Countdown {
  const target = new Date(deadline).getTime();
  const [remaining, setRemaining] = useState(() => getRemaining(target));

  useEffect(() => {
    setRemaining(getRemaining(target));
    const interval = setInterval(() => setRemaining(getRemaining(target)), 1000);
    return () => clearInterval(interval);
  }, [target]);

  return remaining;
}
