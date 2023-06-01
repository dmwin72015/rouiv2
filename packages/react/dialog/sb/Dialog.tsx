import React from 'react';
import Dialog from '../src/Root';
import DialogPortal from '../src/Portal';
import DialogContent from '../src/Content';
import DialogOverlay from '../src/Overlay';

const DialogDemo = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-blue-500 px-2 py-1.5 rounded text-white"
      >
        显示2
      </button>
      <div className="h-[1200px] bg-red-400"></div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogPortal className="roui-dialog">
          <DialogOverlay className="fixed inset-0 bg-black/50 z-[1000] fade roui-overlay" />
          <div
            className="fixed inset-0 z-[1000] overflow-auto"
            onClick={(e) => {
              console.log(e);
            }}
            onPointerDown={(e) => {
              console.log(e);
            }}
          >
            <DialogContent
              className="slide"
              asChild
              onPointerDownOutside={(e) => {
                // e.preventDefault();
              }}
            >
              <div className="relative mt-[40px] mb-5 bg-white rounded p-4 z-[1000] w-[420px] mx-auto">
                <div className="h-[600px] bg-blue-400"></div>
                <button
                  onClick={() => setOpen(false)}
                  className="bg-blue-500 px-2 py-1.5 rounded text-white"
                >
                  关闭当前
                </button>
              </div>
            </DialogContent>
          </div>
        </DialogPortal>
      </Dialog>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-blue-500 px-2 py-1.5 rounded text-white"
      >
        显示2
      </button>
    </div>
  );
};

export default DialogDemo;
