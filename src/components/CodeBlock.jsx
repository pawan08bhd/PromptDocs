import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { XP_TABLE } from "../data/topicsData.js";

function CodeBlock({ code, accent = "#b8ff3c", page, game, dispatch }) {
  const [copied, setCopied] = useState(false);
  const copy = async (e) => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    dispatch({ type: "COPY_PROMPT" });
    dispatch({
      type: "EARN_XP",
      amount: XP_TABLE.copy,
      x: e.clientX,
      y: e.clientY,
    });
    const newCount = game.copyCount + 1;
    if (newCount >= 5) dispatch({ type: "UNLOCK_ACHIEVEMENT", id: "copy_cat" });
  };
  return (
    <div
      style={{
        background: "#07070e",
        border: "1px solid rgba(255,255,255,.07)",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "9px 14px",
          background: "rgba(255,255,255,.02)",
          borderBottom: "1px solid rgba(255,255,255,.05)",
        }}
      >
        <div style={{ display: "flex", gap: 5 }}>
          {["#ff5f57", "#ffbd2e", "#28ca41"].map((c) => (
            <div
              key={c}
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: c,
                opacity: 0.8,
              }}
            />
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              fontFamily: "var(--f-mono)",
              fontSize: ".55rem",
              color: "rgba(255,255,255,.2)",
              letterSpacing: ".1em",
            }}
          >
            PROMPT
          </span>
          <button
            onClick={copy}
            data-h
            style={{
              fontFamily: "var(--f-mono)",
              fontSize: ".6rem",
              letterSpacing: ".06em",
              padding: "3px 9px",
              borderRadius: 4,
              background: copied
                ? "rgba(52,211,153,.15)"
                : "rgba(255,255,255,.05)",
              border: `1px solid ${copied ? "rgba(52,211,153,.4)" : "rgba(255,255,255,.1)"}`,
              color: copied ? "#34d399" : "rgba(255,255,255,.45)",
              transition: "all .2s",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            {copied ? (
              <>
                <Check size={10} /> COPIED +{XP_TABLE.copy}XP
              </>
            ) : (
              <>
                <Copy size={10} /> COPY
              </>
            )}
          </button>
        </div>
      </div>
      <div style={{ padding: "18px 18px", display: "flex", gap: 14 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            opacity: 0.18,
            userSelect: "none",
            fontFamily: "var(--f-mono)",
            fontSize: ".7rem",
            lineHeight: 1.85,
            color: accent,
            minWidth: 18,
            textAlign: "right",
            flexShrink: 0,
          }}
        >
          {code.split("\n").map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
        <pre className="code-block" style={{ flex: 1 }}>
          {code}
        </pre>
      </div>
    </div>
  );
}

export default CodeBlock;
