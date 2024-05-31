"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import DealPage from "./dealpage/DealPage";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

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
      <div className="w-full mt-2 max-w-[600px] min-h-[600px] bg-white rounded-xl shadow-lg shadow-gray-200 flex flex-col gap-3 items-center mx-auto lg:ml-2">
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
            alt={`placeholder ${selectedImage}`}
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

      <h1 className="mt-3 font-sans text-gray-500 font-medium text-xl">
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
    </div>
  );
};

export default ImageSlider;
