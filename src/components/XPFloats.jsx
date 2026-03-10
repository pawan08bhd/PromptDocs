import { useEffect } from "react";

function XPFloats({ floats, dispatch }) {
  useEffect(() => {
    floats.forEach((f) => {
      setTimeout(() => dispatch({ type: "CLEAR_FLOAT", id: f.id }), 950);
    });
  }, [floats, dispatch]);
  return (
    <>
      {floats.map((f) => (
        <div
          key={f.id}
          className="xp-float"
          style={{ left: f.x, top: f.y, color: "var(--accent)" }}
        >
          +{f.amount} XP
        </div>
      ))}
    </>
  );
}

export default XPFloats;
