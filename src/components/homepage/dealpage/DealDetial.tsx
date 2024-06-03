import Link from "next/link";
import LikeModule from "../like_module";
import Image from "next/image";
import CommentModules from "./CommentModules";
import PargrahData from "./PargrahData";
import { nunito_Sans } from "@/components/ui/fonts";
import DealLikeModule from "./DealLikeModule";

export default function DealDetial() {
  return (
    <div className="mt-2 ml-2">
      <div className="w-[730px]  min-h-[220px]  bg-white rounded-xl shadow-lg shadow-gray-200 p-4 gap-3 max-md:items-start items-center">
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

        <div className="flex deal-single-price deals-price font-semibold text-sm sm:text-base  space-s-2 sm:text-xl md:text-base lg:text-xl  2xl:mt-3 text-heading pt-4" style={{
          alignItems:"center"
        }}>
          <span
            className="font-bold "
            style={{ color: "#0367DD", whiteSpace: "nowrap",
            alignItems: "center",display: "flex!important",width:"100%, !important", fontSize: "20px",
            fontWeight:700

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
            style={{fontSize: "14px",display: "inline-flex",flexWrap: "wrap" ,
            width :"max-content",color:"#0067e1",
            fontWeight:650
            

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
        <div className="flex items-center">
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
              marginTop: "1rem",
            }}
          >
            Checked 1 day ago by DealGuru-Sebastian
          </div>
            
          <CommentModules/>
          
        </div>
      </div>
    </div>
  );
}
