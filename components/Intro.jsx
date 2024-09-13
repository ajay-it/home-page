import Image from "next/image";
import React from "react";
import bg from "../assets/intro-image.png";
import Button from "./Button";

export default function Intro() {
  return (
    <section className="relative border-5 flex justify-center items-center w-full h-screen px-4">
      <div className="absolute inset-0 -z-10">
        <Image src={bg} alt="" className="object-cover" fill />
      </div>

      <div>
        <div className="text-center text-6xl text-blue-800 leading-tight">
          <span className="font-bold">Business Software </span>
          <br /> Solutions And Services
          <p className="text-lg text-black font-normal">
            <span className="font-semibold underline">Software</span> services
            and solutions to take your{" "}
            <span className="font-semibold underline">Business</span> to the
            next level🚀
          </p>
        </div>
        <div className="w-full flex gap-x-4 mt-4 justify-center">
          <Button buttonText={"Know more"} bgColor={"blue"} />
          <Button buttonText={"Contact Us"} />
        </div>
      </div>
    </section>
  );
}
