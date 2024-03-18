import clsx from "clsx";
import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "@/component/Bounded";
import { isFilled } from "@prismicio/client";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <Bounded as="footer" className="text-slate-600 ">
      <div className="container mx-auto mt-20 flex items-center justify-between gap-6 py-8 sm:flex-row ">
        <div className="name flex items-center justify-center gap-x-4 gap-y-2 sm:flex-row gap-2 sm:justify-self-start">
          {/* <Link href="/" className="text-xl font-extrabold hover:text-yellow-300">{settings.data.name}</Link>
          <span className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"> / </span> */}
          {/* //   aria-hidden={true}"> / </span> */}
          {/* <Link
          //   href="/"
          //   className="text-xl text-slate-100 font-extrabold tracking-tighter  transition-colors duration-150 "
          // >
          //   {settings.data.name}
          // </Link>
          // <span
          //   className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
          //   aria-hidden={true}
          // >
          //   /
          // </span> */}
          <Link href="/" className=" text-xl font-extrabold text-slate-300 hover:text-yellow-300 ">
            Renee Chang
          </Link>
          
          <p className=" text-sm text-slate-300 ">
            / © {new Date().getFullYear()} Min-Hsin Chang
          </p>
        </div>
        {/* <nav className="navigation " aria-label="Footer Navigation">
          <ul className="flex items-center gap-4 text-xl mt-4">
            {settings.data.nav_item.map(({ link, label }, index) => (
              <React.Fragment key={label}>
                <li>
                  <PrismicNextLink
                    className={clsx(
                      "group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-yellow-400",
                    )}
                    field={link}
                  >
                    {label}
                  </PrismicNextLink>
                </li>
                {index < settings.data.nav_item.length - 1 && (
                  <span
                    className="text-4xl font-thin leading-[0] text-slate-400"
                    aria-hidden="true"
                  >
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav> */}
        <div className="socials flex gap-3 justify-center sm:justify-end ">
          {isFilled.link(settings.data.linkedin_link) && (
            <PrismicNextLink
              field={settings.data.linkedin_link}
              className="p-2 text-2xl text-slate-300 hover:text-yellow-300"
              aria-label={settings.data.name + " on LinkedIn"}
            >
              <FaLinkedin />
            </PrismicNextLink>
          )}
          {isFilled.link(settings.data.github_link) && (
            <PrismicNextLink
              field={settings.data.github_link}
              className="p-2 text-2xl text-slate-300 hover:text-yellow-300"
              aria-label={settings.data.name + " on GitHub"}
            >
              <FaGithub />
            </PrismicNextLink>
          )}
          {isFilled.link(settings.data.instagram_link) && (
            <PrismicNextLink
              field={settings.data.instagram_link}
              className="p-2 text-2xl text-slate-300 hover:text-yellow-300"
              aria-label={settings.data.name + " on Instagram"}
            >
              <FaInstagram />
            </PrismicNextLink>
          )}
          
        </div>
      </div>
    </Bounded>
  );
}
