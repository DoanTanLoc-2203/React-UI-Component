/** @format */

import React from "react";
import {
  dangerColor,
  defaultColor,
  infoColor,
  primaryColor,
  successColor,
  TableColor,
  warningColor,
} from "./color";
import styled from "styled-components";
import { BackgroundColor, Size, Variant } from "./type";

export interface ButtonProps {
  children?: React.ReactNode;
  size?: Size | string;
  bgColor?: BackgroundColor;
  variant?: Variant;
  onClick?: () => void;
}

export interface StyledProps {
  sizeStyled: string;
  schemaStyled: TableColor;
}

const caculateSize = (size: string | undefined) => {
  /* xs, sm, md, lg, or xl */
  if (size === "xs") return "10px";
  else if (size === "sm") return "15px";
  else if (size === "md") return "20px";
  else if (size === "lg") return "25px";
  else if (size === "xl") return "30px";
  else return "10px";
};

const caculateColorScheme = (bgColor: string) => {
  /* default, danger, primary, success , warning, info*/
  if (bgColor === "default") return defaultColor;
  else if (bgColor === "danger") return dangerColor;
  else if (bgColor === "primary") return primaryColor;
  else if (bgColor === "success") return successColor;
  else if (bgColor === "info") return infoColor;
  else if (bgColor === "warning") return warningColor;
  else return defaultColor;
};

const schemaColor = (bgColor: string | undefined) => {
  if (bgColor) return caculateColorScheme(bgColor);
  else return defaultColor;
};

const MyButtonSolid = styled.button`
  font-size: ${(props: StyledProps) => props.sizeStyled};
  background: ${(props: StyledProps) => props.schemaStyled.bg};
  color: ${(props: StyledProps) => props.schemaStyled.color};
  border: 1px solid ${(props: StyledProps) => props.schemaStyled.border};
  border-radius: 0.2em;
  transition: 0.4s;
  &:hover {
    background: ${(props: StyledProps) => props.schemaStyled.bgHover};
    border-color: ${(props: StyledProps) => props.schemaStyled.borderHover};
    cursor: pointer;
  }
`;

const MyButtonOutline = styled.button`
  font-size: ${(props: StyledProps) => props.sizeStyled};
  background: none;
  color: ${(props: StyledProps) => props.schemaStyled.border};
  border: 1px solid ${(props: StyledProps) => props.schemaStyled.border};
  border-radius: 0.2em;
  transition: 0.4s;
  &:hover {
    background: ${(props: StyledProps) => props.schemaStyled.bgHover};
    border-color: ${(props: StyledProps) => props.schemaStyled.borderHover};
    color: ${(props: StyledProps) => props.schemaStyled.color};
    cursor: pointer;
  }
`;

const MyButtonGhost = styled(MyButtonOutline)`
  border: none;
  background: none;
  color: ${(props: StyledProps) => props.schemaStyled.border};
  &:hover {
    opacity: 0.7;
  }
`;

const MyButtonLink = styled(MyButtonSolid)`
  // Link
  color: ${(props: StyledProps) => props.schemaStyled.border};
  border: none;
  background: none;
  &:hover {
    text-decoration: underline;
    background: none;
  }
`;

export function Button(props: ButtonProps) {
  const schema = schemaColor(props.bgColor);
  const size = caculateSize(props.size);

  const RenderButtonType = () => {
    if (props.variant === "solid")
      return (
        <MyButtonSolid
          onClick={props.onClick}
          sizeStyled={size}
          schemaStyled={schema}>
          {props.children}
        </MyButtonSolid>
      );
    else if (props.variant === "outline")
      return (
        <MyButtonOutline
          onClick={props.onClick}
          sizeStyled={size}
          schemaStyled={schema}>
          {props.children}
        </MyButtonOutline>
      );
    else if (props.variant === "ghost")
      return (
        <MyButtonGhost
          onClick={props.onClick}
          sizeStyled={size}
          schemaStyled={schema}>
          {props.children}
        </MyButtonGhost>
      );
    else if (props.variant === "link")
      return (
        <MyButtonLink
          onClick={props.onClick}
          sizeStyled={size}
          schemaStyled={schema}>
          {props.children}
        </MyButtonLink>
      );
    else
      return (
        <MyButtonSolid
          onClick={props.onClick}
          sizeStyled={size}
          schemaStyled={schema}>
          {props.children}
        </MyButtonSolid>
      );
  };
  return <>{RenderButtonType()}</>;
}

Button.defaultProps = {
  size: "xs",
  bgColor: "default",
  variant: "solid",
  onClick: undefined,
};
