import React from "react";
import Image from "next/image";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin-white.svg";
import phone from "../assets/phone.svg";
import envelope from "../assets/envelope.svg";
import location from "../assets/location.svg";
import flag from "../assets/flag.png";

export default function Footer() {
  return (
    <div className="w-full text-white text-center sm:text-left bg-blue-800 flex flex-col items-center md:items-start lg:flex-row gap-8 flex-wrap pt-12 px-4 sm:px-16 xl:px-32">
      <div className="flex flex-col gap-6">
        <span className="font-semibold text-3xl">Imeleo</span>
        <p className="text-xl">
          <span className="font-semibold">Business Software </span> <br />
          Solutions And Services
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={facebook} alt="Facebook" className="inline-block w-5" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={linkedin} alt="LinkedIn" className="inline-block w-5" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={instagram}
              alt="Instagram"
              className="inline-block w-5"
            />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={youtube} alt="YouTube" className="inline-block w-5" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={twitter} alt="Twitter" className="inline-block w-5" />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h1 className="font-semibold text-lg">Links</h1>
          <ul className="flex flex-col gap-2 mt-2 text-sm">
            <li>
              <a href="#" className="hover:text-gray-200">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Solutions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Why Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold text-lg">Services</h1>
          <ul className="flex flex-col gap-2 mt-2 text-sm">
            <li>Web App Dev</li>
            <li>Mobile App Dev</li>
            <li>IT Consulting</li>
            <li>Custom Software </li>
            <li>Cloud Services</li>
            <li>Data Engineering</li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold text-lg">Solutions</h1>
          <ul className="flex flex-col gap-2 mt-2 text-sm">
            <li>Content Management</li>
            <li>Employee Management</li>
            <li>Vehicle Management</li>
            <li>Lead Management</li>
            <li>Inventory Management</li>
            <li>Hospital Management</li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold text-lg">Contact</h1>
          <ul className="flex flex-col gap-2 mt-2 text-sm">
            <li className="flex items-center">
              <Image src={phone} alt="" className="inline-block w-3 me-2" />
              +91-8873-33-8873
            </li>
            <li className="flex items-center">
              <Image src={envelope} alt="" className="inline-block w-3 me-2" />
              contact@imeleo.com
            </li>
            <li className="flex items-center">
              <Image src={location} alt="" className="inline-block w-3 me-2" />
              Noida, Uttar Pradesh
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t-gray-400 border-t flex flex-col items-center gap-1 md:flex-row justify-between py-6 w-full text-xs">
        <div>© 2023 Imeleo Consulting. All ights reserved.</div>
        <div>Privacy policy | Terms & Conditions</div>
        <div>
          info@imeleo.com{" "}
          <Image src={flag} alt="" className="inline-block w-5 me-2" />
        </div>
      </div>
    </div>
  );
}
