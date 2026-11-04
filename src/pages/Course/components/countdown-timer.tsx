import { useCountdown } from '@/hooks/useCountdown';

type CountdownTimerProps = {
  deadline: string;
};

export function CountdownTimer({ deadline }: CountdownTimerProps) {
  const { days, hours, minutes, seconds } = useCountdown(deadline);

  const units = [
    { value: days, label: 'DAYS' },
    { value: hours, label: 'HOURS' },
    { value: minutes, label: 'MINS' },
    { value: seconds, label: 'SECS' },
  ];

  return (
    <div className="flex w-full max-w-[322px] items-center justify-center gap-[10px] sm:gap-[14px]">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="course-display flex h-[76px] min-w-0 flex-1 flex-col items-center rounded-[16px] bg-course-ink pt-[5px] pb-[11px] text-white sm:w-[70px] sm:flex-none"
        >
          <span className="font-bricolage text-[36px] leading-[43px] font-bold">
            {unit.value}
          </span>
          <span className="font-inter text-[14px] leading-[17px] font-normal">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
