import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { TbArrowBigUpFilled } from "react-icons/tb";
import { PiArrowBendUpLeftLight } from "react-icons/pi";
import { PiArrowFatUpLight } from "react-icons/pi";
import Link from "next/link";
import { CiBookmark } from "react-icons/ci";
import { FaComment, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LikeModule from "../../like_module";
function Comment() {
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="nextArrow"
        onClick={onClick}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "50%",
          right: "10px",
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          // backgroundColor: "#fff",
          color: "gray",
          cursor: "pointer",
          zIndex: 1,
        }}
      >
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="prevArrow"
        onClick={onClick}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "50%",
          left: "10px",
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          // backgroundColor: "#fff",
          color: "gray",
          cursor: "pointer",
          zIndex: 1,
        }}
      >
        <FaArrowLeft />
      </div>
    );
  };

  const data = [
    {
      name: "Water slide with sea animals - Playmobil",
      slug: "Good deal? Vote here:",
      price: 125,
      image:
        "https://dealguru.se/admin/uploads/66408ff225f9f-91rukidx5llacsl1500.jpg",
      category: ["Hasbro", "Barn", "Leksaker"],
      shortDescription: "Innehåller över 60 delar!",
    },
    {
      name: "Bosch GDS 18V-450 HC - Sladdlös borrskruvdragare",
      slug: "Bra deal? Rösta här:",
      price: 125,
      image:
        "https://dealguru.se/admin/uploads/66408ff225f9f-91rukidx5llacsl1500.jpg",
      category: ["Bosch", "Borrmaskiner", "Skruvar"],
      shortDescription:
        "En kraftfull sladdlös borrskruvdragare utan batteri och laddare!",
    },
  ];
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div>
      <div className="md:w-[95%] mt-3 bg-white rounded-xl shadow-lg shadow-gray-200  md:p-[10px]  gap-3 max-md:items-start items-center">
        <div
          className="w-full w-full px-4  pb-4"
          style={{
            backgroundColor: "white",
            border: "1px solid #ececec",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        >
          <div className="flex items-center ">
            <Image
              width={60}
              height={60}
              src="/blank_avatar_new.png"
              className="w-[60px] h-[60px] rounded-full p-2"
              alt="Avatar"
            />
            <Input
              placeholder="Log in or sign up to comment"
              className="font-sans w-[90%] w-full rounded-md comment_login"
              style={{
                borderRadius: "200px",
                border: "1px solid rgb(237, 239, 241)",
                fontSize: "12px",
              }}
            />
          </div>
        </div>
        <div>
          <div className="flex items-stretch ">
            <Image
              width={50}
              height={50}
              src="/blank_avatar_new.png"
              className="w-[50px] h-[50px] rounded-full p-2 mt-3 "
              alt="Avatar"
            />
            <div className="w-full">
              <div className="flex justify-between w-full mt-3">
                <p className="font-semibold text-[#1B2738] mt-1 text-[13px] md:text-[12px] ">
                  The Deal Guru Team
                </p>
                <p className="text-gray-400 text-[12px] md:text-[12px] text-[rgba(27, 39, 56, 0.5)] mt-1 mr-2 truncate-text">
                  <span className="block md:hidden">6 days, 20 hours...</span>
                  <span className="hidden md:block">
                    6 days, 20 hours, 17 minutes ago
                  </span>
                </p>
              </div>
              <p className="text-[#1B2738] text-[12px] md:text-[12px]  mt-1 ">
                The deal was updated with a new price or new discount on
                2024-05-23 by DealGuru-Sebastian
              </p>
            </div>
          </div>
          <div className="mt-3 flex items-center ml-[53px]">
            <PiArrowFatUpLight className="text-[1.1rem]" />
            <p className="ml-3 text-gray-500">1</p>
            <p className="ml-5">
              <PiArrowBendUpLeftLight />
            </p>
            <p className="ml-2 font-semibold text-[12px] text-[#747577]">
              Respond
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-stretch">
            <div>
              <Image
                width={50}
                height={50}
                src="/blank_avatar_new.png"
                className="w-[50px] h-[50px] rounded-full p-2  "
                alt="Avatar"
              />
            </div>
            <div className="md:w-full ml-1">
              <div className="flex justify-between  items-center">
                <h2 className="font-semibold text-[#1B2738] mt-1 text-[13px] md:text-[12px]">
                  John
                </h2>
                <p className="text-gray-400 text-[12px] md:text-[12px] text-[rgba(27, 39, 56, 0.5)] mt-1 mr-2 truncate-text">
                  <span className="block md:hidden">4 days, 3 hours...</span>
                  <span className="hidden md:block">
                    4 days, 3 hours, 57 minutes ago
                  </span>
                </p>
              </div>
              <p className="text-[#1B2738] text-[12px] md:text-[12px]  ">
                What a great price! Perfect to have lying around in the car as
                an extra trailer
              </p>
              <div className="mt-2 flex items-center ">
                <PiArrowFatUpLight className="text-[1.1rem] " />
                <p className="ml-3 text-gray-500">1</p>
                <p className="ml-5">
                  <PiArrowBendUpLeftLight />
                </p>
                <p className="ml-2 font-semibold text-[12px] text-[#747577]">
                  Respond
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <Slider {...settings}>
          {data.map((product, index) => (
            <div
              key={index}
              className="w-full min-h-[350px] mt-3 bg-white rounded-xl shadow-lg shadow-gray-200 p-4 flex flex-col gap-3 items-stretch"
            >
              <div className="flex items-start md:items-center md:justify-start w-full">
                <img
                  src={product.image}
                  alt="deal image"
                  className="rounded-l-md md:w-24 object-cover w-4/12 h-24 md:h-auto"
                />
                <div className="lg:ml-4 md:mt-0">
                  <h1 className="text-sm md:text-lg font-semibold leading-6 md:leading-7 ml-[21px]">
                    {product.name}
                  </h1>
                  <div>
                    <p
                      style={{
                        color: "#1b2738",
                        fontSize: "12px",
                        fontWeight: "700",
                        fontFamily: "0.5rem",
                        marginLeft: "1.4rem",
                      }}
                    >
                      {product.slug}
                      <LikeModule />
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center mt-4">
                  <h1
                    style={{
                      whiteSpace: "nowrap",
                      color: "#0367DD",
                      fontWeight: 700,
                      fontSize: "19px",
                    }}
                  >
                    SEK {product.price}
                  </h1>
                  <h1
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      marginLeft: "12px",
                    }}
                  >
                    Amazon
                  </h1>
                </div>
                <div className="flex items-center mt-2">
                  {product.category.map((cat) => (
                    <h1
                      key={cat}
                      style={{
                        fontSize: "17px",
                        color: "#0067e1",
                        fontWeight: 700,
                        paddingRight: "10px",
                      }}
                    >
                      {cat}
                    </h1>
                  ))}
                </div>
                <h1
                  style={{
                    fontWeight: 600,
                    fontSize: "15px",
                    marginTop: "10px",
                    fontFamily: `"Open Sans", sans-serif`,
                    lineHeight: "20px",
                    color: "rgb(33 33 32)",
                  }}
                >
                  {product.shortDescription}
                </h1>
                <div className="flex mt-2 items-center">
                  <Image
                    width={60}
                    height={60}
                    src="/blank_avatar_new.png"
                    className="w-[50px] h-[50px] rounded-full p-2"
                    alt="Avatar"
                  />
                  <div className="w-full">
                    <div className="flex justify-between">
                      <h1
                        style={{
                          fontWeight: 700,
                          fontSize: "12px",
                          textTransform: "capitalize",
                          color: "#1B2738",
                        }}
                      >
                        john
                      </h1>
                    </div>
                    <h2 className="text-gray-400 text-[12px] font-sans font-bold">
                      Updated 1 month
                    </h2>
                  </div>
                  <div className="md:w-[40px] md:h-[40px] w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md cursor-pointer">
                    <FaComment
                      style={{
                        fontSize: "1.2rem",
                        color: "darkgray",
                      }}
                    />
                  </div>
                  <h1 style={{ color: "darkgray" }}>0</h1>
                </div>
              </div>
              <div className="flex">
                <Link
                  className="w-[90%] bg-dealguru-blue text-white text-base text-center p-2 rounded-md font-medium"
                  href=""
                >
                  Gå direkt till dealen
                </Link>
                <div className="bg-dealguru-grey md:w-[40px] md:h-[40px] w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md cursor-pointer ml-3">
                  <CiBookmark
                    style={{
                      fontSize: "1.2rem",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Comment;
