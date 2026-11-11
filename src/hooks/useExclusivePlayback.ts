import { useCallback, useRef, type RefCallback } from 'react';

/**
 * Keeps a group of media elements from playing at the same time: whichever
 * element starts playing pauses every other registered element.
 *
 * Usage: pass `register` as the `ref` of each media element and call
 * `pauseOthers` with the element that just started playing.
 */
export function useExclusivePlayback() {
  const media = useRef(new Set<HTMLMediaElement>());

  const register: RefCallback<HTMLMediaElement> = useCallback((element) => {
    if (!element) return;

    media.current.add(element);

    return () => {
      media.current.delete(element);
    };
  }, []);

  const pauseOthers = useCallback((current: HTMLMediaElement) => {
    media.current.forEach((element) => {
      if (element !== current) element.pause();
    });
  }, []);

  return { register, pauseOthers };
}
