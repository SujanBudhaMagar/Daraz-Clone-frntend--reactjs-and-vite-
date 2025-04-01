import React from "react";
import FooterCard from "./FooterCard";
import { Link1, Link2 } from "../../constants/Data";

const Footer = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h1 className="text-xl text-blue-500 mb-4">Customer Care</h1>
            {Link1.map((link1, idx) => (
              <FooterCard key={idx} link={link1.link} title={link1.title} />
            ))}
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h1 className="text-xl text-blue-500 mb-4">Daraz</h1>
            {Link2.map((link2, idx) => (
              <FooterCard key={idx} link={link2.link} title={link2.title} />
            ))}
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <img src="/images/logo.png" alt="None" className="h-10 w-10" />
              <div className="ml-4">
                <p>Happy Shopping</p>
                <p>Download App</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/app2.png" alt="None" className="h-12" />
              <img src="/images/app3.png" alt="None" className="h-12" />
              <img src="/images/app.png" alt="None" className="h-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
