import React from "react";
import Comment from "./comment/Comment";

function PargrahData() {
  return (
    <div className="ml-3">
      <div className="w-full min-h-[250px] mt-6 bg-white rounded-xl shadow-lg shadow-gray-200 p-4 gap-3 flex flex-col">
        <div>
          <h1 className="text-2xl font-bold font-nunito">
            Travel trolley under SEK 1000!
          </h1>
          <br />
          <h1 className="text-xl text-gray-800 font-semibold">
            Bébé Confort Soko ultra-compact stroller
          </h1>
        </div>
        <div>
          <p className="mt-1 text-base leading-6 font-normal font-nunito" style={{
            fontSize:"15px !important",
            lineHeight:"1.5!important",
            background:"none !important",
            color:"#313131 !important"
          }}>
            Are you looking for a flexible and practical stroller that fits from
            newborn up to 3.5 years? Then Bébé Confort Soko is an excellent
            choice! This stroller is designed to make everyday life easier for
            parents and more comfortable for children.
          </p>
          <br />
          <h2 className="text-lg font-semibold font-nunito">
            Ultra compact design
          </h2>
          <p className="text-base leading-6 font-normal font-nunito" style={{
            fontSize:"15px !important",
            lineHeight:"1.5!important",
            background:"none !important",
            color:"#313131 !important"
          }}>
            This stroller is not only practical, but it is also comfortable for
            your child. With an adjustable backrest and footrest, you can easily
            adapt the sitting and lying position to the child's needs. The
            padded seat provides extra comfort, which is perfect for longer
            walks or naps on the go.
          </p>
          <br />
          <h2 className="text-lg font-semibold font-nunito">
            Safety in focus
          </h2>
          <p className="text-base leading-6 font-normal font-nunito" style={{
            fontSize:"15px !important",
            lineHeight:"1.5!important",
            background:"none !important",
            color:"#313131 !important"}}>
            Safety is always important when it comes to pushchairs, and the Bébé
            Confort Soko does not disappoint. It is equipped with a five-point
            harness that keeps your child securely in place. In addition, the
            stroller has a reliable brake that ensures it stands firmly when you
            need to stop.
          </p>
          <br />
          <h2 className="text-lg font-semibold font-nunito">
            Practical functions
          </h2>
          <p className="text-base leading-6 font-normal font-nunito" style={{
            fontSize:"15px !important",
            lineHeight:"1.5!important",
            background:"none !important",
            color:"#313131 !important"}}>
            In addition to its compact design and comfort, the stroller has
            several practical functions. It has a large shopping basket under
            the seat where you can store everything from diapers to shopping
            bags. The stroller also has an adjustable canopy that protects your
            child from sun and rain.
          </p>
          <br />
          <h2 className="text-lg font-semibold font-nunito">
            Stylish design
          </h2>
          <br />
          <p className="text-base leading-6 font-normal font-nunito" style={{
            fontSize:"15px !important",
            lineHeight:"1.5!important",
            background:"none !important",
            color:"#313131 !important"}}>
            With its modern and stylish design, this stroller is perfect for the
            trend-conscious parent. It's stylish and also built to last. In
            conclusion, the Bébé Confort Soko is an excellent choice for parents
            looking for a practical, safe and comfortable stroller suitable from
            newborn up to 3.5 years. With its compact design and smart
            functions, it is ready to accompany you on any adventure.
          </p>
        </div>
      </div>
      <div>
        <h1 className="font-nunito text-normal mt-4 text-lg" style={{
          color:"rgb(49, 49, 49)",
          fontSize:"inherit",
          fontWeight:"inherit"
        }}>
          What Do You think
        </h1>
      </div>
      <Comment />
    </div>
  );
}

export default PargrahData;
