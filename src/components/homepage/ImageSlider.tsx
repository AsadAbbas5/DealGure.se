"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import DealPage from "./dealpage/DealPage";
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
      <div className="w-full mt-2 max-w-lg min-h-[350px] bg-white rounded-xl shadow-lg shadow-gray-200 p-4 flex flex-col gap-3 items-center mx-auto lg:ml-2">
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          useKeyboardArrows={true}
          selectedItem={selectedImage}
          onChange={(index) => setSelectedImage(index)}
          showIndicators={false}
        >
          {images.map((image, index) => (
            <div key={index}>
              <h1
                style={{
                  color: "#0067e1",
                  fontFamily: "Nunito Sans",
                  position: "absolute",
                  fontWeight: 700,
                  backgroundColor: "#fff",
                  paddingRight: "1rem",
                  padding: "0rem 1rem",
                  borderRadius: "5px",
                }}
              >
                Good deal!
              </h1>
              <Image
                src={image.src}
                width={800}
                height={300}
                alt={`placeholder ${index}`}
                onClick={() => setSelectedImage(index)}
              />
            </div>
          ))}
        </Carousel>
        <div className="flex justify-center gap-2">
          {images.map((image, index) => (
            <div key={index} onClick={() => setSelectedImage(index)}>
              <Image
                src={image.src}
                width={80}
                height={80}
                alt={`thumbnail ${index}`}
              />
            </div>
          ))}
        </div>
      </div>

      <h1 className="mt-3 font-sans text-gray-500 font-medium text-xl">
        Other great deals we think you'll like
      </h1>
      <DealPage />
    </div>
  );
};

export default ImageSlider;
