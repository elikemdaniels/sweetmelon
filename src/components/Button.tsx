import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";

export default function Button({
  className,
  ...resProps
}: PrismicNextLinkProps) {
  return (
    <PrismicNextLink
      className={`w-fit inline-block mt-8 px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${className}`}
      {...resProps}
    />
  )
}
