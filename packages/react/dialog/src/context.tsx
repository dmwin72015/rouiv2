import { createContextScope } from "@radix-ui/react-context";

const DialogName = "Dialog";
const DialogPresenceName = "DialogPresence";
const DialogOverlayName = "DialogOverlay";
const DialogContentName = "DialogContent";
const DialogPortalName = "DialogPortal";

const [createDialogContext, createDialogScope] = createContextScope(DialogName);

const getState = (open: boolean) => (open ? "open" : "closed");

export {
  // const
  DialogName,
  DialogPresenceName,
  DialogOverlayName,
  DialogContentName,
  DialogPortalName,

  //   context
  createDialogContext,
  createDialogScope,

  // util
  getState,
};
