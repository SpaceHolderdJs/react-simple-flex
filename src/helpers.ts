import styled, { StyledComponent } from "styled-components";
import { JSX } from "react";
import { StyledInterface, StyledProps } from "styled-components";
import {
  AllPossibleHTMLElements,
  HTMLElementBasicProps,
  HTMLElementBasicPropsKeys,
} from "./types";

export const generateCSSStyledRules = <TKeys>(
  keys: (keyof TKeys)[],
  props: StyledProps<Partial<TKeys>>
) => {
  return keys
    .map((ruleName) => `${String(ruleName)}: ${props[ruleName]};`)
    .filter((rule) => !/undefined/.test(rule))
    .join(";");
};

export const buildCoreElementsLib = () => {
  const core: { [key: string]: StyledComponent<"symbol", any, {}, never> } = {};

  AllPossibleHTMLElements.forEach((tagName) => {
    // ts-ignore
    const basicStyledWithTag = styled[tagName]``;
    core[tagName] = styled(basicStyledWithTag)<HTMLElementBasicProps>`
      ${(props) =>
        generateCSSStyledRules<HTMLElementBasicProps>(
          HTMLElementBasicPropsKeys,
          props
        )}
    ` as StyledComponent<"symbol", any, {}, never>;
  });

  return core;
};
