'use client';
import { useEffect, useRef } from 'react';

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef && videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      ref={videoRef}
      style={{ width: '100%' }}
    >
      <source src="/test.mp4" type="video/mp4" />
    </video>
  );
}