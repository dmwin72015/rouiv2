import * as React from "react";
import * as ReactDOM from "react-dom";
import { Slot } from "@radix-ui/react-slot";

const NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul",
] as const;

// Temporary while we await merge of this fix:
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/55396
// prettier-ignore
type PropsWithoutRef<P> = P extends any ? ('ref' extends keyof P ? Pick<P, Exclude<keyof P, 'ref'>> : P) : P;
type ComponentPropsWithoutRef<T extends React.ElementType> = PropsWithoutRef<
  React.ComponentProps<T>
>;

type Primitives = {
  [E in (typeof NODES)[number]]: PrimitiveForwardRefComponent<E>;
};
type PrimitivePropsWithRef<E extends React.ElementType> =
  React.ComponentPropsWithRef<E> & {
    asChild?: boolean;
  };

interface PrimitiveForwardRefComponent<E extends React.ElementType>
  extends React.ForwardRefExoticComponent<PrimitivePropsWithRef<E>> {}

/* -------------------------------------------------------------------------------------------------
 * Primitive
 * -----------------------------------------------------------------------------------------------*/

const Primitive = NODES.reduce((primitive, node) => {
  const Node = React.forwardRef(
    (props: PrimitivePropsWithRef<typeof node>, forwardedRef: any) => {
      const { asChild, ...primitiveProps } = props;
      const Comp: any = asChild ? Slot : node;

      React.useEffect(() => {
        (window as any)[Symbol.for("radix-ui")] = true;
      }, []);

      return <Comp {...primitiveProps} ref={forwardedRef} />;
    }
  );

  Node.displayName = `Primitive.${node}`;

  return { ...primitive, [node]: Node };
}, {} as Primitives);

function dispatchDiscreteCustomEvent<E extends CustomEvent>(
  target: E["target"],
  event: E
) {
  if (target) ReactDOM.flushSync(() => target.dispatchEvent(event));
}

/* -----------------------------------------------------------------------------------------------*/

const Root = Primitive;

export {
  Primitive,
  //
  Root,
  //
  dispatchDiscreteCustomEvent,
};
export type { ComponentPropsWithoutRef, PrimitivePropsWithRef };
