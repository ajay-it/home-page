import Image from "next/image";
import React from "react";

export default function ImageCard({ data }) {
  return (
    <div className="flex flex-col items-center p-4 border border-gray-300 rounded-3xl">
      <div className="w-full aspect-auto">
        <Image src={data?.imgUrl} alt="" className="" />
      </div>
      <div className=" w-full py-3 font-semibold text-start text-2xl text-blue-800">
        {data.title}
      </div>
      <div className="text-gray-500 w-full text-start">{data.desc}</div>
    </div>
  );
}
