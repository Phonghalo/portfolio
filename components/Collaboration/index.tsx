import { useTransform, useScroll, motion } from 'framer-motion';
import React, { useRef } from 'react';

export const Collaboration = ({container}:{container: React.MutableRefObject<HTMLDivElement | null>}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const extendedRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    container: container,
    target: targetRef,
    offset: ['start end', 'end end'],
  });
  const { scrollYProgress: scrollYProgressIncludingOverlap } = useScroll({
    container: container,
    target: extendedRef,
    offset: ['start end', 'end end'],
  });
  const scale = useTransform(scrollYProgressIncludingOverlap, [0.1, 0.4, 0.75, 1], [1, 2.5, 4.2, 1]);
  const x = useTransform(scrollYProgressIncludingOverlap, [0.1, 0.25, 0.75, 1], ['0vw', '-55vw', '-135vw', '-18vw']);
  const y = useTransform(scrollYProgressIncludingOverlap, [0.75, 1], ['0vh', '40vh']);
  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  const avatarGroupOpacity = useTransform(scrollYProgress, [0, 0.23, 0.25], [0, 0, 1]);

  const avatarGroupX = useTransform(
    scrollYProgress,
    [0, 0.23, 0.25, 0.4, 0.45, 0.6, 0.65],
    ['60px', '60px', '40px', '40px', '20px', '20px', '0px'],
  );

  const avatarOneScale = useTransform(scrollYProgress, [0, 0.23, 0.25, 0.85, 0.9], [0, 0, 1, 1, 0]);

  const avatarTwoScale = useTransform(scrollYProgress, [0, 0.4, 0.45], [0, 0, 1]);

  const avatarTwoOpacity = useTransform(scrollYProgressIncludingOverlap, [0.9999, 1], [1, 0]);

  const avatarThreeScale = useTransform(scrollYProgress, [0, 0.6, 0.65, 0.85, 0.9], [0, 0, 1, 1, 0]);

  return (
    <section ref={targetRef} className='relative z-10 mt-[-30vh] h-[300vh]'>
      <div ref={extendedRef} className='mb-[-120vh] h-[420vh] w-full'>
        <div className='sticky top-[10vh]'>
          <div className='flex justify-center'>
            <motion.div className='origin-top' style={{ scale, x, y }}>
              <motion.img className='h-auto max-h-none w-[70vw]' src='https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/277581125_1126870304833706_9126607721590738565_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFDmSGh2s5Ea4jE1ZP1hZSGbQfzy8ea6fptB_PLx5rp-gGUPdA19nBU9IQSvwiyjZsYarfm1o_P6O7nYm_cU4jN&_nc_ohc=JzG2Jm8NHrEQ7kNvgEQZrYx&_nc_ht=scontent.fhan17-1.fna&oh=00_AYBkduJdxOZ8g89p8abP2ABZfIx05of_aK8WhFKsuAEUZA&oe=66B8EB18' style={{ opacity }} />
              <motion.div
                className='absolute right-[10%] top-[1.5%] flex gap-2'
                style={{ opacity: avatarGroupOpacity, x: avatarGroupX }}
              >

                <motion.img
                  className='h-[1.5vw] w-[1.5vw] rounded-full border border-[#c82] object-cover'
                  src='https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/277581125_1126870304833706_9126607721590738565_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFDmSGh2s5Ea4jE1ZP1hZSGbQfzy8ea6fptB_PLx5rp-gGUPdA19nBU9IQSvwiyjZsYarfm1o_P6O7nYm_cU4jN&_nc_ohc=JzG2Jm8NHrEQ7kNvgEQZrYx&_nc_ht=scontent.fhan17-1.fna&oh=00_AYBkduJdxOZ8g89p8abP2ABZfIx05of_aK8WhFKsuAEUZA&oe=66B8EB18'
                  style={{ scale: avatarTwoScale, opacity: avatarTwoOpacity }}
                />
                <motion.img
                  className='h-[1.5vw] w-[1.5vw] rounded-full border border-[#f0f] object-cover'
                  src='https://unsplash.com/photos/7YVZYZeITc8/download?force=true&w=128&h=128'
                  style={{ scale: avatarThreeScale }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
