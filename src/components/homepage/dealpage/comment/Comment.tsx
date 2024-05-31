import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useState } from "react";
import { TbArrowBigUpFilled } from "react-icons/tb";
import { PiArrowBendUpLeftLight } from "react-icons/pi";
import { PiArrowFatUpLight } from "react-icons/pi";

function Comment() {
  return (
    <div className="w-full min-h-[250px] mt-3 bg-white rounded-xl shadow-lg shadow-gray-200 p-4 gap-3 max-md:items-start items-center">
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
            className="w-[86%] ml-3 py-6 rounded-xl font-sans text-1xl"
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
          <h2
            style={{
              fontFamily: "Nunito Sans",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "12px",
              lineHeight: "16px",
              color: "#1B2738",
              marginTop: "25px",
            }}
          >
            The DealGuru Team
          </h2>
        </div>

        <p
          style={{
            fontFamily: "Nunito Sans",
            color: "gray",
            fontSize: "14px",
            fontWeight: 400,
            marginLeft: "2.7rem",
            marginBottom: "15px",
          }}
        >
          The deal was updated with a new price or new discount on 2024-05-23 by{" "}
          <br />
          DealGuru-Sebastian
          <div className="mt-2 flex items-center">
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
              className="ml-2 "
              style={{
                fontWeight: 600,
                fontSize: "12px",
                color: "#747577",
              }}
            >
              Respond
            </p>
          </div>
        </p>
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
                height: "40px !important",
                objectFit: "scale-down",
                border: "1px solid #d0d0d0",
              }}
            />
          </div>
          <div className="mt-4">
            <h2
              style={{
                fontFamily: "Nunito Sans",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "12px",
                lineHeight: "16px",
                color: "#1B2738",
                marginLeft: "0.5rem",
              }}
            >
              john
            </h2>
            <div className="mt-2">
              <p
                style={{
                  fontFamily: "Nunito Sans",
                  fontStyle: "normal",
                  color: "gray",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "19px",
                }}
              >
                What a great price! Perfect to have lying around in the car as
                an extra trailer
              </p>
            </div>
            <div className="mt-2 flex items-center">
              <PiArrowFatUpLight
                className=""
                style={{
                  fontSize: "1.1rem",
                }}
              />
              <p className="ml-2 text-gray-500">1</p>
              <p className="ml-5">
                <PiArrowBendUpLeftLight />
              </p>
              <p
                className="ml-2 "
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

      <div></div>
    </div>
  );
}
export default Comment;
