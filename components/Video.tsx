"use client";
import React, { useEffect, useRef, useState } from "react";

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
const targetDateUTC = new Date("2023-10-23T11:30:00Z");
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
      setCountdown((prevCountdown) =>
        prevCountdown > 0 ? prevCountdown - 1 : 0
      );
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const { days, hours, minutes } = calculateTimeRemaining(countdown);

  return (
    <div>
      <div
        className="md:hidden"
        style={{
          width: "90%",
          margin: "6vh auto 0",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          ref={videoRef}
          style={{ width: "100%", borderRadius: "12px" }}
        >
          <source src="/teaser.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="grid grid-flow-col gap-5 mt-10 justify-center md:hidden">
        <div
          className="flex flex-col w-20 p-3 gap-3 text-center items-center justify-center font-mono bg-neutral rounded-box  text-neutral-content"
          style={{ background: "#f8cdce" }}
        >
          <span className="text-[30px]" style={{ color: "#231f20" }}>
            {days}
          </span>
          <span className="text-[15px]" style={{ color: "#231f20" }}>
            Days
          </span>
        </div>
        <div
          className="flex flex-col w-20 p-3 gap-3 text-center items-center justify-center font-mono bg-neutral rounded-box  text-neutral-content"
          style={{ background: "#f8cdce" }}
        >
          <span className="text-[30px]" style={{ color: "#231f20" }}>
            {hours}
          </span>
          <span className="text-[15px]" style={{ color: "#231f20" }}>
            Hours
          </span>
        </div>
        <div
          className="flex flex-col w-20 p-3 gap-3 text-center items-center justify-center font-mono bg-neutral rounded-box  text-neutral-content"
          style={{ background: "#f8cdce" }}
        >
          <span className="text-[30px]" style={{ color: "#231f20" }}>
            {minutes}
          </span>
          <span className="text-[15px]" style={{ color: "#231f20" }}>
            Minutes
          </span>
        </div>
      </div>
      <p className="flex justify-center mt-12 text-[20px] md:hidden">BEFORE SUMMIT</p>
      <div
        className="hidden md:block lg:hidden"
        style={{
          width: "90%",
          margin: "6vh auto 0",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          ref={videoRef}
          style={{ width: "100%", borderRadius: "12px" }}
        >
          <source src="/teaser.mp4" type="video/mp4" />
        </video>
        <div
          style={{
            textAlign: "center",
            padding: "10px",
            color: "#5A592F",
            fontSize: "1.43em",
            border: "px solid #57573F",
          }}
        >
          {`${days} days, ${hours} hours, ${minutes} minutes${
            days === 0 && hours === 0 && minutes === 0
              ? `, ${countdown} seconds`
              : ""
          } left before the summit`}
        </div>
      </div>
      <div
        className="hidden lg:block"
        style={{
          width: "80%",
          margin: "6vh auto 0",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          ref={videoRef}
          style={{ width: "100%", borderRadius: "12px" }}
        >
          <source src="/teaser.mp4" type="video/mp4" />
        </video>
        <div
          style={{
            textAlign: "center",
            padding: "10px",
            color: "#5A592F",
            fontSize: "1.65em",
            border: "px solid #57573F",
          }}
        >
          {`${days} days, ${hours} hours, ${minutes} minutes${
            days === 0 && hours === 0 && minutes === 0
              ? `, ${countdown} seconds`
              : ""
          } left before the summit`}
        </div>
      </div>
    </div>
  );
}
