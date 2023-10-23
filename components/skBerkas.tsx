import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Skberkas = () => {
  return (
    <div className="container h-96" id="skberkas">
      <div className="flex justify-center text-[22px] md:mb-14 lg:mb-16" style={{color:"#231f20"}}>
        REQUIEREMENT
      </div>
      <div className="flex h-full flex-row items-center">
        <div
          className="w-1/2 justify-center items-center space-y-10 -mt-10 p-1 lg:space-y-20 "
          style={{ backgroundColor: "ba2025" }}
        >
          <h2
            className="text-[21px] font-bold text-center"
            style={{ color: "#231f20" }}
          >
            Terms and Conditions
          </h2>
          <ol
            className="list-decimal ml-10 space-y-2 mx-auto text-base leading-relaxed text-[19px] lg:ml-20 lg:text-[21px]"
            style={{ color: "#231f20" }}
          >
            <li className="">Fear to the One God</li>
            <li className="">An Active Student of Telkom University</li>
            <li className="">Student of FTE and FRI Batch 2021,2022, 2023</li>
            <li className="">
              Have Motivation and High Spirit in Learning
            </li>
          </ol>
        </div>
        <div className="w-1/2 " >
          <div className="join join-vertical w-full">
            <div
              className="collapse collapse-arrow join-item border border-base-300"
              style={{ backgroundColor: "#ba2025" }}
            >
              <input type="radio" name="my-accordion-4" />
              <div
                className="collapse-title text-[17px] font-medium"
                style={{ color: "#f4f4f4" }}
              >
                Creative CV
              </div>
              <div
                className="collapse-content"
                style={{ backgroundColor: "#f4f4f4", color: "#231f20" }}
              >
                <p className="mt-5">
                  Creative Curriculum Vitae (CV) reflecting your educational
                  background, experience, and skills.
                </p>
              </div>
            </div>
            <div
              className="collapse collapse-arrow join-item border border-base-300"
              style={{ backgroundColor: "#ba2025" }}
            >
              <input type="radio" name="my-accordion-4" />
              <div
                className="collapse-title text-[17px] font-medium"
                style={{ color: "#f4f4f4" }}
              >
                Full Body Photo
              </div>
              <div
                className="collapse-content"
                style={{ backgroundColor: "#f4f4f4", color: "#231f20" }}
              >
                <p className="mt-5">
                  If wearing a hijab, use a square scarf, and if not, tie your
                  hair neatly.
                </p>
              </div>
            </div>
            <div
              className="collapse collapse-arrow join-item border border-base-300"
              style={{ backgroundColor: "#ba2025" }}
            >
              <input type="radio" name="my-accordion-4" />
              <div
                className="collapse-title text-[17px] font-medium"
                style={{ color: "#f4f4f4" }}
              >
                Self Description
              </div>
              <div
                className="collapse-content"
                style={{ backgroundColor: "#f4f4f4", color: "#231f20" }}
              >
                <p className="mt-5">
                  Document containing a description of yourself, including
                  hobbies, interests, or other personal aspects you'd like to
                  share.
                </p>
              </div>
            </div>
            <div
              className="collapse collapse-arrow join-item border border-base-300"
              style={{ backgroundColor: "#ba2025" }}
            >
              <input type="radio" name="my-accordion-4" />
              <div
                className="collapse-title text-[17px] font-medium"
                style={{ color: "#f4f4f4" }}
              >
                Vision, Mission, and Motivation
              </div>
              <div
                className="collapse-content"
                style={{ backgroundColor: "#f4f4f4", color: "#231f20" }}
              >
                <p className="mt-5">
                  Your vision, mission, and motivation for joining the Cyber
                  Academy.
                </p>
              </div>
            </div>
            <div
              className="collapse collapse-arrow join-item border border-base-300"
              style={{ backgroundColor: "#ba2025" }}
            >
              <input type="radio" name="my-accordion-4" />
              <div
                className="collapse-title text-[17px] font-medium"
                style={{ color: "#f4f4f4" }}
              >
                Essay
              </div>
              <div
                className="collapse-content"
                style={{ backgroundColor: "#f4f4f4", color: "#231f20" }}
              >
                <p className="mt-5">Essay on one of the following topics:</p>
                <ol className="list-decimal text-gray-800 text-2 mt-2 ml-4">
                  <li>Cyber Physical System</li>
                  <li>Embedded System</li>
                  <li>Internet of Things</li>
                  <li>Web Development</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skberkas;
