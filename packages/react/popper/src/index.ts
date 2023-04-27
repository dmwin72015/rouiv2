import Popper from "./Popper";
import PopperAnchor from "./Anchor";
import PopperContent from "./Content";
import PopperArrow from "./Arrow";
import { SideOptions, AlignOptions } from "./interface";

const Root = Popper;
const Anchor = PopperAnchor;
const Content = PopperContent;
const Arrow = PopperArrow;

export type {
  PopperProps,
  PopperAnchorProps,
  PopperContentProps,
  PopperArrowProps,
} from "./interface";

export { createPopperScope } from "./Popper";

export {
  Popper,
  PopperAnchor,
  PopperArrow,
  PopperContent,
  Root,
  Anchor,
  Content,
  Arrow,
  SideOptions,
  AlignOptions,
};
