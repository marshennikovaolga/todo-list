import React from "react";
import { tw } from "twind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return (
        <a
        href='https://github.com/marshennikovaolga'
        className={tw`pl-4 text-gray hover:text-gray-200
    active:text-gray-900 mb-8 transition duration-300
    ease-in-out inline-block fixed bottom-0`}
    >
        <FontAwesomeIcon icon={faGithub} className={tw`mr-2`} />
        2024
    </a>
    )
}