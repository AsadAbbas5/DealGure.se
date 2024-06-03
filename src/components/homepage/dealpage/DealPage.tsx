import { useState } from "react";
import Image from "next/image";
import LikeModule from "../like_module";
import Link from "next/link";
import { CiBookmark } from "react-icons/ci";
import { FaComment, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function DealPage() {
  return (
    <div>
      <div className=" w-full min-h-[350px] mt-3 bg-white rounded-xl shadow-lg shadow-gray-200  p-4 flex flex-col gap-3 items-stretch">
        <div className="flex flex-col md:flex-row items-start justify-start md:items-center md:justify-start">
          <div>
            <Image
              style={{
                marginLeft: "2rem",
              }}
              src="https://dealguru.se/admin/uploads/6657290be61af-61xrm3cqcnlacsl1200.jpg"
              width={150}
              height={75}
              alt="deal image"
              className="md:h-auto w-[100%] md:w-[100px] rounded-l-md object-cover mt-2"
            />
          </div>
          <div className="md:mt-0">
            <h1
              className="text-sm md:text-lg  leading-6 md:leading-7 ml-20"
              style={{
                fontWeight: 800,
                fontSize: "1.2rem",
              }}
            >
              Try Amazon Prime absolutely free for 30 days
            </h1>
            <div>
              <p
                className="ml-20"
                style={{
                  color: "#1b2738",
                  fontSize: "12px",
                  fontFamily: "'Nunito Sans'",
                  fontWeight: "700",
                }}
              >
                Good deal? Vote here:
                <LikeModule />
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <h1
              style={{
                whiteSpace: "nowrap",
                color: "#0367DD",
                fontWeight: 700,

                fontSize: "22px",
              }}
            >
              SEK 71
            </h1>
            <s
              style={{
                marginLeft: "5px",
                fontWeight: 700,
                fontSize: "22px",
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
                fontSize: "18px",
                lineHeight: "27px",
                fontWeight: 600,
                marginLeft: "10px",
              }}
            >
              Amzone
            </h3>
          </div>
          <div className="flex items-start mt-2">
            <h1
              style={{
                fontSize: "17px",
                color: "#0067e1",
                fontWeight: 700,
              }}
            >
              Nivea
            </h1>
            <h1
              style={{
                fontSize: "17px",
                color: "#0067e1",
                fontWeight: 700,
                marginLeft: "10px",
              }}
            >
              Skincare
            </h1>
          </div>

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
                Updated 4 days ago by
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
                marginLeft: "15rem",
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
          <div className="bg-dealguru-grey md:w-[40px] md:h-[40px] w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md cursor-pointer">
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
              marginLeft: "2rem",
            }}
          >
            <Image
              src="https://dealguru.se/admin/uploads/65f943f22397b-61zbhh9zgvlacsl1001.jpg"
              width={150}
              height={75}
              alt="deal image"
              className="md:h-auto w-auto md:w-[150px] rounded-l-md object-cover mt-2"
            />
          </div>

          <div className="md:ml-3 md:mt-0">
            <h1 className="text-sm md:text-lg font-semibold leading-6 md:leading-7">
              Try Amazon Prime absolutely free for 30 days
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
                Good deal? Vote here:
                <LikeModule />
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <h1
              style={{
                whiteSpace: "nowrap",
                color: "#0367DD",
                fontWeight: 700,
                marginLeft: "5px",
                fontSize: "22px",
                lineHeight: "27px",
              }}
            >
              176 Kr
            </h1>
            <h1
              style={{
                fontSize: "18px",
                fontWeight: 600,
                marginLeft: "15px",
              }}
            >
              Amazon
            </h1>
          </div>

          <div className="flex items-start mt-2">
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
                Updated 1 month ago
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
                marginLeft: "15rem",
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
  );
}
