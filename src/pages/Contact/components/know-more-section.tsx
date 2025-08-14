import Behance from '/assets/images/contact/Behance.svg';
import Instagram from '/assets/images/contact/Instagram.svg';
import Facebook from '/assets/images/contact/Facebook.svg';
import Twitter from '/assets/images/contact/Twitter.svg';
import Dribbble from '/assets/images/contact/Dribbble.svg';
import LinkedIn from '/assets/images/contact/LinkedIn.svg';
import { Link } from 'react-router';

export const KnowMoreSection = () => {
  return (
    <section className="py-6 px-4 rounded-4xl bg-[#111119]/80 z-[50] know-more-section font-geist grid gap-12">
      <header className="grid gap-4">
        <h1 className="text-[40px]/[56px] font-medium text-center gradient-text -tracking-smaller md:w-6/12 md:justify-self-center">
          Oh! You just want to know more about me? Fantastic!
        </h1>
        <div className="text-center text-sm/[150%] text-grey-9">
          You may read all{' '}
          <Link to={'/about'}>
            <span className="text-[#EDEDEB] inline text-drop-shadow font-medium drop-shadow-2xl">
              About Me
            </span>{' '}
          </Link>
          or check out{' '}
          <Link to={'/services'}>
            <span className="text-[#EDEDEB] inline text-drop-shadow font-medium drop-shadow-2xl">
              My Services{' '}
            </span>
          </Link>
          and, please, socialize with me. I love meeting new people!
        </div>
      </header>

      <div className="grid gap-4 grid-cols-2 place-items-center md:grid-cols-3">
        <SocialIcon
          icon={Dribbble}
          alt={'dribble-icon'}
          text="Explore my fun zone."
        />
        <SocialIcon
          icon={Behance}
          alt={'behance-icon'}
          text="Witness my creations in action."
        />
        <SocialIcon
          icon={Facebook}
          alt={'facebook-icon'}
          text="Greetings to the Community!"
        />
        <SocialIcon
          icon={Twitter}
          alt={'twitter-icon'}
          text="Catch my frisky side!"
        />
        <SocialIcon
          icon={LinkedIn}
          alt={'linkedin-icon'}
          text="Greetings to the Community!"
        />
        <SocialIcon
          icon={Instagram}
          alt={'instagram-icon'}
          text="See my creations unfold."
        />
      </div>
    </section>
  );
};

const SocialIcon = ({
  icon,
  alt,
  text,
}: {
  icon: string;
  text: string;
  alt: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-3xl transition-colors hover:bg-[#1F1F2B]">
      <img src={icon} alt={alt} className="size-28" />
      <p className="text-grey-9 text-center -tracking-[0.42px] text-sm/[150%]">
        {text}
      </p>
    </div>
  );
};
