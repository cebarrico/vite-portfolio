import { SocialMediaContainer } from "./styles";
import { BsInstagram, BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <div className="icons-container">
        <a href="https://github.com/cebarrico">
          <BsGithub className="github" />
        </a>
        <a href="https://www.linkedin.com/in/celsobarrico/">
          <BsLinkedin className="linkedin" />
        </a>
        <a href="mailto:cbarrico@gmail.com">
          <SiGmail className="gmail" />
        </a>
        <a href="https://www.instagram.com/ceelbarrico/">
          <BsInstagram className="instagram" />
        </a>
        <a href="https://wa.me/5516991911714">
          <BsWhatsapp className="whatsapp" />
        </a>
      </div>
    </SocialMediaContainer>
  );
};
