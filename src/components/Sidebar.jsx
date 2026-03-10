import React from "react";
import { Check } from "lucide-react";
import { PAGE_NAV, PAGE_SUBTOPICS } from "../data/topicsData.js";

function LeftSidebar({ page, game, isOpen }) {
  const subtopics = PAGE_SUBTOPICS[page] || [];
  const [active, setActive] = React.useState(subtopics[0]?.id || "");
  const totalSections = subtopics.filter(
    (s) => s.id !== "s-quiz" && s.id !== "s-cert",
  ).length;
  const doneSections = subtopics.filter(
    (s) => game.completedSections[`${page}_${s.id}`],
  ).length;
  const chapPct =
    totalSections > 0 ? Math.round((doneSections / totalSections) * 100) : 0;

  React.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );
    subtopics.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [subtopics, page]);

  return (
    <div className={`left-sidebar ${isOpen ? "open" : ""}`}>
      {/* Chapter progress */}
      <div
        style={{
          padding: "16px 16px 10px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--f-mono)",
            fontSize: ".58rem",
            letterSpacing: ".12em",
            color: "rgba(255,255,255,.3)",
            marginBottom: 6,
          }}
        >
          CHAPTER PROGRESS
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 8,
          }}
        >
          <div
            style={{
              flex: 1,
              height: 3,
              background: "rgba(255,255,255,.05)",
              borderRadius: 2,
            }}
          >
            <div
              style={{
                height: "100%",
                background: "var(--accent)",
                borderRadius: 2,
                width: `${chapPct}%`,
                transition: "width .4s ease",
                boxShadow: "0 0 8px rgba(var(--accent-rgb),.5)",
              }}
            />
          </div>
          <span
            style={{
              fontFamily: "var(--f-mono)",
              fontSize: ".58rem",
              color: "var(--accent)",
            }}
          >
            {chapPct}%
          </span>
        </div>
        <div style={{ fontSize: ".72rem", color: "rgba(255,255,255,.35)" }}>
          {doneSections}/{totalSections} sections done
        </div>
      </div>

      {/* Subtopics */}
      <div style={{ padding: "8px 0" }}>
        <div
          style={{
            fontFamily: "var(--f-mono)",
            fontSize: ".55rem",
            letterSpacing: ".15em",
            color: "rgba(255,255,255,.2)",
            padding: "6px 16px 4px",
          }}
        >
          ON THIS PAGE
        </div>
        {subtopics.map((s, i) => {
          const isDone = game.completedSections[`${page}_${s.id}`];
          const isQuiz = s.id === "s-quiz" || s.id === "s-cert";
          return (
            <div
              key={s.id}
              className={`sub-item ${active === s.id ? "active" : ""} ${isDone ? "done" : ""}`}
              onClick={() => {
                const el = document.getElementById(s.id);
                if (el)
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              data-h
            >
              <div
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background:
                    active === s.id ? "var(--accent)" : "rgba(255,255,255,.15)",
                  flexShrink: 0,
                  boxShadow:
                    active === s.id
                      ? "0 0 6px rgba(var(--accent-rgb),.6)"
                      : "none",
                  transition: "all .2s",
                }}
              />
              <span style={{ flex: 1 }}>{s.title}</span>
              {isDone && (
                <div className="sub-check">
                  <Check size={10} style={{ color: "var(--accent)" }} />
                </div>
              )}
              {isQuiz && !isDone && (
                <span
                  style={{ fontSize: ".6rem", color: "#fbbf24", opacity: 0.6 }}
                >
                  ⚡
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* All chapters mini-map */}
      <div
        style={{
          padding: "10px 16px",
          borderTop: "1px solid var(--border)",
          marginTop: "auto",
        }}
      >
        <div
          style={{
            fontFamily: "var(--f-mono)",
            fontSize: ".55rem",
            letterSpacing: ".15em",
            color: "rgba(255,255,255,.2)",
            marginBottom: 10,
          }}
        >
          ALL MODULES
        </div>
        {PAGE_NAV.map((n, i) => {
          const subs = PAGE_SUBTOPICS[n.id] || [];
          const done = subs.filter(
            (s) => game.completedSections[`${n.id}_${s.id}`],
          ).length;
          const total = subs.filter(
            (s) => s.id !== "s-quiz" && s.id !== "s-cert",
          ).length;
          const complete = total > 0 && done >= total;
          return (
            <div
              key={n.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 6,
                opacity: n.id === page ? 1 : 0.5,
                transition: "opacity .2s",
              }}
            >
              <div
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: complete
                    ? "var(--accent)"
                    : "rgba(255,255,255,.15)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--f-mono)",
                  fontSize: ".6rem",
                  letterSpacing: ".06em",
                  color:
                    n.id === page ? "var(--accent)" : "rgba(255,255,255,.35)",
                  flex: 1,
                }}
              >
                {n.short}
              </span>
              {complete && (
                <Check size={9} style={{ color: "var(--accent)" }} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LeftSidebar;
