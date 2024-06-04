import { useState } from "react";
import Image from "next/image";
import LikeModule from "../like_module";
import Link from "next/link";
import { CiBookmark } from "react-icons/ci";
import { FaComment, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function DealPage() {
  return (
    <div>
      <div className="w-full mt-3 bg-white rounded-xl shadow-lg shadow-gray-200 p-4">
        <div className="flex flex-row-reverse">
          <div>
            <a href="#" style={{ cursor: "pointer" }}>
              <h3
                className=" flex mb-1.5 font-bold flex text-sm sm:text-base md:text-sm lg:text-base xl:text-lg  text-heading in_mb_txt_t_head_003 "
                style={{
                  // fontFamily:"Nunito Sans ",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "20px",
                  color: "#000",
                }}
              >
                NIVEA MEN Sensitive Pro After Shave Balm 100ml
              </h3>
            </a>
            <div className="pb-0.5 ">
              <div>
                <p
                  className="bra_text13088"
                  style={{
                    color: "#1B2738",
                    fontSize: "12px",
                    marginLeft:"4px",
                    // fontFamily: "Nunito Sans",
                    fontWeight: "700",
                  }}
                >
                  Good deal? Vote here:
                  <p style={{
                    marginRight:"6px"
                  }}>

                  <LikeModule />
                  </p>
                </p>
              </div>
              <p
                className="bra_text_heart13088"
                style={{
                  display: "none",
                  color: "#1B2738",
                  fontSize: "12px",
                  fontFamily: "Nunito Sans",
                  fontWeight: "700",
                }}
              ></p>
            </div>
          </div>

          <a
            href="https://dealguru.se/deal/nivea-men-sensitive"
            style={{ cursor: "pointer" }}
            className=""
          >
            <div className="flex flex-shrink-0 w-24 sm:w-24 md:w-40 lg:w-auto 2xl:w-56 3xl:w-64 mb_hm_d_003">
              <span
                className="deals-card-img deals-img-testing-page deals_res_cards_w_increase"
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "130px",
                  background: "none",
                  opacity: 1,
                  border: "0px none",
                  margin: "0px",
                  paddingLeft: "0px",
                  position: "relative",
                  maxWidth: "100%",
                }}
              >
                <span
                  className="over_image"
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "130px",
                    background: "none",
                    opacity: 1,
                    border: "0px none",
                    margin: "0px",
                    paddingLeft: "10px",
                    maxWidth: "100%",
                    fontWeight: 800,
                    // marginLeft:"1rem"
                    // padding:"0 5rem"
                  }}
                >
                  <img
                    alt=""
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjY1IiBoZWlnaHQ9IjI2NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                  />
                </span>

                <img
                  // id="get_image13088"
                  src="https://dealguru.se/admin/uploads/6657290be61af-61xrm3cqcnlacsl1200.jpg"
                  className="lozad object-cover rounded-s-md transition duration-200 ease-linear transform group-hover:scale-105 images-box-responsove fade"
                  style={{
                    position: "absolute",
                    inset: "0px",
                    boxSizing: "border-box",
                    padding: "0px",
                    border: "medium none",
                    margin: "auto",
                    display: "block",
                    maxHeight: "100%",
                    // width:"100%"
                    marginLeft: "1rem",
                  }}
                />
              </span>
            </div>
          </a>
        </div>
        <div>
          <div className="flex items-center  mt-4">
            <h1
              style={{
                whiteSpace: "nowrap",
                color: "#0367DD",
                fontWeight: 700,
                fontSize: "19px",
              }}
            >
              SEK 71
            </h1>
            <s
              style={{
                marginLeft: "5px",
                fontWeight: 700,
                fontSize: "19px",
                lineHeight: "27px",
                color: "#B1B9C0",
              }}
            >
              SEK 153
            </s>
            <h2
              style={{
                background: "#0367DD",
                borderRadius: "5px",
                padding: "10px 5px 7px 15px",
                color: "#fff",
                fontSize: "15px",
                fontWeight: 500,
                marginLeft: "5px",
                textAlign: "center",
              }}
            >
              -54%
            </h2>
            <h3
              style={{
                fontSize: "15px",
                lineHeight: "25px",
                fontWeight: 600,
                marginLeft: "10px",
              }}
            >
              Amzone
            </h3>
          </div>
          <div className="flex items-start mt-4">
            <h1
              style={{
                fontSize: "17px",
                color: "#0067e1",
                fontWeight: 700,
                marginLeft:"5px"
              }}
            >
              Nivea
            </h1>

            <h1
              style={{
                fontSize: "17px",
                color: "#0067e1",
                fontWeight: 700,
                marginLeft:"10px"
              }}
            >
              Skincare
            </h1>
          </div>

          <div className="flex mt-2 items-center ">
            <Image
              width={60}
              height={60}
              src="/blank_avatar_new.png"
              className="w-[50px] h-[50px] rounded-full p-2"
              alt="Avatar"
            />
            <div>
              <h2 className="text-gray-400 text-[12px] font-sans font-bold">
                Updated 5 days ago by
              </h2>
              <h1
                style={{
                  fontWeight: 700,
                  fontSize: "12px",
                  textTransform: "capitalize",
                  color: "#1B2738",
                }}
              >
                Dealjoanna.W.Wozniak1
              </h1>
            </div>
            <h2
              style={{
                marginLeft: "16rem",
              }}
            ></h2>
            <div className="md:w-[40px]  md:h-[40px] w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md cursor-pointer">
              <FaComment
                style={{
                  fontSize: "2rem",
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
          <div className="bg-dealguru-grey ml-3 md:w-[40px] md:h-[40px] w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md cursor-pointer">
            <CiBookmark
              style={{
                fontSize: "2rem",
              }}
            />
          </div>
        </div>
      </div>
      <div className=" w-full min-h-[350px] mt-3 bg-white rounded-xl shadow-lg shadow-gray-200  p-4 flex flex-col gap-3 items-stretch">
        <div className="flex flex-col md:flex-row items-start justify-start md:items-center md:justify-start">
          <div
            style={{
              marginLeft: "2.5rem",
            }}
          >
            <Image
              src="https://dealguru.se/admin/uploads/65f943f22397b-61zbhh9zgvlacsl1001.jpg"
              width={200}
              height={175}
              alt="deal image"
              className="md:h-auto w-auto md:w-[150px] rounded-l-md object-cover mt-2"
            />
          </div>

          <div
            className="md:ml-4
           md:mt-0"
          >
            <h1
              className="text-sm md:text-lg font-semibold leading-6 md:leading-7"
              style={{
                fontWeight: 700,
                fontSize: "1.2rem",
                marginLeft: "1rem",
              }}
            >
              Water slide with sea animals -<br /> Playmobil
            </h1>
            <div>
              <p
                style={{
                  color: "#1b2738",
                  fontSize: "12px",
                  // fontFamily: "'Nunito Sans'",
                  fontWeight: "700",
                  fontFamily: "0.5rem",
                  marginLeft: "1rem",
                }}
              >
                Good deal? Vote here:
                <LikeModule />
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center ml-2 mt-4">
            <h1
               style={{
                whiteSpace: "nowrap",
                color: "#0367DD",
                fontWeight: 700,
                fontSize: "19px",
              }}
            >
              SEK 176
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

          <div className="flex items-start mt-2 ml-2">
            <h1
              style={{
                fontSize: "17px",
                color: "#0067e1",
                fontWeight: 700,
              }}
            >
              Playmobil
            </h1>
            <h1
              style={{
                fontSize: "17px",
                color: "#0067e1",
                fontWeight: 700,
                marginLeft: "10px",
              }}
            >
              Toys
            </h1>
            <h1
              style={{
                fontSize: "14px !important",
                color: "#0067e1",
                fontWeight: 700,
                lineHeight: "20px",
                marginLeft: "10px",
              }}
            >
              Baby toys
            </h1>
          </div>
          <h1
            style={{
              marginLeft:"5px",
              fontWeight: 600,
              fontSize: "15px",
              marginTop: "10px",
              fontFamily: `"Open Sans", sans-serif`,
              lineHeight: "20px",
              color: "rgb(33 33 32)",
            }}
          >
            Perfect for the little ones!
          </h1>
          <div className="flex mt-2 items-center">
            <Image
              width={60}
              height={60}
              src="/blank_avatar_new.png"
              className="w-[50px] h-[50px] rounded-full p-2"
              alt="Avatar"
            />
            <div>
              <h2 className="text-gray-400 text-[12px] font-sans font-bold">
                Updated 1 month
              </h2>
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
            <h2
              style={{
                marginLeft: "18rem",
              }}
            ></h2>
            <div className="md:w-[40px] md:h-[40px] w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md cursor-pointer">
              <FaComment
                style={{
                  fontSize: "2rem",
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
                fontSize: "2rem",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
