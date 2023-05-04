import { BannerRecord, ColorField } from "@/utils/graphql/generated";
import React from "react";
import { Banner } from "./Banner";

const GetOverlay = (overlay: ColorField) => {
  if (!overlay.hex) return;

  switch (overlay.hex) {
    case "#000000":
      return "bg-black";
    case "#FFFFFF":
      return "bg-white";
    case "#E86840":
      return "bg-accent-400";
    case "#090E43":
      return "bg-primary-700";
    default:
      return;
  }
  // <div className={clsx("absolute h-full w-full opacity-80", overlayColor)} />
};

const GetHighlightColor = (highlight: ColorField) => {
  if (!highlight.hex) return;

  switch (highlight.hex) {
    case "#E86840":
      return "accent-400";
    case "#090E43":
      return "primary-700";
    default:
      return;
  }
};

const Factory = (banner: BannerRecord) => {
  // Get Highlight Color
  const highlight = banner.highlightColor
    ? GetHighlightColor(banner.highlightColor)
    : undefined;

  // Get Overlay Color
  const overlay =
    banner.hasOverlay && banner.overlay
      ? GetOverlay(banner.overlay)
      : undefined;

  return (
    <Banner
      highlight={highlight}
      overlay={overlay}
      heading={banner.heading}
      body={banner.body}
      image={banner.image}
    />
  );
};

export { Factory };
