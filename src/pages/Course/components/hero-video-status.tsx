import SpeakerIcon from '@/../public/assets/images/course/speaker.svg';

type HeroVideoStatusProps = {
  muted: boolean;
  onToggle: () => void;
};

export function HeroVideoStatus({ muted, onToggle }: HeroVideoStatusProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="mt-[26px] flex cursor-pointer items-center gap-2"
    >
      <img src={SpeakerIcon} width={24} height={24} alt="" />
      <span className="font-inter text-[16px] leading-[19px] text-course-muted">
        Video is playing - click to {muted ? 'unmute' : 'mute'}
      </span>
    </button>
  );
}
