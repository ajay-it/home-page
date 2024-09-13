import React from "react";
import ServiceCard from "./ServiceCard";
import approach from "../assets/approach.svg";
import innovation from "../assets/innovation.svg";
import process from "../assets/process.svg";
import scalability from "../assets/scalability.svg";
import support from "../assets/support.svg";
import technical from "../assets/technical.svg";
import Button from "./Button";

export default function ChooseUs() {
  const servicesData = [
    {
      imgUrl: technical,
      title: "Technical Expertise",
      desc: "Building cutting-edge, high-performing web apps tailored to your business needs. Our solutions ensure seamless user experiences.",
    },
    {
      imgUrl: approach,
      title: "Business Centric Approach",
      desc: "Putting business first, providing tailored IT solutions based on the unique needs of each business.",
    },
    {
      imgUrl: process,
      title: "Process & Quality Assurance",
      desc: "Implementing thorough testing and quality checks to deliver high-performing and secure IT solutions.",
    },
    {
      imgUrl: support,
      title: "Support",
      desc: "Offering timely support and quick resolution of issues to minimize downtime and disruptions.",
    },
    {
      imgUrl: innovation,
      title: "Innovation",
      desc: "Continuously adopting and integrating new technologies to stay competitive and offer clients cutting-edge solutions.",
    },
    {
      imgUrl: scalability,
      title: "Scalability",
      desc: "Providing scalable IT infrastructure and services that grow as the client's business grows.",
    },
  ];

  return (
    <section className="flex flex-col items-center py-12 px-4 sm:px-16 xl:px-32">
      <div className="text-center">
        <span className="font-bold text-blue-800 text-4xl">Why Choose Us</span>
        <p className="mt-4 text-gray-500">
          rusted expertise, cutting-edge technology, and a customer-
          <br />
          first approach to drive your success.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {servicesData.map((item, index) => (
          <ServiceCard data={item} key={index} />
        ))}
      </div>
    </section>
  );
}
