import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.css";
import { LaptopWindows } from "@material-ui/icons";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        {/* <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
        <LinkedInIcon /> */}
        <LinkedInIcon
          onClick={() =>
            window.open("https://www.linkedin.com/in/yanan-sun-199645181/")
          }
        />
        <GitHubIcon
          onClick={() => window.open("https://github.com/yanansun0074")}
        />
        <EmailIcon />
      </div>
      <p> &copy; 2024 yanans.com</p>
    </div>
  );
}

export default Footer;
