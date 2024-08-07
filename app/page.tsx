'use client';
import { useEffect, useRef } from 'react';

import { subtitle, title } from '@/components/primitives';
import { Collaboration } from '@/components/Collaboration';
import { SamePage } from '@/components/SamePage';
import { StreamlinedExperience } from '@/components/StreamlinedExperience';
import { Features } from '@/components/Features';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = ev;

      heroRef.current.style.setProperty('--x', `${clientX}px`);
      heroRef.current.style.setProperty('--y', `${clientY}px`);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <>
      <section ref={heroRef} className="hero">
        <div className=" z-10 w-full overflow-x-clip">
          <Collaboration container={heroRef} />
          <SamePage container={heroRef}  />
          <StreamlinedExperience container={heroRef}  />
          <Features container={heroRef}  />
          {/*<MoreFeatures />*/}
          {/*<NoLockin />*/}
        </div>
      </section>
    </>

  )
    ;
}
