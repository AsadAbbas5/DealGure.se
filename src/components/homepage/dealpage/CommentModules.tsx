import Image from "next/image";
import React from "react";
import { FaComment } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { IoFlagSharp } from "react-icons/io5";

function CommentModules() {
  return (
    <div className="flex flex-1 items-end  h-fit  flex-col ml gap-4 max-md:items-start max-md:gap-2">
      <div className="flex md:gap-2 gap-1">
        <div className=" bg-dealguru-grey md:w-[40px] md:h-[40px] w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md cursor-pointer ">
          <IoFlagSharp
            style={{
              fontSize: "1.5rem",
              color: "#727885"
            }}
          />
        </div>
        <div className=" bg-dealguru-grey md:w-[40px] md:h-[40px] w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md cursor-pointer">
          <FaComment
            style={{
              fontSize: "1.5rem",
              color: "#727885"
            }}
          />
        </div>
        <div className=" bg-dealguru-grey md:w-[40px] md:h-[40px] w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md cursor-pointer">
          <IoMdShare
            style={{
              fontSize: "1.5rem",
              color: "#727885"
            }}
          />
        </div>
        <div className=" bg-dealguru-grey md:w-[40px] md:h-[40px] w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md cursor-pointer">
          <FaBookmark
            style={{
              fontSize: "1.5rem",
              color: "#727885",
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default CommentModules;
