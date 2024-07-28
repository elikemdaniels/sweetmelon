import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import Image from "next/image";


export default async function Header() {

  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <Bounded as={"header"} className="sticky top-0 bg-slate-900 text-slate-50">
      <div className="flex md:flex-row md:justify-between items-center">
        <Link href="/" className="font-bold text-lg inline-block py-2">
          {/* Check if the site logo URL is present */}
          {settings.data.site_logo ? (<PrismicNextImage field={settings.data.site_logo} className="inline-block w-auto h-8" />) : (settings.data.site_title)}
        </Link>
        <menu>
          <ul className="flex gap-10">
            {settings.data.navigation.map(({ link, label }) => (
              <li key={label}>
                <PrismicNextLink field={link} className="inline-block py-2">
                  {label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </menu>
      </div>
    </Bounded>
  );
}