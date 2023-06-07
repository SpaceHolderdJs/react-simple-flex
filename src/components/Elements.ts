import styled from "styled-components";
import { HTMLElementBasicProps, HTMLElementBasicPropsKeys } from "../types";
import { buildCoreElementsLib, generateCSSStyledRules } from "../helpers";

export const Element = styled.div<HTMLElementBasicProps>`
  ${(props) =>
    generateCSSStyledRules<HTMLElementBasicProps>(
      HTMLElementBasicPropsKeys,
      props
    )}
`;

const core = buildCoreElementsLib();

export default core;

