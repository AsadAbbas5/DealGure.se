"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import DealPage from "./dealpage/DealPage";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import DealLikeModule from "./dealpage/DealLikeModule";
import CommentModules from "./dealpage/CommentModules";

const ImageSlider = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [
    {
      src: "https://dealguru.se/admin/uploads/664afa3316c73-51knxjro3lacsl1500.jpg",
    },
    {
      src: "https://dealguru.se/admin/uploads/664afa332c4be-61ejxgnctplacsl1500.jpg",
    },
    {
      src: "https://dealguru.se/admin/uploads/664afa335611a-61nzet6vc6lacsl1500.jpg",
    },
    {
      src: "https://dealguru.se/admin/uploads/664afa33410a9-61fbogt-oplacsl1500.jpg",
    },
    {
      src: "https://dealguru.se/admin/uploads/664afa336be0a-61uuhzlbsalacsl1500.jpg",
    },
  ];

  const handlePrevious = () => {
    setSelectedImage(
      selectedImage === 0 ? images.length - 1 : selectedImage - 1
    );
  };
  const handleNext = () => {
    setSelectedImage(
      selectedImage === images.length - 1 ? 0 : selectedImage + 1
    );
  };

  return (
    <div>
      <div className=" sm:w-full  max-w-[600px]  min-h-[530px] bg-white rounded-xl shadow-lg shadow-gray-200 flex flex-col gap-3 items-center mx-auto">
        <div className="relative w-full h-full flex justify-center items-center group">
          <button
            onClick={handlePrevious}
            className="absolute left-0 z-10 p-2 bg-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              padding: "8px",
              border: "1px solid gray",
              marginLeft: "5px",
            }}
          >
            <GrPrevious />
          </button>
          <Image
            src={images[selectedImage].src}
            width={400}
            height={200}
            className="mt-5"
            alt={` ${selectedImage}`}
            onClick={() => setSelectedImage(selectedImage)}
          />
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 p-2 bg-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              padding: "8px",
              border: "1px solid gray",
              marginRight: "5px",
            }}
          >
            <GrNext />
          </button>
        </div>
        <div className="flex justify-center gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`thumbnail-container ${
                selectedImage === index ? "selected" : ""
              }`}
              style={{
                borderRadius: "5px",
                overflow: "hidden",
              }}
            >
              <Image
                src={image.src}
                width={80}
                height={80}
                alt={`thumbnail ${index}`}
                className="thumbnail-image"
              />
            </div>
          ))}
        </div>
      </div>

      <h1
        className="mt-3 ml-1  font-normal  text-[20px] text-[#1B2738]"
        style={{
          fontWeight: 700,
        }}
      >
        Other great deals we think you'll like
      </h1>

      <DealPage />
      <style jsx>{`
        .thumbnail-container {
          opacity: 0.4;
          transition: opacity 0.3s ease;
        }

        .thumbnail-container.selected {
          opacity: 1;
        }
      `}</style>
      <div>
        <div
          className=" w-full  md:w-[95%] md:hidden lg: hidden xl:hidden 
        min-h-[220px] bg-white rounded-xl shadow-lg shadow-gray-200 p-4 gap-3 max-md:items-start items-center"
        style={{
          maxWidth:"320px"
        }}
        >
          <div
            className="flex"
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <p
              className={
                "text-heading text-[12px] md:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-black mb-3.5"
              }
              style={{
                fontFamily: `"Open Sans", sans-serif`,
              }}
            >
              {/* Bebeconfort Soko Compact Strolle
              0-15kg Shadow */}
            </p>

            <DealLikeModule />
          </div>
          <div
            className="flex deal-single-price deals-price font-semibold text-sm sm:text-base space-s-2 sm:text-xl md:text-base lg:text-xl 2xl:mt-3 text-heading pt-4"
            style={{
              alignItems: "center",
            }}
          >
            <span 
              className="font-bold sm:text-[5px]"
              style={{
                color: "#0367DD",
                whiteSpace: "nowrap",
                alignItems: "center",
                display: "flex!important",
                width: "100%, !important",
                fontSize: "20px",
                fontWeight: 700,
              }}
            >
              SEK 1,083
            </span>
            <s
              className="text-heading text-[13px] md:text-xl lg:text-2xl 2xl:text-3xl sm:text-[5px]"
              style={{
                fontWeight: 700,
                color: "#B1B9C0",
                lineHeight: "1.75rem",
                marginLeft: "10px",
              }}
            >
              SEK 1,495
            </s>
            <span
              style={{
                backgroundColor: "#0367DD",
                borderRadius: "5px",
                padding: "10px",
                color: "#fff",
                fontSize: "15px",
                marginLeft: "10px",
              }}
            >
              -36%
            </span>
            <span
              style={{
                display: "block",
                width: "maxContent ",
                color: "#0067e1",
                fontSize: "13px",
                flexWrap: "wrap",
                marginLeft: "10px",
              }}
            >
              Amazone
            </span>
            <span
              style={{
                display: "block",
                width: " max-content",
                color: "#0067e1",
                fontSize: "13px",
                flexWrap: "wrap",
                marginLeft: "10px",
              }}
            >
              Prams
            </span>
          </div>
          <div>
            <div className="md:flex items-center">
              <div className="flex items-center">
                <div>
                  <Image
                    width={30}
                    height={30}
                    src="/blank_avatar_new.png"
                    className="sm:mt w-[30px] h-[30px] rounded-full p-1 mt-5 border-[0.3px] border-gray-400"
                    alt="Avatar"
                  />
                </div>
                <div
                  className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed gaping_fix av_p_text_003 ps-1 pe-2 ml-1 mt-5 md:mt-0 md:ml-2"
                  style={{
                    color: "rgba(27, 39, 56, 0.5)",
                    fontSize: "13px",
                    fontWeight: 700,
                    width: "fit-content",
                    marginTop: "15px",
                  }}
                >
                  Updated 7 days ago by DealGuru-Sebastian
                </div>
              </div>
              <div className="flex items-center ml-auto mt-2">
                <CommentModules />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
