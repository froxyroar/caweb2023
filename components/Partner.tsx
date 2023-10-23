import React from "react";
import Image from "next/image";
import styles from "./Partner.module.css";
import { title } from "process";

const Partner = () => {
  const partners_list = [
    { src: "/partner/partner_img01.png", title:"", href: "/", },
    { src: "/partner/partner_img02.png", title:"", href: "/", },
    { src: "/partner/partner_img03.png", title:"", href: "/", },
    { src: "/partner/partner_img04.png", title:"", href: "/", },
    { src: "/partner/partner_img05.png", title:"", href: "/", },
    { src: "/partner/partner_img06.png", title:"", href: "/", },
    { src: "/partner/partner_img07.png", title:"", href: "/", },
    { src: "/partner/partner_img08.png", title:"", href: "/", },
    { src: "/partner/partner_img09.png", title:"", href: "/", },
    { src: "/partner/partner_img10.png", title:"", href: "/", },
  ];
  return (
    <div className={styles.partnerArea}>
      <div className="container mx-auto sm:px-4">
        <div className="flex flex-wrap ">
          <div className="lg:w-full pr-4 pl-4">
            <div className={styles.partnerWrap}>
              <ul className={styles.partnerWrapUl}>
                {partners_list.map((item, index) => (
                  <li key={index} className={styles.partnerWrapUlLi}>
                    <a href="">
                      <Image src={item.src} alt={title} width={130} height={130} className={styles.partnerWrapUlLiImg} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
