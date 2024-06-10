import Category_slider from "@/components/homepage/category_slider";
import DealDetial from "@/components/homepage/dealpage/DealDetial";
import Sidebar from "@/components/sidebar/sidebar";

import Image from "next/image";
import Link from "next/link";
import DealContent from "@/components/homepage/DealContent";
import PargrahData from "@/components/homepage/dealpage/PargrahData";

export default function Home() {
  return (
    <main className="z-0 px-3 w-full mt-28">
      <Category_slider />

      <div className="grid grid-cols-1  md:gap-5  md:grid-cols-7  w-full">
        <DealContent/>
        
        <Sidebar />
      </div>
    </main>
  );



  
}
