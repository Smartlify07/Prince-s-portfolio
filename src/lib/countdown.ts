export type Countdown = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

const pad = (value: number) => String(value).padStart(2, '0');

/**
 * Rolling countdown: the window restarts every `cycleMs` from `anchorMs`,
 * so the timer never settles at 00:00:00 — it jumps back to a full cycle.
 */
export function getCycleRemaining(
  nowMs: number,
  anchorMs: number,
  cycleMs: number
): number {
  const elapsed = nowMs - anchorMs;

  if (elapsed <= 0) return cycleMs;

  const withinCycle = elapsed % cycleMs;

  return withinCycle === 0 ? cycleMs : cycleMs - withinCycle;
}

export function formatCountdown(remainingMs: number): Countdown {
  const totalSeconds = Math.floor(Math.max(remainingMs, 0) / 1000);

  return {
    days: pad(Math.floor(totalSeconds / 86_400)),
    hours: pad(Math.floor((totalSeconds % 86_400) / 3_600)),
    minutes: pad(Math.floor((totalSeconds % 3_600) / 60)),
    seconds: pad(totalSeconds % 60),
  };
}
