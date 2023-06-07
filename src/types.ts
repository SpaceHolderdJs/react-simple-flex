import { CSSProperties } from "styled-components";
import { keys } from "ts-transformer-keys";
import { JSX } from "react";

export interface HTMLElementBasicProps extends CSSProperties {}
export const HTMLElementBasicPropsKeys = keys<HTMLElementBasicProps>();
export const AllPossibleHTMLElements = keys<JSX.IntrinsicElements>();