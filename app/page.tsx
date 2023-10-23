import VideoPlayer from "@/components/Videoplayer";
import About from "@/components/About";
import Course from "@/components/Course";
import Benefit from "@/components/Benefit";
import SdanK from "@/components/SyaratKetentuan";
import Berkas from "@/components/Berkas";
import Footer from "@/components/Footer";
import NavHome from "@/components/navbarHome";
import React from "react";
import Skberkas from "@/components/skBerkas";
import Partner from "@/components/Partner";

export default function Home() {

  return (
    <main>
      <div className="sticky top-0 z-50">
      <NavHome />
      </div>
      <div className="mb-32">
        <VideoPlayer />
      </div>
      <div className="mb-32">
        <About />
      </div>
      <div className="mb-32">
        <Benefit />
      </div>
      <div className="mb-32 md:mt-20 md:mb-44">
        <Course />
      </div>
      <div className=" md:hidden">
        <SdanK />
      </div>
      <div className=" md:hidden">
        <Berkas />
      </div>
      <div className="hidden md:block md:mb-52 md:mt-20">
        <Skberkas />
      </div>
      <div className="mb-32 mt-32">
        <Partner />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
