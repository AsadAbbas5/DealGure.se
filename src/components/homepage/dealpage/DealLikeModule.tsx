import Image from "next/image";
import React from "react";

const DealLikeModule = () => {
  return (
    <div className="flex flex-1 items-end h-fit  flex-col gap-2 max-md:items-start max-md:gap-2 ">
      <div>
      <span
        className="  font-bold  stext-sm bg-dealguru-grey text-blue-500 "
        style={{
          padding: "6px 55px",
          borderRadius: "5%",
          fontSize:"16px"
        }}
      >
        136
      </span>
      </div>
      <div className="flex md:space-x-2 space-x-3 ">
        <div className=" bg-dealguru-grey md:w-[40px] md:h-[40px] w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md cursor-pointer">
          <Image alt="heart" width={16} height={16} src={"/heart.svg"} />
        </div>
        <div className=" bg-dealguru-grey md:w-[40px] md:h-[40px] w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md cursor-pointer">
          <Image alt="heart" width={16} height={16} src={"/like.svg"} />
        </div>
        <div className=" bg-dealguru-grey md:w-[40px] md:h-[40px] w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md cursor-pointer">
          <Image alt="heart" width={16} height={16} src={"/dislike.svg"} />
        </div>
      </div>
    </div>
  );
};

export default DealLikeModule;
