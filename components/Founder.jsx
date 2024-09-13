import React from "react";
import star from "../assets/star.svg";
import linkedin from "../assets/linkedin.svg";
import founder from "../assets/founder.png";
import Image from "next/image";

export default function Founder() {
  return (
    <div className="flex gap-16 lg:gap-0 py-12 flex-col lg:flex-row items-center lg:items-start px-4 sm:px-16 xl:px-32">
      <div className="w-full lg:w-1/2">
        <div className="text-gray-600 flex gap-4 font-semibold text-2xl items-center">
          <Image src={star} alt="" className="" />
          Meet Our<span className="text-blue-800">Founder</span>
        </div>
        <div className="text-gray-500 mt-5">
          <p>
            With decades of industry experience,{" "}
            <span className="font-semibold">Mayank</span> is a highly skilled
            software developer, solution architect and technology entrepreneur.
            He specializes in building modular and scalable cross platform
            software solutions.
          </p>
          <br />
          <p>
            Over the past, he has worked with numerous business, helping them
            overcome complex business challenges by building innovative
            technology solutions.
          </p>
          <br />
          <p>
            Admired by clients, developers and designers alike, his
            entrepreneurial vision drives{" "}
            <span className="font-semibold">Imeleo</span>, empowering businesses
            with cutting-edge technology solutions, thus fueling growth and
            innovation.
          </p>
        </div>
      </div>
      <div className="flex w-full lg:w-1/2 flex-col items-center lg:items-end">
        <div className="w-3/4">
          <Image
            src={founder}
            alt=""
            className="rounded-lg w-full self-center"
          />
          <div className="flex gap-2 mt-6 font-semibold text-xl text-blue-800">
            Mayank Mahajan{" "}
            <Image src={linkedin} alt="" className="aspect-square w-6" />
          </div>
          <div className="my-1 font-semibold text-black text-sm">
            Founder, Imeleo
          </div>
        </div>
      </div>
    </div>
  );
}
