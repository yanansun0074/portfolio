import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

const styles = {
  largeIcon: {
    width: 60,
    height: 60,
  },
};

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedInIcon
          iconStyle={styles.largeIcon}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/yanan-sun-199645181/",
              "_blank"
            )
          }
        />
        <GitHubIcon
          iconStyle={styles.largeIcon}
          onClick={() =>
            window.open("https://github.com/yanansun0074", "_blank")
          }
        />
      </div>
      <p> &copy; 2023 yanans.com</p>
    </div>
  );
}

export default Footer;
