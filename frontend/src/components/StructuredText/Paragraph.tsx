import { BannerModelBodyField } from "@/utils/graphql/generated";
import clsx from "clsx";
import { Maybe } from "graphql/jsutils/Maybe";
import React from "react";
import { StructuredText, renderMarkRule } from "react-datocms/structured-text";

interface IParagraphProps {
  body?: Maybe<BannerModelBodyField>;
  highlightColor?: string;
  className: string;
}

const Paragraph = ({ body, highlightColor, className }: IParagraphProps) => {
  if (!body) return null;

  return (
    <div className={className}>
      <StructuredText
        data={body.value}
        customMarkRules={[
          renderMarkRule("underline", ({ children, key }) => {
            if (!highlightColor)
              return <React.Fragment key={key}>{children}</React.Fragment>;

            return (
              <span
                key={key}
                className={clsx(
                  `relative inline-block h-full before:absolute before:-bottom-[2px] before:block before:h-[3px] before:w-full`,
                  `before:bg-${highlightColor}`
                )}
              >
                {children}
              </span>
            );
          }),
          renderMarkRule("strikethrough", ({ children, key }) => {
            if (!highlightColor)
              return <React.Fragment key={key}>{children}</React.Fragment>;

            return (
              <span
                key={key}
                className={clsx(
                  `relative inline-block h-full before:absolute before:top-1/2 before:block before:h-[3px] before:w-full`,
                  `before:bg-${highlightColor}`
                )}
              >
                {children}
              </span>
            );
          }),
          renderMarkRule("highlight", ({ children, key }) => {
            if (!highlightColor)
              return <React.Fragment key={key}>{children}</React.Fragment>;

            return (
              <span key={key} className={`text-${highlightColor}`}>
                {children}
              </span>
            );
          }),
        ]}
      />
    </div>
  );
};

export { Paragraph };
