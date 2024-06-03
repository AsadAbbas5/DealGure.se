import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useState } from "react";
import { TbArrowBigUpFilled } from "react-icons/tb";
import { PiArrowBendUpLeftLight } from "react-icons/pi";
import { PiArrowFatUpLight } from "react-icons/pi";

function Comment() {
  return (
    <div className="w-[730px] min-h-[100px] mt-3 bg-white rounded-xl shadow-lg shadow-gray-200 p-4 gap-3 max-md:items-start items-center">
      <div
        style={{
          backgroundColor: "#fff",
          border: "1px solid #ececec",
          borderTopRightRadius: "5px",
          borderTopLeftRadius: "5px",
        }}
      >
        <div className="flex items-center">
          <Image
            width={60}
            height={60}
            src="/blank_avatar_new.png"
            className="w-[60px] h-[60px] rounded-full p-2"
            alt="Avatar"
          />
          <Input
            placeholder="Write Your comment here..."
            className="font-sans text-1xl"
            style={{
              borderRadius: "200px",
              padding: "25px",
              border: "1px solid rgb(237, 239, 241) ",
            }}
          />
        </div>
      </div>
      <div>
        <div className="flex">
          
          <Image
            width={60}
            height={60}
            src="/blank_avatar_new.png"
            className="w-[60px] h-[60px] rounded-full p-2"
            alt="Avatar"
          />
          <p
            style={{
              fontFamily: `"Nunito Sans", sans-serif`,
              fontWeight: 700,
              fontSize: "12px",
              lineHeight: "20px",
              color: "#1B2738",
              marginTop: "25px",
            }}
          >
            The DealGuru Team
          </p>
          <p
            style={{
              marginLeft: "23rem",
              fontSize: "15px",
              color: "darkgray",
              fontFamily: "Nunito Sans",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "16px",
              marginTop: "1rem",
            }}
          >
            4 days, 21 minutes ago
          </p>
        </div>
        <p
          style={{
            color: "gray",
            fontSize: "14px",
            fontWeight: 400,
            marginLeft: "3.8rem",
          }}
        >
          The deal was updated with a new price or new discount on 2024-05-23 by
          DealGuru- Sebastian
        </p>
        <div className="mt-2 flex items-center ml-16">
          <TbArrowBigUpFilled
            className="text-blue-600"
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
              src="https://dealguru.se/images/mannew2.png"
              className="w-[60px] h-[60px] rounded-full p-2 sm:w-60"
              alt="Avatar"
              style={{
                marginRight: "5px",
                backgroundColor: "#00ffea",
                padding: "5px",
                borderRadius: "200px",
                width: "40px",
                backgroundSize: "cover",
                height: "40px",
                objectFit: "scale-down",
                border: "1px solid #d0d0d0",
                marginLeft: "1rem",
              }}
            />
          </div>

          <div className="mt-2 ml-1">
            <div className="flex">
              <h2
                style={{
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "12px",
                  lineHeight: "16px",
                  color: "#1B2738",
                }}
              >
                john
              </h2>
              <p
                style={{
                  marginLeft: "25rem",
                  fontSize: "15px",
                  color: "darkgray",
                  fontFamily: "Nunito Sans",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "16px",
                  marginTop: "0.5rem",
                }}
              >
                14 days, 3 hours, 57 minutes ago
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
                  marginTop:"10px"
                }}
              >
                What a great price! Perfect to have lying around in the car as
                an extra trailer
              </p>
            </div>
            <div className="mt-2 flex items-center">
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
