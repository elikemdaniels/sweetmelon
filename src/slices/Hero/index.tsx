import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";

const components: JSXMapSerializer = {
  heading1: ({ children }) => <h1 className="text-3xl md:text-7xl font-bold md:tracking-tight md:leading-tight">{children}</h1>,
  paragraph: ({ children }) => <p className="text-xl max-w-xl mx-auto">{children}</p>,
}

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-24 bg-sky-50"
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-5 items-center">
        <PrismicRichText field={slice.primary.heading}
          components={components}
        />

        <PrismicRichText field={slice.primary.subheading}
          components={components}
        />

        <Button field={slice.primary.button_link} className="uppercase">
          {slice.primary.button_label}
        </Button>

      </div>
      <PrismicNextImage field={slice.primary.image} className="rounded-3xl shadow-md mt-16" />

    </Bounded>
  );
};

export default Hero;