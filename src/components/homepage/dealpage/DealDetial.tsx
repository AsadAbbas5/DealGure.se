import Link from "next/link";
import LikeModule from "../like_module";
import Image from "next/image";
import CommentModules from "./CommentModules";
import PargrahData from "./PargrahData";
import { nunito_Sans } from "@/components/ui/fonts";
import DealLikeModule from "./DealLikeModule";

export default function DealDetial() {
  return (
    <div>
      <div className=" sm:w-[100%] md:w-[95%]  min-h-[220px] bg-white rounded-xl shadow-lg shadow-gray-200 p-4 gap-3 max-md:items-start items-center">
        <div
          className="flex"
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <p
            className={
              "text-heading sm:text-[15px] md:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-black mb-3.5"
            }
            style={{
              fontFamily: `"Open Sans", sans-serif`,
              marginLeft:"10px"
            }}
          >
            Bebeconfort Soko Compact Stroller 0-15kg Shado
          </p>
          <DealLikeModule />
        </div>
        <div
          className="flex deal-single-price deals-price font-semibold text-sm sm:text-base  space-s-2 sm:text-xl md:text-base lg:text-xl  2xl:mt-3 text-heading pt-4 "
          style={{
            alignItems: "center",
          }}
        >
          <span
             className="font-bold sm:text-[15px] md:text-[20px]"
            style={{
              color: "#0367DD",
              alignItems: "center",
              fontWeight: 700,
              lineHeight: "1.75rem",
              marginLeft:"10px",
            }}
          >
            SEK 1,083
          </span>

          <s
            className="font-bold sm:text-[15px] md:text-[20px]"
            style={{
              fontWeight: 700,
              color: "#B1B9C0",
              lineHeight: "1.75rem",
              marginLeft: "10px",
            }}
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
              marginLeft: "10px",
            }}
          >
            -36%
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
            Amazone
          </span>
          <span
            style={{
              display: "block",
              width: " max-content",

              color: "#0067e1",
              fontSize: "13px",
              flexWrap: "wrap",
              marginLeft: "10px",
            }}
          >
            Prams
          </span>
          {/* <span
           className="hidden sm:block text-blue-600 text-xs ml-2"
            style={{
              width: "maxContent ",
              color: "#0067e1",
              fontSize: "13px",
              flexWrap: "wrap",
              marginLeft: "10px",
            }}
          >
            Children
          </span> */}
        </div>
        <div>
          <div className="md:flex items-center">
            <div className="flex items-center">
              <div className="ml-1">
                <Image
                  width={30}
                  height={30}
                  src="/blank_avatar_new.png"
                  className="sm: mt w-[30px] h-[30px] rounded-full p-1 mt-5 border-[0.3px] border-gray-400"
                  alt="Avatar"
                />
              </div>
              <div
                className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed gaping_fix av_p_text_003 ps-1 pe-2 ml-1 mt-5 md:mt-0 md:ml-2"
                style={{
                  color: "rgba(27, 39, 56, 0.5)",
                  fontSize: "13px",
                  fontWeight: 700,
                  width: "fit-content",
                  marginTop: "19px",
                }}
              >
                Updated 7 days ago by DealGuru-Sebastian
              </div>
            </div>
            <div className="flex items-center ml-auto mt-2">
              <CommentModules />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
