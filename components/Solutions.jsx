import React from "react";
import ImageCard from "./ImageCard";
import content from "../assets/content.png";
import employee from "../assets/employee.png";
import vehicle from "../assets/vehicle.png";
import lead from "../assets/lead.png";
import inventory from "../assets/inventory.png";
import hospital from "../assets/hospital.png";
import Button from "./Button";

export default function Solutions() {
  const solutionsData = [
    {
      imgUrl: content,
      title: "Content Management",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetu",
    },
    {
      imgUrl: employee,
      title: "Employee Management",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetu",
    },
    {
      imgUrl: vehicle,
      title: "Vehicle Management",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetu",
    },
    {
      imgUrl: lead,
      title: "Lead Management",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetu",
    },
    {
      imgUrl: inventory,
      title: "Inventory Management",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetu",
    },
    {
      imgUrl: hospital,
      title: "Hospital Management",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetu",
    },
  ];

  return (
    <section className="flex flex-col items-center py-12 px-4 sm:px-16 xl:px-32">
      <div className="text-center">
        <span className="font-semibold text-blue-800 text-4xl">Solutions </span>
        <p className="mt-4 text-gray-500">
          Innovative software solutions tailored to streamline your <br />
          business operations and maximize efficiency.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {solutionsData.map((item, index) => (
          <ImageCard data={item} key={index} />
        ))}
      </div>
      <div className="mt-8">
        <Button buttonText={"View More"} />
      </div>
    </section>
  );
}
