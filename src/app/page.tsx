import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");
  const settings = await client.getSingle("settings");
  const siteTitle = settings.data.site_title;
  const metaTitle = page.data.meta_title;

  return {
    title: `${siteTitle} - ${metaTitle}`,
    description: page.data.meta_description ?? settings.data.site_description,
    openGraph: {
      images: [page.data.meta_image.url ?? settings.data.og_image.url ?? ""]
    }
  };
}
