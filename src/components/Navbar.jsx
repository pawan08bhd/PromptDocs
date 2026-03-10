import { Flame, Trophy, Terminal, ArrowRight } from "lucide-react";
import { PAGE_NAV, getRank, getLevelXP } from "../data/topicsData.js";

function Topbar({ page, setPage, biome, game, dispatch }) {
  const { xp } = game;
  const rank = getRank(xp);
  const lvl = getLevelXP(xp);
  const pct = (lvl.current / lvl.max) * 100;
  return (
    <div className="topbar">
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginRight: 16,
          flexShrink: 0,
          cursor: "pointer",
        }}
        onClick={() => {
          setPage("home");
          window.scrollTo(0, 0);
        }}
        data-h
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 7,
            background: `${biome.color}22`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Terminal size={13} style={{ color: biome.color }} />
        </div>
        <span
          style={{
            fontFamily: "var(--f-hero)",
            fontSize: "1rem",
            letterSpacing: ".1em",
            color: biome.color,
          }}
        >
          PROMPTDOCS
        </span>
      </div>
      {/* Nav pills */}
      <div
        style={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          scrollbarWidth: "none",
          flex: 1,
        }}
      >
        {PAGE_NAV.map((n) => (
          <button
            key={n.id}
            onClick={() => {
              setPage(n.id);
              window.scrollTo(0, 0);
            }}
            className={`nav-pill ${page === n.id ? "active" : ""}`}
            data-h
          >
            {n.short}
          </button>
        ))}
      </div>
      {/* XP / Rank */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginLeft: 12,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 2,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span
              style={{
                fontFamily: "var(--f-mono)",
                fontSize: ".58rem",
                letterSpacing: ".08em",
                color: "rgba(255,255,255,.35)",
              }}
            >
              LV.{lvl.level}
            </span>
            <div className="xp-bar-track">
              <div
                className="xp-bar-fill"
                style={{
                  width: `${pct}%`,
                  background: `linear-gradient(90deg,${biome.color},rgba(${biome.rgb},.5))`,
                }}
              />
            </div>
            <span
              style={{
                fontFamily: "var(--f-mono)",
                fontSize: ".58rem",
                color: "rgba(255,255,255,.3)",
              }}
            >
              {xp}XP
            </span>
          </div>
          <div className="rank-badge" style={{ fontSize: ".55rem" }}>
            {rank.icon} {rank.title}
          </div>
        </div>
        {/* Streak */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            padding: "4px 8px",
            borderRadius: 6,
            background: "rgba(255,100,0,.1)",
            border: "1px solid rgba(255,100,0,.2)",
          }}
        >
          <Flame size={11} style={{ color: "#ff6400" }} />
          <span
            style={{
              fontFamily: "var(--f-mono)",
              fontSize: ".6rem",
              color: "#ff6400",
              letterSpacing: ".06em",
            }}
          >
            {Math.min(7, Math.floor(xp / 80) + 1)}d
          </span>
        </div>
        {/* Achievements count */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            padding: "4px 8px",
            borderRadius: 6,
            background: "rgba(255,215,0,.08)",
            border: "1px solid rgba(255,215,0,.15)",
          }}
          data-h
        >
          <Trophy size={11} style={{ color: "#ffd700" }} />
          <span
            style={{
              fontFamily: "var(--f-mono)",
              fontSize: ".6rem",
              color: "#ffd700",
              letterSpacing: ".06em",
            }}
          >
            {game.achievements.length}/{6}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
