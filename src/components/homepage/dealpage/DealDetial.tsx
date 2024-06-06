import Link from "next/link";
import LikeModule from "../like_module";
import Image from "next/image";
import CommentModules from "./CommentModules";
import PargrahData from "./PargrahData";
import { nunito_Sans } from "@/components/ui/fonts";
import DealLikeModule from "./DealLikeModule";

export default function DealDetial() {
  return (
    <div className=" ml-4">
      <div className="w-[95%]  min-h-[220px]  bg-white rounded-xl shadow-lg shadow-gray-200 p-4 gap-3 max-md:items-start items-center">
        <div
          className="flex"
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <p
            className={
              "text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-black mb-3.5"
            }
            style={{
              fontFamily: `"Open Sans", sans-serif`,
            }}
          >
            Bebeconfort Soko Compact Stroller
            <br />
            0-15kg Shadow
          </p>

          <DealLikeModule />
        </div>

        <div
          className="flex deal-single-price deals-price font-semibold text-sm sm:text-base  space-s-2 sm:text-xl md:text-base lg:text-xl  2xl:mt-3 text-heading pt-4"
          style={{
            alignItems: "center",
          }}
        >
          <span
            className="font-bold "
            style={{
              color: "#0367DD",
              whiteSpace: "nowrap",
              alignItems: "center",
              display: "flex!important",
              width: "100%, !important",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            SEK 1,083
          </span>

          <s
            style={{
              fontWeight: 700,
              color: "#B1B9C0",
              lineHeight: "1.75rem",
              fontSize: "1.5rem",
            }}
            className="ml-2"
          >
            SEK 1,495
          </s>
          <span
            style={{
              backgroundColor: "#0367DD",
              borderRadius: "5px",
              padding: "10px",
              color: "#fff",
              fontSize: "15px",
              marginLeft: "1rem",
            }}
          >
            -36%
          </span>
          <span
            className="ml-4"
            style={{
              display: "block",
              width: "maxContent ",
              color: "#0067e1",
              fontSize: "13px",
              flexWrap: "wrap",
            }}
          >
            Amazone
          </span>
          <span
            style={{
              display: "block",
              width: " max-content",
              marginLeft: "7px",
              color: "#0067e1",
              fontSize: "13px",
              flexWrap: "wrap",
            }}
          >
            Prams
          </span>
          <span
            style={{
              display: "block",
              width: "maxContent ",
              color: "#0067e1",
              fontSize: "13px",
              flexWrap: "wrap",
              marginLeft: "10px",
            }}
          >
            Children
          </span>
        </div>
        <div className="flex items-center">
          <div>
            <Image
              width={30}
              height={30}
              src="/blank_avatar_new.png"
              className="w-[30px] h-[30px] rounded-full p-1 mt-5  border-[0.3px] border-gray-400"
              alt="Avatar"
            />
          </div>
          <div
            className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed gaping_fix av_p_text_003 ps-1 pe-2 ml-1"
            style={{
              color: "rgba(27, 39, 56, 0.5)",
              fontSize: "13px",
            
              fontWeight: 700,
              width: "fit-content",
              marginTop: "1rem",
            }}
          >
            Updated 7 days ago by DealGuru-Sebastian
          </div>

          <CommentModules />
        </div>
      </div>
    </div>
  );
}
