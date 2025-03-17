import React from "react";
import FooterCard from "./FooterCard";
import { Link1, Link2 } from "../../constants/Data";
const Footer = () => {
  return (
    <div>
      <div className="flex justify-between globalContainer">
        <div>
          <h1 className="text-xl text-blue-500">Customer Care</h1>
          {Link1.map((link1, idx) => (
            <FooterCard key={idx} link={link1.link} title={link1.title} />
          ))}
        </div>
        <div>
          <h1 className="text-xl text-blue-500">Daraz</h1>
          {Link2.map((link1, idx) => (
            <FooterCard key={idx} link={link1.link} title={link1.title} />
          ))}
        </div>
        <div className="flex items-start mr-16 mt-6">
          <img src="/images/logo.png" alt="None" className="h-10 w-10" />
          <div className="flex flex-col ml-4">
            <p>Happy Shopping</p>
            <p>Download App</p>
          </div>
          <div className="grid grid-cols-2 mx-4">
            <img src="/images/app2.png" alt="None" className="h-12 mx-4 mb-4" />
            <img src="/images/app3.png" alt="None" className="h-12 mx-4" />
            <img src="/images/app.png" alt="None" className="h-12 mx-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
