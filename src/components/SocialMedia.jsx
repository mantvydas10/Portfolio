import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/mantvydas-andreikevicius/"
        target="_blank"
      >
        <AiFillLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/mantvydas10" target="_blank">
        <AiFillGithub />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/broliai.saunuoliai" target="_blank">
        <FaFacebookF />
      </a>
    </div>
  </div>
);

export default SocialMedia;
