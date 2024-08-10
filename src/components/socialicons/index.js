import React from 'react'

import {
    FaTwitter,
    FaGithub,
    FaFacebookF,
    FaLinkedin,
    FaYoutube,
    FaTwitch
} from "react-icons/fa";
import "./style.css";
import  {socialprofils}  from '../../content_option';

const Socialicons = (params) => {
  return (
    <div className='stick_follow_icon'>
        <ul>
            {socialprofils.facebook  && (
                <li>
                    <a href={socialprofils.facebook}>
                        <FaFacebookF />
                    </a>
                </li>
                
            )}

            {socialprofils.twitter && (
                <li>
                    <a href={socialprofils.twitter}>
                        <FaTwitter />
                    </a>
                </li>
            )}
            {socialprofils.github && (
                <li>
                    <a href={socialprofils.github}>
                        <FaGithub />
                    </a>
                </li>
            )}
            
            {socialprofils.linkedin && (
                <li>
                    <a href={socialprofils.linkedin}>
                        <FaLinkedin />
                    </a>
                </li>
            )}
            
        </ul>
        <p>Follow Me</p>

    </div>
  )
}

export default Socialicons;