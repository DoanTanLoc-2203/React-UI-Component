import * as React from "react";
import styled from "styled-components";
import {
  dangerColor,
  defaultColor,
  infoColor,
  primaryColor,
  successColor,
  TableColor,
  warningColor,
} from "./color";
import {
  BackgroundColor,
  BackgroundColorType,
  Size,
  SizeType,
  Variant,
  VariantType,
} from "./constants";

interface StyledProps {
  sizeStyled: string;
  schemaStyled: TableColor;
}

interface InputProps {
  placeholder?: string;
  size?: Size | string;
  variant?: Variant;
  bgColor?: BackgroundColor;
  onChange?: (value?: any) => void;
}

const caculateSize = (size: string | undefined) => {
  /* xs, sm, md, lg, or xl */
  if (size === SizeType.XS) return "10px";
  else if (size === SizeType.SM) return "15px";
  else if (size === SizeType.MD) return "20px";
  else if (size === SizeType.LG) return "25px";
  else if (size === SizeType.XL) return "30px";
  else return "10px";
};

const caculateColorScheme = (bgColor: string) => {
  /* default, danger, primary, success , warning, info*/
  if (bgColor === BackgroundColorType.DEFAULT) return defaultColor;
  else if (bgColor === BackgroundColorType.DANGER) return dangerColor;
  else if (bgColor === BackgroundColorType.PRIMARY) return primaryColor;
  else if (bgColor === BackgroundColorType.SUCCESS) return successColor;
  else if (bgColor === BackgroundColorType.INFO) return infoColor;
  else if (bgColor === BackgroundColorType.WARNING) return warningColor;
  else return defaultColor;
};

const schemaColor = (bgColor: string | undefined) => {
  if (bgColor) return caculateColorScheme(bgColor);
  else return defaultColor;
};

const MyInputOutline = styled.input`
  font-size: ${(props: StyledProps) => props.sizeStyled};
  padding: 5px;
  border: 1px solid ${(props: StyledProps) => props.schemaStyled.border};
  border-radius: 0.2em;
  width: 100%;
  color: ${(props: StyledProps) => props.schemaStyled.color};
  &::placeholder {
    color: ${(props: StyledProps) => props.schemaStyled.borderHover};
  }
  &:hover {
    border-color: ${(props: StyledProps) => props.schemaStyled.borderHover};
  }
  &:focus {
    color: ${(props: StyledProps) => props.schemaStyled.color};
    outline-color: ${(props: StyledProps) => props.schemaStyled.borderHover};
  }
`;
const MyInputFlushed = styled(MyInputOutline)`
  outline: none;
  border: none;
  border-radius: 0;
  border-bottom: 0.1em solid
    ${(props: StyledProps) => props.schemaStyled.border};
  &:focus {
    border-bottom: 0.1em solid
      ${(props: StyledProps) => props.schemaStyled.borderHover};
  }
`;
const MyInputUnstyled = styled(MyInputFlushed)`
  border: none;
  outline: none;
  &:focus {
    border: none;
  }
`;
const MyInputFilled = styled(MyInputOutline)`
  background-color: ${(props: StyledProps) => props.schemaStyled.bg};
  border: none;
  &:hover {
    background-color: ${(props: StyledProps) => props.schemaStyled.bgHover};
  }
  &:focus {
    background-color: ${(props: StyledProps) => props.schemaStyled.bgHover};
  }
`;

export function Input(props: InputProps) {
  const size = caculateSize(props.size);
  const schema = schemaColor(props.bgColor);
  const renderInput = () => {
    if (props.variant === VariantType.OUTLINE)
      return (
        <MyInputOutline
          sizeStyled={size}
          schemaStyled={schema}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      );
    else if (props.variant === VariantType.FLUSHED)
      return (
        <MyInputFlushed
          sizeStyled={size}
          schemaStyled={schema}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      );
    else if (props.variant === VariantType.UNSTYLED)
      return (
        <MyInputUnstyled
          sizeStyled={size}
          schemaStyled={schema}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      );
    else if (props.variant === VariantType.FILLED)
      return (
        <MyInputFilled
          sizeStyled={size}
          schemaStyled={schema}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      );
    else
      return (
        <MyInputOutline
          sizeStyled={size}
          schemaStyled={schema}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      );
  };
  return <>{renderInput()}</>;
}

Input.defaultProps = {
  placeholder: "",
  size: SizeType.MD,
  variant: VariantType.OUTLINE,
  bgColor: BackgroundColorType.DEFAULT,
  onChange: undefined,
};
