import Image from "next/image";
import React from "react";

const DealLikeModule = () => {
  return (
    <div className="flex flex-1 items-end ml-4 h-fit  flex-col gap-4 max-md:items-start max-md:gap-2">
      <div>
      <span
        className="font-bold  text-sm bg-dealguru-grey text-blue-500"
        style={{
          padding: "9px 55px",
          borderRadius: "5%",
        }}
      >
        136
      </span>
      </div>
      <div className="flex md:gap-2 gap-1">
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
