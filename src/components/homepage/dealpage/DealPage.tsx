import { useState } from "react";
import Image from "next/image";
import LikeModule from "../like_module";
import Link from "next/link";
import { CiBookmark } from "react-icons/ci";
import { FaComment, FaArrowLeft, FaArrowRight } from "react-icons/fa"; // آئیکنز درآمد کریں

export default function DealPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < deals.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const deals = [
    {
      src: "https://dealguru.se/admin/uploads/amazon-prime-1676532668.png",
      title: "Try Amazon Prime absolutely free for 30 days",
      description:
        "Free shipping and access to lots of movies and TV series 🎥",
        updated: "Checked 2 weeks ago by",
    },
    {
      src: "https://dealguru.se/admin/uploads/t%C3%9Cv-s%C3%9Dd-certifierat-kaffefilter-1677661090.jpg",
      title:
        "Very good deal on a flexible and reliable solution to filter your coffee!",
       updated: "Checked 2 weeks ago by",
    },
  ];

  return (
    <div className="relative">
      <div className="deal-container">
        {deals.map((deal, index) => (
          <div
            key={index}
            className="deal-item"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <div className="w-full max-w-lg min-h-[350px] mt-3 bg-white rounded-xl shadow-lg shadow-gray-200 p-4 flex flex-col gap-3 items-center mx-auto lg:ml-2">
              <div className="flex -col md:flex-row items-start justify-start md:items-center md:justify-start">
                <div className="md:mr-3">
                  <Image
                    src="https://dealguru.se/admin/uploads/t%C3%9Cv-s%C3%9Cd-certifierat-kaffefilter-1677661090.jpg"
                    width={150}
                    height={75}
                    alt="placeholder"
                    className="md:h-auto w-auto md:w-[150px] rounded-l-md object-cover mt-2"
                  />
                  <div className="mt-28">
                    <div>
                      <h1 className="text-[18px] font-bold">Amazone</h1>
                    </div>
                  </div>
                </div>
                <div className="md:ml-3 mt-2 md:mt-0">
                  <h1 className="text-sm md:text-lg font-semibold leading-6 md:leading-7">
                    {deal.title}
                  </h1>
                  <div>
                    <p
                      style={{
                        color: "#1b2738",
                        fontSize: "12px",
                        fontFamily: "'Nunito Sans'",
                        fontWeight: "700",
                      }}
                    >
                      good deal? Voter here:
                    </p>
                    <div className="mr-12">
                      <LikeModule />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full justify-between self-start h-full">
                <div className="flex">
                  <h1 className="text-blue-600 ml-3 font-bold">Amzone|</h1>
                  <h1 className="ml-4 text-blue-600 font-bold">
                    Free Sample |
                  </h1>
                  <h1 className="ml-5 text-blue-600 font-bold">
                    <span className="hidden md:inline">
                      Free & discount codes
                    </span>
                    <span className="md:hidden">Free &</span>
                  </h1>
                </div>
                <div>
                  <h1
                    style={{
                      fontFamily: "Open Sans, sans-serif",
                      fontSize: "14px !important",
                      fontWeight: 600,
                    }}
                  >
                    {deal.description}
                  </h1>
                </div>
                <div>
                  <div className="flex">
                    <Image
                      width={60}
                      height={60}
                      src="/blank_avatar_new.png"
                      className="w-[50px] h-[50px] rounded-full p-2"
                      alt="Avatar"
                    />
                    <h2 className="text-gray-400 text-[12px] font-sans font-bold mt-2">
                      {deal.updated}
                    </h2>
                 
                  </div>
                </div>
                <div className="flex">
                  <Link
                    className="w-[90%] bg-dealguru-blue text-white text-base text-center p-2 rounded-md font-medium"
                    href=""
                  >
                    Gå direkt till dealen
                  </Link>
                  <div className="bg-dealguru-grey md:w-[40px] md:h-[40px] w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md cursor-pointer">
                    <CiBookmark
                      style={{
                        fontSize: "2rem",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-buttons">
        <button onClick={handlePrev}>
          <FaArrowLeft />
        </button>
        <button onClick={handleNext}>
          <FaArrowRight />
        </button>
      </div>
      <style jsx>{`
        @media only screen and (max-width: 768px) {
          .deal-container {
            display: flex;
            overflow: hidden;
            width: 100%;
            position: relative;
          }

          .deal-item {
            min-width: 100%;
            transition: transform 0.5s ease-in-out;
          }

          .slider-buttons {
            display: flex;
            justify-content: space-between;
            position: absolute;
            width: 100%;
            top: 50%;
          }

          .slider-buttons button {
            background-color: transparent;
            color: #000;
            border: none;
            padding: 10px;
            cursor: pointer;
          }

          .slider-buttons button:focus {
            outline: none;
          }
        }

        @media only screen and (min-width: 769px) {
          .slider-buttons {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
