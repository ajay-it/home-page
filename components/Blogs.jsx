import React from "react";
import ImageCard from "./ImageCard";
import customer from "../assets/customer.png";
import growth from "../assets/growth.png";
import efficiency from "../assets/efficiency.png";
import Button from "./Button";

export default function Blogs() {
  const servicesData = [
    {
      imgUrl: growth,
      date: "January 10, 2024",
      title: "Why Data-Driven Decision Making is Key for Business Growth",
      desc: "Learn how leveraging software that offers real-time data insights can enhance strategic decisions, boost productivity, and drive sustainable growth.",
    },
    {
      imgUrl: customer,
      date: "September 1, 2024",
      title: "Top 5 Business Services to Boost Customer Satisfaction",
      desc: "Explore essential services such as CRM, help desk solutions, and automated support systems that can enhance customer experiences and foster long-term loyalty.",
    },
    {
      imgUrl: efficiency,
      date: "January 10, 2024",
      title: "Leveraging Software Solutions to Enhance Business Efficiency ",
      desc: "Discover how modern software tools can streamline your operations, automate tasks, and improve workflow efficiency to help your business stay competitive.",
    },
  ];

  return (
    <section className="flex flex-col items-center py-12 px-4 sm:px-16 xl:px-32">
      <div className="text-center">
        <span className="font-bold text-blue-800 text-4xl">Blogs</span>
        <p className="mt-4 text-gray-500">
          Explore our blog for expert tips, industry insights, and engaging{" "}
          <br />
          content on the latest trends. Stay informed and inspired!
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {servicesData.map((item, index) => (
          <ImageCard data={item} key={index} showDate={true} />
        ))}
      </div>
      <div className="mt-8">
        <Button buttonText={"View More"} />
      </div>
    </section>
  );
}
