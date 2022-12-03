import { FC, useState } from "react";
import { usePopperTooltip } from "react-popper-tooltip";
import "react-popper-tooltip/dist/styles.css";

type Props = {
  children: React.ReactNode;
};
export const Tooltip: FC<Props> = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const { getArrowProps, getTooltipProps, setTooltipRef, setTriggerRef, visible } = usePopperTooltip({
    trigger: "click",
    placement: "top",
    closeOnOutsideClick: false,
    visible: isVisible,
    onVisibleChange: setIsVisible,
    offset: [0, 0],
  });
  return (
    <>
      <div style={{ width: "200px" }} ref={setTriggerRef}>
        {props.children}
      </div>
      {visible && (
        <div ref={setTooltipRef} {...getTooltipProps({ className: "tooltip-container" })}>
          click!!
          <div {...getArrowProps({ className: "tooltip-arrow" })} />
        </div>
      )}
    </>
  );
};
