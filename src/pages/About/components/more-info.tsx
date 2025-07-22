import Star from '@/../public/assets/icons/Star Icon.svg';
import Headphones from '@/../public/assets/icons/Headphones Icon.svg';
import Suitcase from '@/../public/assets/icons/Suitcase Icon.svg';
import { SpotifyEmbed } from './spotify-embed';

export const MoreInfo = () => {
  return (
    <section className="px-4 font-geist w-full border flex flex-col gap-2">
      <div className="flex items-center gap-4 w-full">
        <h1 className="text-grey-9 text-sm font-medium -tracking-smallest">
          I'M ALSO
        </h1>
        <hr className="text-grey-4 w-9/12 md:w-10/12 border border-grey-4/60" />
      </div>

      <div className="flex items-center text-grey-opaque gap-4">
        <img src={Star} />
        <p className="text-sm font-normal -tracking-smallest">
          A versatile designer who utilizes AI to create, innovative design
          systems, develop AI agents, and bring ideas to life.
        </p>
      </div>
      <div className="flex items-center text-grey-opaque gap-4">
        <img src={Suitcase} />
        <p className="text-sm font-normal -tracking-smallest">
          Open to remote job opportunities -{' '}
          <span className="text-grey-9 italic">Contract Or Full Time</span>
        </p>
      </div>
      <div className="flex items-center text-grey-opaque gap-4">
        <img src={Headphones} />
        <p className="text-sm font-normal -tracking-smallest">
          Shipping while enjoying some tunes
        </p>
      </div>
      <SpotifyEmbed />
    </section>
  );
};
