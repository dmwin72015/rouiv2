import React from "react";
import Dialog from "../Root";
import DialogPortal from "../Portal";
import DialogContent from "../Content";
import DialogOverlay from "../Overlay";

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
      <div style={{ height: 3000 }}></div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogPortal className="roui-dialog">
          <DialogOverlay className="fixed inset-0 bg-black/50 z-[1000] fade roui-overlay" />
          <div className="fixed inset-0 z-[1000] overflow-auto">
            <DialogContent className="slide" asChild>
              <div className="relative mt-[40px] mb-5 bg-white rounded p-4 z-[1000] w-[420px] mx-auto">
                <ul>
                  <li>
                    <div> 这里是内容区域</div>
                  </li>
                  <li>
                    <div> 这里是内容区域</div>
                  </li>
                  <li>
                    <div> 这里是内容区域</div>
                  </li>{" "}
                  <li>
                    <div> 这里是内容区域</div>
                  </li>{" "}
                  <li>
                    <div> 这里是内容区域</div>
                  </li>{" "}
                  <li>
                    <div> 这里是内容区域</div>
                  </li>{" "}
                  <li>
                    <div> 这里是内容区域</div>
                  </li>{" "}
                  <li>
                    <div> 这里是内容区域</div>
                  </li>{" "}
                  <li>
                    <div> 这里是内容区域</div>
                  </li>{" "}
                  <li>
                    <div> 这里是内容区域</div>
                  </li>
                  <li>
                    <div> 这里是内容区域</div>
                  </li>
                  <li>
                    <div> 这里是内容区域</div>
                  </li>
                  <li>
                    <div> 这里是内容区域</div>
                  </li>{" "}
                  <li>
                    <div> 这里是内容区域</div>
                  </li>{" "}
                </ul>
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
    </div>
  );
};

export default DialogDemo;
