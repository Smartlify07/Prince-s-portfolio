import Dot from '@/../public/assets/images/course/dot-white.svg';
import Warning from '@/../public/assets/images/course/warning-alert.svg';

export function CourseAlertBar() {
  return (
    <div className="flex w-full justify-center bg-course-ink px-5 pt-6 pb-[19px]">
      <div className="flex flex-wrap items-center justify-center gap-[10px] font-inter text-[14px] leading-[17px] font-medium text-white">
        <img src={Warning} width={16} height={16} alt="" />
        <p>
          Only <span className="text-course-mint">5 of 30 spots</span> remaining
        </p>
        <img src={Dot} width={8} height={8} alt="" />
        <p>UI/UX Design + Remote Job Training</p>
      </div>
    </div>
  );
}
