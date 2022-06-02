import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from "./Footer.style";
import { Typography,Box } from "@mui/material";
import App from "next/app";
const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{maxWidth:'400px'}}>
        <FooterTitle>Quem somos</FooterTitle>
        <Typography variant={'body2'} sx={{mt:2}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          magnam asperiores pariatur dolorum placeat ipsam laborum quibusdam,
          reiciendis odio nam eaque. Voluptates cupiditate sit ea totam iste
          officiis nam cumque!
        </Typography>
        </Box>
        <div>
        <FooterTitle>Baixe nossos aplicativos</FooterTitle>
        <AppList>
          <li>
            <a href={"/"} target={"_blank"} rel="noopener noreferrer">
              <img src={"/img/logos/app-store.png"} alt="appstore" />
            </a>
          </li>
          <li>
            <a href={"/"} target={"_blank"} rel="noopener noreferrer">
              <img src="/img/logos/google-play.png" alt="google-play" />
            </a>
          </li>
        </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
