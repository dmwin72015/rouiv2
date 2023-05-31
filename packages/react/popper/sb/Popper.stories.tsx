import type { Meta } from "@storybook/react";
import React, { useRef, useState } from "react";
import { Portal } from "@radix-ui/react-portal";
import { Popper, PopperContent, PopperAnchor } from "../src/";

import "./style.scss";
import PopperArrow from "../src/Arrow";

const meta = {
  title: "Popper",
  component: Popper,
} satisfies Meta<typeof Popper>;

export default meta;

export const ControllDemo = (props: any) => {
  const [open, setOpen] = useState<boolean>(false);
  const arrowRef = useRef<HTMLDivElement>(null);

  const onRender = () => {
    console.log(">>> onPlaced");
  };

  return (
    <div>
      <Popper>
        <div
          className="flex justify-center pt-4"
          style={{ textAlign: "center" }}
        >
          <PopperAnchor>
            <button
              onPointerDown={() => setOpen(true)}
              className="bg-blue-500 text-white text-sm py-0.5 px-2"
            >
              显示
            </button>
          </PopperAnchor>
        </div>
        <Portal>
          <PopperContent
            sideOffset={5}
            onPlaced={onRender}
            style={{
              zIndex: 1000,
            }}
          >
            <PopperArrow></PopperArrow>
            <div className="p-2 shadow-md rounded text-sm">
              我动画设计的撒的撒
            </div>
          </PopperContent>
        </Portal>
      </Popper>
      {/* <PopperContent></PopperContent> */}
    </div>
  );
};

export const Demo2 = () => {
  return (
    <MyDiv name="123">
      <h3>title</h3>
      <p>content</p>
      <div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <Slottable>asdasd</Slottable>
      </div>
    </MyDiv>
  );
};

function MyDiv(props: any) {
  const { children, ...slotProps } = props;
  const childrenArray = React.Children.toArray(children);

  console.log(childrenArray);
  return <div>{children}</div>;
}

function isSlottable(child: React.ReactNode): child is React.ReactElement {
  return React.isValidElement(child) && child.type === Slottable;
}

const Slottable = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
