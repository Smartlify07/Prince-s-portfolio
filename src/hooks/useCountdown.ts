import { useEffect, useState } from 'react';
import {
  formatCountdown,
  getCycleRemaining,
  type Countdown,
} from '@/lib/countdown';

const HOUR_MS = 3_600_000;

/**
 * Counts down to `deadline`, then restarts the window every `cycleHours`
 * from that anchor instead of expiring at zero.
 */
export function useCountdown(
  deadline: string,
  cycleHours: number
): Countdown {
  const anchor = new Date(deadline).getTime();
  const cycleMs = cycleHours * HOUR_MS;
  const read = () =>
    formatCountdown(getCycleRemaining(Date.now(), anchor, cycleMs));

  const [remaining, setRemaining] = useState(read);

  useEffect(() => {
    const tick = () =>
      setRemaining(formatCountdown(getCycleRemaining(Date.now(), anchor, cycleMs)));

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [anchor, cycleMs]);

  return remaining;
}
