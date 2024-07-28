import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

const icons = {
  "calendar": <CalendarIcon />,
  "bargraph": <BarGraphIcon />,
}

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {slice.primary.features.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-5 bg-slate-400 rounded-3xl shadow-md p-5">
              {item.icon && icons[item.icon as keyof typeof icons]}
              <PrismicRichText field={item.heading} />
              <PrismicRichText field={item.description} />
            </div>
          );
        })}
      </div>
    </Bounded>
  );
};

export default Features;

// Caldendar Icon
function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <g>
        <path
          stroke="#1C274C"
          strokeWidth="1.5"
          d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2z"
        ></path>
        <path
          stroke="#1C274C"
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M7 4V2.5M17 4V2.5M2.5 9h19"
          opacity="0.5"
        ></path>
        <path
          fill="#1C274C"
          d="M18 17a1 1 0 11-2 0 1 1 0 012 0zM18 13a1 1 0 11-2 0 1 1 0 012 0zM13 17a1 1 0 11-2 0 1 1 0 012 0zM13 13a1 1 0 11-2 0 1 1 0 012 0zM8 17a1 1 0 11-2 0 1 1 0 012 0zM8 13a1 1 0 11-2 0 1 1 0 012 0z"
        ></path>
      </g>
    </svg>
  );
}

// Bar Graph Icon
function BarGraphIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <g stroke="#1C274C" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          d="M2 2h20M9 10.5l1.293-1.293c.333-.333.5-.5.707-.5.207 0 .374.167.707.5l.586.586c.333.333.5.5.707.5.207 0 .374-.167.707-.5L15 8.5"
        ></path>
        <path
          strokeLinecap="round"
          d="M12 21v-4m0 4l-2 1m2-1l2 1"
          opacity="0.5"
        ></path>
        <path d="M20 2v8.5c0 3.064 0 4.596-1.004 5.548s-2.62.952-5.853.952h-2.286c-3.232 0-4.849 0-5.853-.952C4 15.096 4 13.564 4 10.5V2"></path>
      </g>
    </svg>
  );
}