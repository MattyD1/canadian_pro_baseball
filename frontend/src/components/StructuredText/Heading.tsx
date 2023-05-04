import { BannerModelHeadingField } from "@/utils/graphql/generated";
import { data } from "autoprefixer";
import clsx from "clsx";
import { isParagraph } from "datocms-structured-text-utils";
import React from "react";
import {
  StructuredText,
  renderNodeRule,
  renderMarkRule,
} from "react-datocms/structured-text";

interface IHeadingProps {
  heading: BannerModelHeadingField;
  highlightColor?: string;
  className: string;
}

const Heading = ({ heading, highlightColor, className }: IHeadingProps) => {
  return (
    <StructuredText
      data={heading.value}
      customNodeRules={[
        renderNodeRule(
          isParagraph,
          ({ adapter: { renderNode }, children, key }) => {
            // Translate to a heading 1 with styling
            return renderNode(
              "h1",
              {
                key,
                className: className,
              },
              children
            );
          }
        ),
      ]}
      customMarkRules={[
        renderMarkRule("highlight", ({ children, key }) => {
          if (!highlightColor)
            return <React.Fragment key={key}>{children}</React.Fragment>;

          return (
            <span key={key} className={clsx(`text-${highlightColor}`)}>
              {children}
            </span>
          );
        }),
      ]}
    />
  );
};

export { Heading };
