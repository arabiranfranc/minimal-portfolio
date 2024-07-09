import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="py-5 text-center">
      <p className="text-sm mt-2 opacity-50">
        &copy; {new Date().getFullYear()} Francis Arabiran. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
