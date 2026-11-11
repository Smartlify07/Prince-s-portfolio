import WarningIcon from '@/../public/assets/images/course/warning.svg';
import {
  COURSE_PRICE,
  REGISTRATION_DEADLINE,
  REGISTRATION_WINDOW_HOURS,
} from '../course.constants';
import { CountdownTimer } from './countdown-timer';
import { CourseCta } from './course-cta';

export function RegistrationCard() {
  return (
    <div className="relative flex flex-col items-center gap-5 rounded-[30px] border border-course-ink bg-white px-5 pt-[50px] pb-[30px] sm:px-[51px]">
      <div className="flex w-[332px] max-w-full flex-col items-center text-center">
        <p className="font-inter text-[18px] leading-[22px] font-normal text-course-muted">
          One-time investment
        </p>
        <p className="course-display font-bricolage text-[56px] leading-[65px] font-bold text-course-ink sm:text-[68px]">
          <span className="line-through">N</span>{COURSE_PRICE}
        </p>
      </div>

      <div className="flex items-center justify-center gap-[10px] rounded-[24px] border border-course-ink bg-course-peach px-4 py-[10px]">
        <img src={WarningIcon} width={16} height={16} alt="" />
        <p className="text-center font-inter text-[13px] leading-5 font-semibold text-course-ink">
          Only 5 of 30 spots remaining
        </p>
      </div>

      <p className="text-center font-inter text-[14px] leading-[17px] font-medium tracking-[0.7px] text-course-muted">
        YOUR REGISTRATION WINDOW CLOSES IN
      </p>

      <CountdownTimer
        deadline={REGISTRATION_DEADLINE}
        windowHours={REGISTRATION_WINDOW_HOURS}
      />

      <CourseCta>Register Now</CourseCta>
    </div>
  );
}
