"use client";
import React, { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import DealDetial from "./dealpage/DealDetial";
import ImageSlider from "./ImageSlider";
import PargrahData from "./dealpage/PargrahData";
import { nunito_Sans } from "../ui/fonts";

const DealContent = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);
  return (
    <div className="md:col-span-7 border-gray-300 rounded-lg">
      <div className="flex md:items-end justify-between md:flex-row flex-col items-start gap-2 md:mb-0 min-h-11">
        <div className="flex mt-2 ">
          <div className="flex items-center">
            <h5
              style={{
                font: "Nunito Sans",
                marginBottom: "1rem",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "1.1rem",
                textTransform: "capitalize",
                color: "rgb(0, 103, 225)",
              }}
            >
              Home
            </h5>
            <span className="ml-1 text-gray-400">
              <MdNavigateNext
                style={{
                  marginBottom: "1rem",
                }}
              />
            </span>
            <h5
              style={{
                font: "Nunito Sans",
                marginBottom: "1rem",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "1.1rem",
                textTransform: "capitalize",
                color: "rgb(0, 103, 225)",
              }}
            >
              Amazone
            </h5>
            <span className="ml-1 text-gray-400">
              <MdNavigateNext
                style={{
                  marginBottom: "1rem",
                }}
              />
            </span>
          </div>
          <div>
            <div className="flex flex-col items-center mr-3">
              <h2
                style={{
                  font: "Nunito Sans",
                  marginBottom: "1rem",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "18px",
                  textTransform: "capitalize",
                  color: "rgb(90, 90, 90)",
                }}
                className=" sm:ml-2 md:ml-4 lg:ml-1 xl:ml-8"
              >
                {isMobile
                  ? "Bebeconfort Soko C"
                  : "Bebeconfort Soko Compact Stroller 0-15kg Shadow"}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-full md:w-2/5">
          <ImageSlider />
        </div>
        <div className="w-full md:w-3/5 xl:ml-4">
          <DealDetial />
          <PargrahData />
        </div>
      </div>
    </div>
  );
};

export default DealContent;
