import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import NatureVid from "../../assets/video/footervid.mp4";
import Logo from "../../assets/logo.png";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Best Places",
    link: "/best-places",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="dark:bg-gray-950 py-10 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"
        >
          <source src={NatureVid} type="video/mp4" />
        </video>
        <div className="container">
          <div className="grid md:grid-cols-3 py-5 bg-white/80 backup-blur-sm rounded-t-xl">
            <div className="py-8 px-4">
              <h1 className="flex-items center gap-3 text-xl sm:test-3xl font-bold text-justify sm:text-left">
                <img src={Logo} alt="" className="max-h-[60px]" />
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                laudantium facilis veritatis veniam itaque, nihil facere laborum
                repellat in expedita.
              </p>
              <br />
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+62 88920323302</p>
              </div>
              {/* social handles */}
              <div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="">
                    <FaInstagram className="text-3xl" />
                  </a>

                  <a href="">
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a href="">
                    <FaLinkedin className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
            {/* Footer Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              {/* first col link */}
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map(({ title, link }) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700">
                        <Link
                          to={link}
                          onClick={() => {
                            window.scrollTo(0, 0);
                          }}
                        >
                          <span>&#11162;</span>
                          <span>{title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map(({ title, link }) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700">
                        <Link
                          to={link}
                          onClick={() => {
                            window.scrollTo(0, 0);
                          }}
                        >
                          <span>&#11162;</span>
                          <span>{title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map(({ title, link }) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700">
                        <Link
                          to={link}
                          onClick={() => {
                            window.scrollTo(0, 0);
                          }}
                        >
                          <span>&#11162;</span>
                          <span>{title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white">
              @copyright 2024 All rights reserved || Rewrite with by Rivaldi
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
