import Link from "next/link";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Boloxxx/"  },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/bryanrodr1guez/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/bryanrodr1guez/" },
];

// Define the prop types
interface SocialsProps {
    containerStyles: string;
    iconStyles: string;
  }

export default function Socials({ containerStyles, iconStyles }: SocialsProps) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles} target="_blank" >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
