import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-lg text-gray-500 h-11 w-full stickey bottom-0">
      <h3>
        &copy;{new Date().getFullYear()} Quantum web Studio <br />
        All rights reserved
      </h3>
    </footer>
  );
};

export default Footer;
