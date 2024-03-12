import { SvgProps } from "react-native-svg";

export interface SVGProps extends SvgProps {
  maxWidth: number | string;
  maxHeight: number | string;
  outline?: boolean;
}
