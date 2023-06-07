import styled from "styled-components";
import { Element } from "./Elements";

// @ts-ignore
// too big type
export const Flex = styled(Element)`
  display: flex;
  flex: 1 1 auto;
`;

export const FlexRow = styled(Flex)``;

export const FlexColumn = styled(Flex)`
  flex-direction: column;
`;
