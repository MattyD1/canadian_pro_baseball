import React from "react";
import { Open_Sans, Montserrat } from "next/font/google";
import clsx from "clsx";
import {
  BannerModelBodyField,
  BannerModelHeadingField,
  ImageAltTitleFileField,
  Maybe,
} from "@/utils/graphql/generated";

import { Image } from "react-datocms";
import { StructuredHeading, StructuredParagraph } from "../StructuredText";

interface IBannerProps {
  highlight?: string;
  overlay?: string;
  heading: BannerModelHeadingField;
  body?: Maybe<BannerModelBodyField>;
  image: ImageAltTitleFileField;
}

const openSans = Open_Sans({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

// TODO: ERROR - The BannerRecord causes and error, may be fixed in the future
const Banner = ({ highlight, overlay, heading, body, image }: IBannerProps) => {
  return (
    <section className="relative min-h-3/4 w-full">
      {/* Banner Image */}
      <div className="absolute h-full w-full">
        {/* Image */}
        <Image data={image.responsiveImage} layout="fill" objectFit="cover" />

        {/* Overlay */}
        {overlay && (
          <div className={clsx("absolute h-full w-full opacity-80", overlay)} />
        )}
      </div>

      {/* Banner Content */}
      <div className="absolute mx-32 mt-12 flex h-full flex-col justify-center gap-5 text-white">
        {/* Title */}
        <StructuredHeading
          heading={heading}
          highlightColor={highlight}
          className={clsx(
            "max-w-[16ch] text-5xl font-black",
            openSans.className
          )}
        />

        {/* Description */}
        <StructuredParagraph
          body={body}
          highlightColor={highlight}
          className={clsx(
            "max-w-[55ch] text-lg font-medium text-white",
            montserrat.className
          )}
        />

        {/* Button */}
        {/* TODO: Add button */}
        <div className="mt-4 w-fit rounded-sm bg-accent-400 px-6 py-4">
          Register Now!
        </div>
      </div>
    </section>
  );
};

export { Banner };
