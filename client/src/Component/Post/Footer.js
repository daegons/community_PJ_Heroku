import React from "react";
import { FooterDiv } from "../../Style/Footer";

const Footer = () => {
  const nowYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  return (
    <FooterDiv>
      <footer>
        Copyright &copy; <span>대곤_{nowYear()}</span>
      </footer>
    </FooterDiv>
  );
};

export default Footer;
