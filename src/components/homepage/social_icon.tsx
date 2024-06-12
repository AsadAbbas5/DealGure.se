import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const SocialIcons = () => {
  return (
    <div>
      <div className="flex gap-2 my-6">
        <Link href={"/"}>
          {" "}
          <Image
            width={26}
            height={26}
            src="/social_icons/tiktok.svg"
            className="w-6  h-6 rounded-full"
            alt="Avatar"
          />
        </Link>
        <Link href={"/"}>
          {" "}
          <Image
            width={26}
            height={26}
            src="/social_icons/instagram.svg"
            className="w-6  h-6 rounded-full"
            alt="Avatar"
          />
        </Link>
        <Link href={"/"}>
          <Image
            width={26}
            height={26}
            src="/social_icons/facebook.svg"
            className="w-6  h-6 rounded-full"
            alt="Avatar"
          />
        </Link>
      </div>
      <div>
        <div>
          <h2
            style={{
              fontSize: "22px",
              fontWeight: 700,
              lineHeight: "30px",
              color: "#1B2738",

              fontFamily: `"Nunito Sans", sans-serif`,
            }}
          >
            Bli medlem
          </h2>
        </div>
        <div>
          <h3
            className="pt-1 pb-5"
            style={{ fontSize: "14px ", fontWeight: 400, color: "#637381" }}
          >
            Registrera dig och få tillgång till exklusiva deals
          </h3>
        </div>
      </div>
      <div>
        <Button
          style={{
            fontFamily: "Nunito Sans",
            fontStyle: " normal",
            fontWeight: 700,
            fontSize: "14px",
            lineHeight: "19px",
            height: "40px",
            backgroundColor: "#0067e1",
            border: "1px solid #0067e1",
          }}
        >
          Register dig
        </Button>
      </div>
    </div>
  );
};

export default SocialIcons;
