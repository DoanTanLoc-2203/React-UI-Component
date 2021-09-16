import * as React from "react";
import styled from "styled-components";
import { Size } from "./type";

interface StyledProps {
  sizeStyled: string;
}

interface InputProps {
  placeholder?: string;
  size?: Size;
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

const MyInput = styled.input`
  font-size: ${(props: StyledProps) => props.sizeStyled};
  width: 100%;
`;

export function Input(props: InputProps) {
  const size = caculateSize(props.size);
  return (
    <>
      <MyInput sizeStyled={size} placeholder={props.placeholder} />
    </>
  );
}

Input.defaultProps = {
  placeholder: "",
  size: "md",
};
