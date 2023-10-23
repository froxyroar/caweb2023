import React from "react";
import Image from "next/image";
import styles from "./Partner.module.css";

const Partner = () => {
  const partners_list = [
    { src: "/partner/hmtt.png", href: "https://www.instagram.com/hmtt_telco/" },
    { src: "/partner/labrl.png", href: "https://www.instagram.com/rangkaianlistriklab/" },
    { src: "/partner/imv.png", href: "https://www.instagram.com/imv.laboratory/" },
    { src: "/partner/embun.png", href: "https://www.instagram.com/embununitel/" },
    { src: "/partner/Antenna.png", href: "https://www.instagram.com/antena.lab/" },
    { src: "/partner/elkom.jpg", href: "https://www.instagram.com/elkomlaboratory/" },
    { src: "/partner/daskom.png", href: "https://www.instagram.com/telu.daskom/" },
    { src: "/partner/tekdig.jpg", href: "https://www.instagram.com/tekdig.telu/" },
    { src: "/partner/sko.png", href: "https://www.instagram.com/opticomm.laboratory/" },
    { src: "/partner/dastran.png", href: "https://www.instagram.com/dastranlaboratory/" },
    { src: "/partner/dsp.jpg", href: "https://www.instagram.com/dsp.laboratory/" },
    { src: "/partner/mbc.png", href: "https://www.instagram.com/mbclab/" },
    { src: "/partner/sisjar.jpg", href: "https://www.instagram.com/sisjarlab/" },
    { src: "/partner/adaptive.png", href: "https://www.instagram.com/adaptivenetlab/" },
    { src: "/partner/sea.png", href: "https://www.instagram.com/sea.laboratory/" },
    { src: "/partner/Nanosatellite.png", href: "https://www.instagram.com/isatellitesociety/" },
    { src: "/partner/aicoms.png", href: "https://www.instagram.com/aicoms.telkomuniv/" },
    { src: "/partner/elektronika.jpg", href: "https://www.instagram.com/electronicslaboratory/" },
    { src: "/partner/uPCI.png", href: "https://www.instagram.com/upcilab/" },
    { src: "/partner/mobcomm.png", href: "https://www.instagram.com/mobilecommlaboratory/" },
  ];
  return (
    <div className={styles.partnerArea} id="partner">
      <div className="container mx-auto sm:px-4">
        <h1
          className="flex justify-center text-3xl font-bold mb-16 md:text lg:text"
          style={{ color: "#231f20" }}
        >
         ❯ Our Partner ❮
        </h1>
        <div className="md:hidden">
          <div className="flex flex-wrap ">
            <div className="pr-4 pl-4">
              <div className={styles.partnerWrap}>
                <ul className={styles.partnerWrapUl}>
                  {partners_list.map((item, index) => (
                    <li key={index} className={styles.partnerWrapUlLi}>
                      <a href={item.href}>
                        <Image
                          src={item.src}
                          alt={"partner"}
                          width={70}
                          height={70}
                          className={styles.partnerWrapUlLiImg}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block lg:hidden">
          <div className="flex flex-wrap ">
            <div className="w-full pr-4 pl-4">
              <div className={styles.partnerWrap}>
                <ul className={styles.partnerWrapUl}>
                  {partners_list.map((item, index) => (
                    <li key={index} className={styles.partnerWrapUlLi}>
                      <a href={item.href}>
                        <Image
                          src={item.src}
                          alt={"partner"}
                          width={100}
                          height={100}
                          className={styles.partnerWrapUlLiImg}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex flex-wrap">
            <div className="w-full pr-4 pl-4">
              <div className={styles.partnerWrap}>
                <ul className={styles.partnerWrapUl}>
                  {partners_list.map((item, index) => (
                    <li key={index} className={styles.partnerWrapUlLi}>
                      <a href={item.href}>
                        <Image
                          src={item.src}
                          alt={"partner"}
                          width={110}
                          height={110}
                          className={styles.partnerWrapUlLiImg}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
