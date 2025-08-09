import Headphones from '@/../public/assets/icons/Headphones Icon.svg';

import { useEffect, useState } from 'react';
type SpotifyTrack = {
  song: string;
  artist: string;
  album: string;
  image: string;
  albumArt: string;
  link: string;
  playing: boolean;
};
export const SpotifyEmbed = () => {
  const [track, setTrack] = useState<SpotifyTrack | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCurrentTrack = async () => {
      try {
        const res = await fetch(
          'https://ezekiels-portfolio-backend.onrender.com/api/spotify-currently-playing',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setTrack(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching current track:', error);
        setLoading(false);
      }
    };
    fetchCurrentTrack();
    window.addEventListener('focus', fetchCurrentTrack);
    window.addEventListener('visibilitychange', fetchCurrentTrack);

    return () => {
      window.removeEventListener('focus', fetchCurrentTrack);
    };
  }, []);

  const trackDisplay = track?.playing
    ? track.song + ' - ' + track.artist
    : 'No track playing';

  return (
    <div className="flex flex-col md:flex-row md:items-center text-grey-opaque gap-2">
      <div className="flex items-center gap-4">
        <img src={Headphones} />
        <p className="text-sm font-normal flex items-center gap-2 -tracking-smallest">
          Shipping while enjoying some tunes
          <span className="spotify-text text-sm truncate overflow-ellipsis w-[150px] md:w-auto font-inter-tight italic">
            {loading && 'Getting track...'} {track && trackDisplay}
          </span>
        </p>
      </div>
    </div>
  );
};
