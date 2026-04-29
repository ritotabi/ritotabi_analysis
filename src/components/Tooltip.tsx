import React, { useState } from "react";
import { SLATE } from "../utils/colors";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  width?: number;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, width = 230 }) => {
  const [show, setShow] = useState(false);
  if (!content) return <>{children}</>;
  return (
    <span
      style={{ position: "relative", display: "inline-flex", alignItems: "center" }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <span style={{
          position: "absolute",
          bottom: "calc(100% + 6px)",
          left: "50%",
          transform: "translateX(-50%)",
          background: "#1e293b",
          border: "1px solid #334155",
          borderRadius: 8,
          padding: "9px 13px",
          fontSize: 11,
          color: "#94a3b8",
          lineHeight: 1.7,
          width,
          zIndex: 9999,
          whiteSpace: "normal",
          pointerEvents: "none",
          boxShadow: "0 4px 20px rgba(0,0,0,0.6)",
        }}>
          {content}
        </span>
      )}
    </span>
  );
};

export const HelpIcon: React.FC<{ content: string; width?: number }> = ({ content, width }) => (
  <Tooltip content={content} width={width}>
    <span style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      width: 13, height: 13, borderRadius: "50%",
      background: "#1e293b", border: "1px solid #334155",
      color: SLATE, fontSize: 8, fontFamily: "monospace",
      cursor: "help", flexShrink: 0, marginLeft: 3,
      lineHeight: 1,
    }}>?</span>
  </Tooltip>
);

export default Tooltip;
