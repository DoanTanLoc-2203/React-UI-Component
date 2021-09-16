import React from "react";
import { TableColor } from "./color";
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
export declare function Button(props: ButtonProps): JSX.Element;
export declare namespace Button {
    var defaultProps: {
        size: string;
        bgColor: string;
        variant: string;
        onClick: undefined;
    };
}
