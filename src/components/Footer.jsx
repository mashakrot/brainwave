import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
    return (
        // TODO: add tooltips for icons maybe 
        <Section crosses className="!px-0 !py-10">
            <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                <p className="caption text-n-4 lg:block">
                    © {new Date().getFullYear()}. All rights reserved.
                </p>

                <ul className="flex gap-5 flex-wrap">
                    {socials.map((item) => (
                        <div className="relative group">

                            <a
                                key={item.id}
                                href={item.url}
                                target="_blank"
                                className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6 group"
                            >
                                <img src={item.iconUrl} width={16} height={16} alt={item.title} />
                            </a>

                            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2
                  px-2 py-1 text-xs text-white bg-gray-800 rounded 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                                Follow us on {item.title}
                            </div>

                        </div>
                    ))}
                </ul>
            </div>
        </Section>
    );
};

export default Footer;