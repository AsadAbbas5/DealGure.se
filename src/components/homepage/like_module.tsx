import React from "react";
import Image from "next/image";

const LikeModule = () => {
  return (
    <div className="flex h-fit mt-1 flex-col gap-4 max-md:items-start max-md:gap-2">
      <div className="flex md:gap-2 gap-1">
        <div className="border border-dealguru-blue md:min-w-[40px] md:min-h-[40px] max-w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md">
          <span>136</span>
        </div>
        <div className="bg-dealguru-grey md:w-[40px] md:h-[40px] w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md cursor-pointer">
          <Image alt="heart" width={16} height={16} src={"/heart.svg"} />
        </div>
        <div className="bg-dealguru-grey md:w-[40px] md:h-[40px] w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md cursor-pointer">
          <Image alt="like" width={16} height={16} src={"/like.svg"} />
        </div>
        <div className="bg-dealguru-grey md:w-[40px] md:h-[40px] w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md cursor-pointer">
          <Image alt="dislike" width={16} height={16} src={"/dislike.svg"} />
        </div>
      </div>
      <style jsx>{`
        .bg-dealguru-grey:hover {
          background-color: #ccc; /* Replace with your hover color */
        }
      `}</style>
    </div>
  );
};

export default LikeModule;
