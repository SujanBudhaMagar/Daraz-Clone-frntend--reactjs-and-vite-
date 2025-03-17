import React from "react";
import { Link } from "react-router-dom";
const FooterCard = ({ title, link }) => {
  return (
    <div>
      <Link to={link} className="text-sm text-blue-500">
        {title}
      </Link>
    </div>
  );
};

export default FooterCard;
