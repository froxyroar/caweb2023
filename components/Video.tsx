'use client'
import React, { useEffect, useRef, useState } from 'react';

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeRemaining = (countdown: number): Countdown => {
  const days = Math.floor(countdown / (3600 * 24));
  const hours = Math.floor((countdown % (3600 * 24)) / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = countdown % 60;

  return { days, hours, minutes, seconds };
};



// Set the target date to October 23, 2023, at 18:30 WIB (which is 11:30 UTC)
const targetDateUTC = new Date('2023-10-23T11:30:00Z');
const targetDateWIB = new Date(targetDateUTC.getTime() + 7 * 60 * 60 * 1000);

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [countdown, setCountdown] = useState<number>(
    Math.floor((targetDateWIB.getTime() - Date.now()) / 1000)
  );

  useEffect(() => {
    if (videoRef && videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const { days, hours, minutes } = calculateTimeRemaining(countdown);

  return (
    <div
      style={{
        width: '80%',
        margin: '6vh auto 0',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        ref={videoRef}
        style={{ width: '100%', borderRadius: '12px' }}
      >
        <source src="/test.mp4" type="video/mp4" />
      </video>
      <div
        style={{
          textAlign: 'center',
          padding: '10px',
          background: '#F6F2EC',
          color: '#5A592F',
          fontSize: '1.2em',
          border: 'px solid #57573F',
        }}
      >
        {`${days} days, ${hours} hours, ${minutes} minutes${days === 0 && hours === 0 && minutes === 0 ? `, ${countdown} seconds` : ''} left before the summit`}
      </div>
    </div>
  );  
  
}
