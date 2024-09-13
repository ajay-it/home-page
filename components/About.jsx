import React from "react";
import office from "../assets/office.png";
import check from "../assets/check.svg";
import Image from "next/image";
import Button from "./Button";

export default function About() {
  return (
    <section className="flex flex-col items-center py-12 px-4 sm:px-16 xl:px-32">
      <div className="text-center">
        <span className="font-bold text-blue-800 text-4xl">About Imeleo</span>
        <p className="mt-4 text-gray-500">
          Imeleo provides cutting-edge solutions and expert insights to <br />
          drive your business success in the digital age.
        </p>
      </div>
      <div className="flex flex-col mt-12 lg:flex-row gap-16 lg:gap-0 ">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <Image src={office} alt="" className="w-3/4 rounded-lg" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-around">
          <div className="text-2xl font-semibold">
            We Are Increasing <span className="text-blue-800">Business</span>{" "}
            Success With 
            <span className="text-blue-800">Technology</span>
          </div>
          <div className="text-sm mt-2 lg:mt-0">
            At Imeleo, we use technology to help businesses grow, work smarter,
            and get better results. Our goal is to make it easier for companies
            to succeed in today&apos;s digital world.
          </div>
          <div className="my-4 lg:my-0">
            <ul className="font-semibold">
              <li>
                <Image src={check} alt="" className="inline-block w-5 me-2" />
                Problem Solving
              </li>
              <li>
                <Image src={check} alt="" className="inline-block w-5 me-2" />
                Strategic Growth
              </li>
              <li>
                <Image src={check} alt="" className="inline-block w-5 me-2" />
                Enhanced Performance
              </li>
            </ul>
          </div>
          <div className="w-fit">
            <Button buttonText={"View More"} bgColor={"blue"} />
          </div>
        </div>
      </div>
    </section>
  );
}
