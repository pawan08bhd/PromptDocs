import { useEffect } from "react";
import { ACHIEVEMENTS, BIOMES } from "../data/topicsData.js";

function AchievementToast({ achieveId, dispatch, accent }) {
  const ach = ACHIEVEMENTS.find((a) => a.id === achieveId);
  useEffect(() => {
    const t = setTimeout(() => dispatch({ type: "CLEAR_ACHIEVEMENT" }), 4200);
    return () => clearTimeout(t);
  }, [dispatch]);
  if (!ach) return null;
  return (
    <div
      className="achieve-toast"
      style={{ borderColor: `rgba(${BIOMES.intro.rgb},.3)` }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ fontSize: "2rem", lineHeight: 1 }}>{ach.icon}</div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: "var(--f-mono)",
              fontSize: ".58rem",
              letterSpacing: ".15em",
              color: accent,
              marginBottom: 3,
            }}
          >
            ACHIEVEMENT UNLOCKED
          </div>
          <div
            style={{
              fontFamily: "var(--f-hero)",
              fontSize: "1rem",
              letterSpacing: ".06em",
              color: "#fff",
            }}
          >
            {ach.title}
          </div>
          <div
            style={{
              fontSize: ".78rem",
              color: "rgba(255,255,255,.45)",
              marginTop: 2,
            }}
          >
            {ach.desc}
          </div>
        </div>
        <div
          style={{
            fontFamily: "var(--f-mono)",
            fontSize: ".7rem",
            color: accent,
          }}
        >
          +{ach.xp}
        </div>
      </div>
      <div
        style={{
          marginTop: 10,
          height: 2,
          background: "rgba(255,255,255,.06)",
          borderRadius: 1,
        }}
      >
        <div
          style={{
            height: "100%",
            background: accent,
            borderRadius: 1,
            animation: "xpFill 4s linear",
            width: "0%",
            transition: "width 4s linear",
          }}
        />
      </div>
    </div>
  );
}

export default AchievementToast;
