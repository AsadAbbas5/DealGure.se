import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { TbArrowBigUpFilled } from "react-icons/tb";
import { PiArrowBendUpLeftLight } from "react-icons/pi";
import { PiArrowFatUpLight } from "react-icons/pi";

function Comment() {
  return (
    <div className=" w-[95%] mt-3  bg-white rounded-xl shadow-lg shadow-gray-200 p-4 gap-3 max-md:items-start items-center ml-1">
      <div
        style={{
          backgroundColor: "#fff",
          border: "1px solid #ececec",
          borderTopRightRadius: "5px",
          borderTopLeftRadius: "5px",
        }}
      >
        <div className="flex items-center ml-[16.5px]">
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
              color:"blue",
              borderRadius: "200px",
              padding: "3%",
              border: "1px solid rgb(237, 239, 241)",
              // fontFamily: "Nunito Sans",
              fontSize: "12px",
            }}
          />
        </div>
      </div>
      <div>
        <div className="flex items-stretch ml-[16.5px] ">
          <Image
            width={50}
            height={50}
            src="/blank_avatar_new.png"
            className="w-[50px] h-[50px] rounded-full p-2 mt-3  ml-1"
            alt="Avatar"
          />
          <div className="w-full">
            <div className="flex justify-between w-full mt-3">
              <p
                style={{
                  fontFamily: `"Nunito Sans", sans-serif`,
                  fontWeight: 700,
                  fontSize: "12px",
                  lineHeight: "20px",
                  color: "#1B2738",
                  marginLeft: "4px",
                  marginTop: "4px",
                }}
              >
                The Deal Guru Team
              </p>
              <p
                style={{
                  justifyContent: "space-between",
                  fontSize: "12px",
                  color: "rgba(27, 39, 56, 0.5)",
                  fontFamily: `"Nunito Sans", sans-serif`,
                  fontStyle: "normal",
                  fontWeight: 400,
                  marginTop: "5px",
                  marginRight:"6.5px",
                  lineHeight:"16px"
                  
                }}
              >
                6 days, 20 hours, 17 minutes ago
              </p>
            </div>
            <p
              style={{
                color: "#1B2738",
                fontSize: "0.875rem",
                fontWeight: 400,
                marginLeft: "3px",
                marginTop: "5px",
                // fontFamily:"'Nunito Sans'"
              }}
            >
              The deal was updated with a new price or new discount on
              2024-05-23 by DealGuru- Sebastian
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center ml-[75px]">
          <PiArrowFatUpLight
            style={{
              fontSize: "1.1rem",
            }}
          />
          <p className="ml-2 text-gray-500">1</p>
          <p className="ml-5">
            <PiArrowBendUpLeftLight />
          </p>
          <p
            className="ml-2"
            style={{
              fontWeight: 600,
              fontSize: "12px",
              color: "#747577",
            }}
          >
            Respond
          </p>
        </div>
      </div>
      <div>
        <div className="flex">
          <div>
          <Image
            width={60}
            height={60}
            src="/blank_avatar_new.png"
            className="w-[60px] h-[60px] rounded-full p-3 mt-2 ml-4"
            alt="Avatar"
          />
          </div>

          <div className="w-full">
            <div className="flex justify-between ml-2 items-center ">
              <h2
                style={{
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "12px",
                  lineHeight: "16px",
                  color: "#1B2738",
                  marginTop:"17px",
                  // marginLeft: "1px",
                }}
              >
                John
              </h2>
              <p
                style={{
                  fontSize: "12px",
                  color: "rgba(27, 39, 56, 0.5)",
                  fontFamily: `"Nunito Sans", sans-serif`,
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "16px",
                  marginRight:"0.8rem",
                  marginTop:"19px",
                  
                }}
              >
                4 days, 3 hours, 57 minutes ago
              </p>
            </div>

            <div>
              <p
                style={{
                  fontStyle: "normal",
                  color: "gray",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "19px",
                  marginLeft: "3px",
                  marginTop: "5px",
                }}
              >
                What a great price! Perfect to have lying around in the car as
                an extra trailer
              </p>
            </div>
            <div className="mt-2 flex items-center ml-1">
              <PiArrowFatUpLight
                style={{
                  fontSize: "1.1rem",
                }}
              />
              <p className="ml-2 text-gray-500">1</p>
              <p className="ml-5">
                <PiArrowBendUpLeftLight />
              </p>
              <p
                className="ml-2"
                style={{
                  fontWeight: 600,
                  fontSize: "12px",
                  color: "#747577",
                }}
              >
                Respond
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
