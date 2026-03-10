import { useState, useEffect } from "react";

function Progress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const fn = () => {
      const el = document.documentElement;
      setPct(
        Math.min(
          100,
          (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100,
        ),
      );
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <div className="prog-bar">
      <div className="prog-fill" style={{ width: pct + "%" }} />
    </div>
  );
}

export default Progress;
