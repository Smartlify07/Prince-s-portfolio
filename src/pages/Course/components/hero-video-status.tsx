import SpeakerIcon from '@/../public/assets/images/course/speaker.svg';

export function HeroVideoStatus() {
  return (
    <div className="mt-[26px] flex items-center gap-2">
      <img src={SpeakerIcon} width={24} height={24} alt="" />
      <p className="font-inter text-[16px] leading-[19px] text-course-muted">
        Video is playing - click to unmute
      </p>
    </div>
  );
}
