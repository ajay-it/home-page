import React from "react";
import ServiceCard from "./ServiceCard";
import data from "../assets/data.svg";
import it from "../assets/it.svg";
import software from "../assets/software.svg";
import web from "../assets/web.svg";
import app from "../assets/app.svg";
import cloud from "../assets/cloud.svg";
import Button from "./Button";

export default function Services() {
  const servicesData = [
    {
      imgUrl: web,
      title: "Web App Development",
      desc: "Building cutting-edge, high-performing web apps tailored to your business needs. Our solutions ensure seamless user experiences.",
    },
    {
      imgUrl: app,
      title: "App Development",
      desc: "Crafting exceptional mobile experiences that revolutionize user engagement on the go. Our solutions deliver intuitive, high-performance.",
    },
    {
      imgUrl: it,
      title: "IT Consulting",
      desc: "Strategic IT consulting services to guide businesses through the dynamic technology landscape. We provide expert insights and solutions to optimize.",
    },
    {
      imgUrl: software,
      title: "Software Development",
      desc: "Enterprise-grade, bespoke solutions that perfectly align with your business needs and goals.",
    },
    {
      imgUrl: cloud,
      title: "Cloud Services",
      desc: "Empower businesses to harness the full potential of cloud computing with solutions that ensure flexibility, scalability.",
    },
    {
      imgUrl: data,
      title: "Data Engineering",
      desc: "Robust data pipelines, ensuring the seamless collection, storage, and management of your data, no matter the scale.",
    },
  ];

  return (
    <section className="flex flex-col items-center py-12 px-4 sm:px-16 xl:px-32">
      <div className="text-center">
        <span className="font-bold text-blue-800 text-4xl">Services</span>
        <p className="mt-4 text-gray-500">
          Comprehensive business services designed to support growth <br /> and
          enhance your competitive edge.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {servicesData.map((item, index) => (
          <ServiceCard data={item} key={index} />
        ))}
      </div>
      <div className="mt-8">
        <Button buttonText={"View More"} />
      </div>
    </section>
  );
}
