import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { TbArrowBigUpFilled } from "react-icons/tb";
import { PiArrowBendUpLeftLight } from "react-icons/pi";
import { PiArrowFatUpLight } from "react-icons/pi";

function Comment() {
  return (
    <div className="sm:w-[100%] md:w-[95%] mt-3 bg-white rounded-xl shadow-lg shadow-gray-200 p-4 gap-3 max-md:items-start items-center">
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
              color: "black",
              borderRadius: "200px",
              padding: "3%",
              border: "1px solid rgb(237, 239, 241)",
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
            className="w-[50px] h-[50px] rounded-full p-2 mt-3 ml-1"
            alt="Avatar"
          />
          <div className="w-full">
            <div className="flex justify-between w-full mt-3">
              <p className="font-semibold text-[#1B2738] ml-1 mt-1 text-[12px] md:text-[12px] sm:text-[10px]">
                The Deal Guru Team
              </p>
              <p className="text-[12px] md:text-[12px] sm:text-[10px] text-[rgba(27, 39, 56, 0.5)] mt-1 mr-2">
                6 days, 20 hours, 17 minutes ago
              </p>
            </div>
            <p className="text-[#1B2738] text-[12px] md:text-[12px] sm:text-[10px] mt-1 ml-1">
              The deal was updated with a new price or new discount on
              2024-05-23 by DealGuru-Sebastian
            </p>
          </div>
        </div>
        <div className="mt-3 flex items-center ml-[75px]">
          <PiArrowFatUpLight className="text-[1.1rem]" />
          <p className="ml-2 text-gray-500">1</p>
          <p className="ml-5">
            <PiArrowBendUpLeftLight />
          </p>
          <p className="ml-2 font-semibold text-[12px] text-[#747577]">Respond</p>
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
            <div className="flex justify-between ml-2 items-center">
              <h2 className="font-semibold text-[#1B2738] text-[12px] md:text-[12px] sm:text-[10px] mt-4">
                John
              </h2>
              <p className="text-[12px] md:text-[12px] sm:text-[10px] text-[rgba(27, 39, 56, 0.5)] mt-4 mr-2">
                4 days, 3 hours, 57 minutes ago
              </p>
            </div>
            <p className="text-gray-600 text-[14px] md:text-[14px] sm:text-[10px] mt-1 ml-1">
              What a great price! Perfect to have lying around in the car as an extra trailer
            </p>
            <div className="mt-2 flex items-center ml-1">
              <PiArrowFatUpLight className="text-[1.1rem]" />
              <p className="ml-2 text-gray-500">1</p>
              <p className="ml-5">
                <PiArrowBendUpLeftLight />
              </p>
              <p className="ml-2 font-semibold text-[12px] text-[#747577]">Respond</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
