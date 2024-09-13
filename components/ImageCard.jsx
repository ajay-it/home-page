import Image from "next/image";
import React from "react";

export default function ImageCard({ data, showDate }) {
  return (
    <div className="flex flex-col items-center p-4 border border-gray-300 rounded-3xl">
      <div className="w-full aspect-auto">
        <Image
          src={data?.imgUrl}
          alt=""
          className="w-full h-full rounded-2xl"
        />
      </div>
      {showDate && (
        <div className="self-start rounded-3xl border border-blue-800 px-4 py-1 mt-5 text-sm">
          {data.date}
        </div>
      )}
      <div className=" w-full py-3 font-semibold text-start text-xl text-blue-800">
        {data.title}
      </div>
      <div className="text-gray-500 w-full text-start">{data.desc}</div>
    </div>
  );
}
