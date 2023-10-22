"use client"
import React, { useEffect, useRef, useState, Suspense } from "react";
import { useGlobalContext } from "@/app/context/pendaftar";
import RegistrationButton from "./ui/registration-button";

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

const targetDateUTC = new Date("2023-10-23T11:30:00Z");
const targetDateWIB = new Date(targetDateUTC.getTime() + 7 * 60 * 60 * 1000);

const Video: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [countdown, setCountdown] = useState<number>(Math.floor((targetDateWIB.getTime() - Date.now()) / 1000));
  const { participantsLeft, setParticipantsLeft } = useGlobalContext();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://apicyberacademy.cpsrg.org/api/academy-count");
        const data = await response.json();
        const remainingQuota = data.remaining_quota;
        const participants = remainingQuota;
        setParticipantsLeft(participants);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 1000);
    return () => clearInterval(interval);
  }, []);

  const { days, hours, minutes, seconds } = calculateTimeRemaining(countdown);

  const daysstyle = { "--value": days } as React.CSSProperties;
  const hoursstyle = { "--value": hours } as React.CSSProperties;
  const minutesstyle = { "--value": minutes } as React.CSSProperties;
  const secondsstyle = { "--value": seconds } as React.CSSProperties;

  const participantsstyle = { "--value": participantsLeft } as React.CSSProperties;

  return (
    <div>
      <div style={{ width: "82%", margin: "2vh auto 0", borderRadius: "12px", overflow: "hidden", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }}>
        <video autoPlay loop muted playsInline ref={videoRef} style={{ width: "100%", borderRadius: "12px" }}>
          <source src="/teaser.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="flex justify-center items-center mt-5">
        <div className="rounded-lg p-5">
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col w-16 md:w-24 p-3 gap-3 text-center items-center justify-center font-mono bg-neutral rounded-box text-neutral-content" style={{ background: "#f8cdce", color: "#231f20" }}>
              <span className="countdown font-mono text-5xl">
                <Suspense>
                  <span id="counterElement" style={daysstyle}></span>
                </Suspense>
              </span>
              days
            </div>
            <div className="flex flex-col w-16 md:w-24 p-3 gap-3 text-center items-center justify-center font-mono bg-neutral rounded-box text-neutral-content" style={{ background: "#f8cdce", color: "#231f20" }}>
              <span className="countdown font-mono text-5xl">
                <Suspense>
                  <span id="counterElement" style={hoursstyle}></span>
                </Suspense>
              </span>
              hours
            </div>
            <div className="flex flex-col w-16 md:w-24 p-3 gap-3 text-center items-center justify-center font-mono bg-neutral rounded-box text-neutral-content" style={{ background: "#f8cdce", color: "#231f20" }}>
              <span className="countdown font-mono text-5xl">
                <Suspense>
                  <span id="counterElement" style={minutesstyle}></span>
                </Suspense>
              </span>
              min
            </div>
            <div className="flex flex-col w-20 md:w-24 p-3 gap-3 text-center items-center justify-center font-mono bg-neutral rounded-box text-neutral-content" style={{ background: "#f8cdce", color: "#231f20" }}>
              <span className="countdown font-mono text-5xl">
                <Suspense>
                  <span id="counterElement" style={secondsstyle}></span>
                </Suspense>
              </span>
              sec
            </div>
            <div className="hidden md:flex flex-col w-60 p-3 gap-3 text-center items-center justify-center font-mono bg-neutral rounded-box text-neutral-content" style={{ background: "#f8cdce", color: "#231f20" }}>
              <span className="countdown font-mono text-4xl">
                <span id="counterElement" style={participantsstyle}></span>
              </span>
              Participants left
            </div>
          </div>
          <div className="md:hidden grid grid-flow-row gap-5 text-center auto-rows-max justify-center mt-8" style={{ color: "#231f20" }}>
            <div>
              <span className="countdown font-mono text-4xl">
                <span id="counterElement" style={participantsstyle}></span>
              </span>
              Participants left
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center md:mt-20">
        <p className="text-center text-lg md:text-xl lg:text-2xl" style={{ color: "#231f20" }}>
          What are you still waiting for?
        </p>
        <p className="text-center text-lg md:text-xl lg:text-2xl mb-5" style={{ color: "#231f20" }}>
          Start Your Journey Now!
        </p>
        <RegistrationButton />
      </div>
    </div>
  );
};

export default Video;
