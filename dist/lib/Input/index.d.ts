/// <reference types="react" />
import { BackgroundColor, BackgroundColorType, Size, SizeType, Variant, VariantType } from "./constants";
interface InputProps {
    placeholder?: string;
    size?: Size | string;
    variant?: Variant;
    bgColor?: BackgroundColor;
    onChange?: (value?: any) => void;
}
export declare function Input(props: InputProps): JSX.Element;
export declare namespace Input {
    var defaultProps: {
        placeholder: string;
        size: SizeType;
        variant: VariantType;
        bgColor: BackgroundColorType;
        onChange: undefined;
    };
}
export {};
