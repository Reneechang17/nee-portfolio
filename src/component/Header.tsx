import React from "react"
import { createClient } from "@/prismicio"
import Link from 'next/link'
import { PrismicNextLink } from "@prismicio/next";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <header className="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4">
      <nav className="flex justify-between items-center">
       <Link href="/" aria-label="Home Page" className=" text-slate-300 text-2xl font-bold">
          {settings.data.name}
        </Link>
        <ul className="flex gap-4 ">
          {settings.data.nav_item.map(({ link, label }, index) => (
            <li key={index} className="group" >
              <PrismicNextLink 
                field={link} 
                className="text-slate-300 px-4 py-2  border-2 rounded-md  hover:text-yellow-300">
                {label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>

  )
}