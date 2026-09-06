import { useEffect, RefObject } from 'react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export const useTransitionReveal = (
  ref: RefObject<HTMLElement>,
  start: string = 'top 80%'
) => {
  useEffect(() => {
    if (!ref.current) return;

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start,
      onEnter: () => ref.current?.classList.add('is-active'),
    });

    return () => trigger.kill();
  }, [ref, start]);
};