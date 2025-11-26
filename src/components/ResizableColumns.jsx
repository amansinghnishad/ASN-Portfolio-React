import { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const DEFAULT_INITIAL_WIDTHS = { left: 24, center: 26, right: 50 };
const DEFAULT_MIN_WIDTHS = { left: 16, center: 18, right: 28 };
const HANDLE_WIDTH = 12;

const ResizableColumns = ({
  panels,
  initialWidths,
  minWidths,
  className,
  handleClassName,
  style,
}) => {
  const mergedInitial = { ...DEFAULT_INITIAL_WIDTHS, ...initialWidths };
  const mergedMin = { ...DEFAULT_MIN_WIDTHS, ...minWidths };

  const [widths, setWidths] = useState(mergedInitial);
  const containerRef = useRef(null);
  const dragState = useRef({ active: false, handle: null });

  const clamp = useCallback(
    (value, min, max) => Math.min(Math.max(value, min), max),
    []
  );

  const updateFromPosition = useCallback(
    (clientX) => {
      if (!dragState.current.active || !containerRef.current) {
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      const percent = ((clientX - rect.left) / rect.width) * 100;

      setWidths((prev) => {
        if (dragState.current.handle === "left-center") {
          const maxLeft = 100 - prev.right - mergedMin.center;
          const left = clamp(percent, mergedMin.left, maxLeft);
          const center = 100 - prev.right - left;
          return { left, center, right: prev.right };
        }

        if (dragState.current.handle === "center-right") {
          const maxRight = 100 - prev.left - mergedMin.center;
          const right = clamp(100 - percent, mergedMin.right, maxRight);
          const center = 100 - prev.left - right;
          return { left: prev.left, center, right };
        }

        return prev;
      });
    },
    [clamp, mergedMin.center, mergedMin.left, mergedMin.right]
  );

  const handleMouseMove = useCallback(
    (event) => {
      updateFromPosition(event.clientX);
    },
    [updateFromPosition]
  );

  const handleTouchMove = useCallback(
    (event) => {
      if (event.touches.length > 0) {
        event.preventDefault();
        updateFromPosition(event.touches[0].clientX);
      }
    },
    [updateFromPosition]
  );

  const adjustWidths = useCallback(
    (handle, delta) => {
      setWidths((prev) => {
        if (handle === "left-center") {
          const maxLeft = 100 - prev.right - mergedMin.center;
          const left = clamp(prev.left + delta, mergedMin.left, maxLeft);
          const center = 100 - prev.right - left;
          return { left, center, right: prev.right };
        }

        if (handle === "center-right") {
          const maxRight = 100 - prev.left - mergedMin.center;
          const right = clamp(prev.right - delta, mergedMin.right, maxRight);
          const center = 100 - prev.left - right;
          return { left: prev.left, center, right };
        }

        return prev;
      });
    },
    [clamp, mergedMin.center, mergedMin.left, mergedMin.right]
  );

  const stopDragging = useCallback(() => {
    if (!dragState.current.active) {
      return;
    }

    dragState.current = { active: false, handle: null };
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", stopDragging);
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", stopDragging);
    window.removeEventListener("touchcancel", stopDragging);
  }, [handleMouseMove, handleTouchMove]);

  useEffect(() => {
    return () => {
      stopDragging();
    };
  }, [stopDragging]);

  const startDragging = useCallback(
    (handle) => (event) => {
      event.preventDefault();
      dragState.current = { active: true, handle };
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";

      const clientX =
        "touches" in event ? event.touches[0].clientX : event.clientX;
      updateFromPosition(clientX);

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", stopDragging);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", stopDragging);
      window.addEventListener("touchcancel", stopDragging);
    },
    [handleMouseMove, handleTouchMove, stopDragging, updateFromPosition]
  );

  const handleKeyboardResize = useCallback(
    (handle) => (event) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        const direction = event.key === "ArrowRight" ? 1 : -1;
        const step = event.shiftKey ? 4 : 2;
        adjustWidths(handle, direction * step);
      }
    },
    [adjustWidths]
  );

  const resolvedHandleClass = [
    "group relative hidden h-full w-full cursor-col-resize items-center justify-center rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent lg:flex",
    handleClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={containerRef}
      style={{
        "--col-left": `${widths.left}fr`,
        "--col-center": `${widths.center}fr`,
        "--col-right": `${widths.right}fr`,
        "--handle-width": `${HANDLE_WIDTH}px`,
        ...style,
      }}
      className={[
        "grid h-full min-h-0 grid-cols-1 gap-1 md:grid-cols-2",
        "lg:auto-rows-[minmax(0,1fr)] lg:items-stretch",
        "lg:[grid-template-columns:var(--col-left)_var(--handle-width)_var(--col-center)_var(--handle-width)_var(--col-right)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="min-h-0 lg:h-full">{panels.left}</div>

      <div
        role="separator"
        tabIndex={0}
        aria-orientation="vertical"
        aria-label="Resize left and center panels"
        onMouseDown={startDragging("left-center")}
        onTouchStart={startDragging("left-center")}
        onKeyDown={handleKeyboardResize("left-center")}
        className={resolvedHandleClass}
      >
        <span className="pointer-events-none h-16 w-px rounded-full bg-gradient-to-b from-borderSubtle/60 via-borderStrong/80 to-borderSubtle/60 transition-all duration-300 group-hover:from-accent/70 group-hover:via-accent/80 group-hover:to-accent/70 group-focus-visible:from-accent group-focus-visible:via-accent group-focus-visible:to-accent" />
      </div>

      <div className="min-h-0 lg:h-full">{panels.center}</div>

      <div
        role="separator"
        tabIndex={0}
        aria-orientation="vertical"
        aria-label="Resize center and right panels"
        onMouseDown={startDragging("center-right")}
        onTouchStart={startDragging("center-right")}
        onKeyDown={handleKeyboardResize("center-right")}
        className={resolvedHandleClass}
      >
        <span className="pointer-events-none h-16 w-px rounded-full bg-gradient-to-b from-borderSubtle/60 via-borderStrong/80 to-borderSubtle/60 transition-all duration-300 group-hover:from-accent/70 group-hover:via-accent/80 group-hover:to-accent/70 group-focus-visible:from-accent group-focus-visible:via-accent group-focus-visible:to-accent" />
      </div>

      <div className="min-h-0 overflow-hidden lg:h-full">{panels.right}</div>
    </div>
  );
};

ResizableColumns.propTypes = {
  panels: PropTypes.shape({
    left: PropTypes.node,
    center: PropTypes.node,
    right: PropTypes.node,
  }).isRequired,
  initialWidths: PropTypes.shape({
    left: PropTypes.number,
    center: PropTypes.number,
    right: PropTypes.number,
  }),
  minWidths: PropTypes.shape({
    left: PropTypes.number,
    center: PropTypes.number,
    right: PropTypes.number,
  }),
  className: PropTypes.string,
  handleClassName: PropTypes.string,
  style: PropTypes.object,
};

ResizableColumns.defaultProps = {
  initialWidths: DEFAULT_INITIAL_WIDTHS,
  minWidths: DEFAULT_MIN_WIDTHS,
  className: "",
  handleClassName: "",
  style: undefined,
};

export default ResizableColumns;
