import { createContextScope } from "@radix-ui/react-context";
import { createPopperScope } from "@radix-ui/react-popper";

const PopoverName = "Popover";

const [createPopoverContext, createPopoverScope] = createContextScope(
  PopoverName,
  [createPopperScope]
);
