import Link from "next/link";
import LikeModule from "../like_module";
import Image from "next/image";
import CommentModules from "./CommentModules";
import PargrahData from "./PargrahData";
import { openSans, nunito_Sans } from "@/components/ui/fonts";
import DealLikeModule from "./DealLikeModule";

export default function DealDetial() {
  return (
    <div className="mt-2 ml-2">
      <div className=" w-full min-h-[220px]  bg-white rounded-xl shadow-lg shadow-gray-200 p-4 gap-3 max-md:items-start items-center">
        <div
          className="flex"
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <p
            className={`${openSans.className}`}
            style={{
              color: "",
              fontSize: "1.3rem",
              lineHeight: "2rem",
              fontWeight: 650,
              marginRight: "10px",
            }}
          >
            Bebeconfort Soko Compact Stroller
            <br />
            0-15kg Shadow
          </p>

          <DealLikeModule />
        </div>

        <div className={`${nunito_Sans.className} mt-5 `}>
          <span
            style={{
              marginTop: "5rem",
              fontWeight: 700,
              fontSize: "1.3rem",
            }}
            className="text-blue-500"
          >
            SEK 957
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
            className="sm:hidden"
            style={{
              backgroundColor: "#0367DD",
              borderRadius: "5px",
              maxWidth: "26px",
              padding: "15px",
              color: "#fff",
              fontSize: "15px",
              marginLeft: "1rem",
            }}
          >
            -36%
          </span>
          <span
            className={`${nunito_Sans.className} ml-4`}
            style={{
              fontSize: "15px",
              fontFamily: "Nunito Sans",
              fontStyle: "normal",
              color: "rgb(0, 103, 225)",
              fontWeight: 700,
            }}
          >
            Amazone
          </span>
          <span
            style={{
              fontSize: "13px",
              fontFamily: "Nunito Sans",
              fontStyle: "normal",
              fontWeight: 800,
              color: "rgb(0, 103, 225)",
            }}
            className="ml-3"
          >
            Prams
          </span>
          <span
            className={`${nunito_Sans.className} ml-3`}
            style={{
              fontSize: "15px",
              fontFamily: "Nunito Sans",
              fontStyle: "normal",
              fontWeight: 800,
              color: "rgb(0, 103, 225)",
            }}
          >
            Children
          </span>
        </div>
        <div className="flex">
          <div>
            <Image
              width={30}
              height={30}
              src="/blank_avatar_new.png"
              className="w-[30px] h-[30px] rounded-full p-1 mt-5 ml-3 border-[0.3px] border-gray-400"
              alt="Avatar"
            />
          </div>
          <div
            className=" ml-3"
            style={{
              color: "rgba(27, 39, 56, 0.5)",
              fontSize: "12px",
              fontFamily: "Nunito Sans",
              fontWeight: 700,
              marginTop: "2rem",
            }}
          >
            Checked 1 day ago by DealGuru-Sebastian
          </div>
          <CommentModules />
        </div>
      </div>
    </div>
  );
}
