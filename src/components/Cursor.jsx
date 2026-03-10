import { useRef, useEffect } from "react";

function Cursor({ color }) {
  const dotRef = useRef(null),
    ringRef = useRef(null),
    pos = useRef({ x: 0, y: 0 }),
    ring = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);
    let raf;
    const lerp = (a, b, t) => a + (b - a) * t;
    const animate = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.12);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.12);
      if (dotRef.current) {
        dotRef.current.style.left = pos.current.x + "px";
        dotRef.current.style.top = pos.current.y + "px";
      }
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + "px";
        ringRef.current.style.top = ring.current.y + "px";
      }
      raf = requestAnimationFrame(animate);
    };
    animate();
    const onE = () => ringRef.current?.classList.add("hov"),
      onL = () => ringRef.current?.classList.remove("hov");
    document.querySelectorAll("[data-h]").forEach((el) => {
      el.addEventListener("mouseenter", onE);
      el.addEventListener("mouseleave", onL);
    });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ background: color }} />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ borderColor: color + "66" }}
      />
    </>
  );
}

export default Cursor;
