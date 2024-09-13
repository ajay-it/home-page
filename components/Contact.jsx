import React from "react";
import contactBg from "../assets/contact-bg.png";
import person from "../assets/person.png";
import phone from "../assets/phone.svg";
import envelope from "../assets/envelope.svg";
import Button from "./Button";
import Image from "next/image";

export default function Contact() {
  const bgStyle = {
    background: `url(${contactBg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <section className="w-full flex flex-col items-center py-12 px-4 sm:px-16 xl:px-32">
      <div className="text-center">
        <span className="font-bold text-blue-800 text-4xl">Contact Us</span>
        <p className="mt-4 text-gray-500">
          Reach out to discuss how we can transform your business with <br />{" "}
          tailored solutions and expert support.
        </p>
      </div>
      <div
        className="mt-20 flex justify-end relative w-full h-80 border rounded-3xl"
        style={bgStyle}
      >
        <Image
          src={person}
          alt=""
          objectFit="contain"
          className="absolute bottom-0 left-0 h-[26rem] w-1/3 hidden sm:block"
        />
        <div className="flex flex-col gap-4 p-6 justify-center text-white w-full sm:w-1/2">
          <div className="text-2xl">
            We help you to grow your business faster & easier.
          </div>
          <div className="text-xs">
            Partner with us to simplify the path to your success. We'll make
            reaching your <br /> business goals faster and easier than ever
          </div>
          <div>
            <div>
              <Image src={phone} alt="" className="inline-block w-5 me-2" />
              +91-8873-33-8873
            </div>
            <div>
              <Image src={envelope} alt="" className="inline-block w-5 me-2" />
              contact@imeleo.com
            </div>
          </div>
          <div className="w-fit">
            <Button buttonText={"Contact Us"} />
          </div>
        </div>
      </div>
    </section>
  );
}
