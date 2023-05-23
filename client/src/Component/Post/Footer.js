import React from "react";
import { FooterDiv } from "../../Style/Footer";

const Footer = () => {
  const nowYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  console.log(nowYear());

  return (
    <FooterDiv>
      <footer>
        Copyright &copy; <span>{nowYear()}</span>
      </footer>
    </FooterDiv>
  );
};

export default Footer;
