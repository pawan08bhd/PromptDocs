import {
  Brain,
  Layers,
  Zap,
  Code2,
  Shield,
  Trophy,
  Home,
  ArrowRight,
} from "lucide-react";
import { BIOMES, XP_TABLE } from "../data/topicsData.js";

const HOME_CARDS = [
  {
    icon: Brain,
    title: "What Is Prompt Engineering?",
    desc: "The science of designing inputs that guide AI to produce exactly the output you need.",
    c: "#b8ff3c",
    f: "float-1",
  },
  {
    icon: Layers,
    title: "Types of Prompts",
    desc: "Zero-shot, few-shot, CoT, role-based — each unlocks different model capabilities.",
    c: "#00ffd5",
    f: "float-2",
  },
  {
    icon: Zap,
    title: "Advanced Techniques",
    desc: "ReAct, Tree-of-Thought, Self-Consistency — state-of-the-art reasoning strategies.",
    c: "#c084fc",
    f: "float-3",
  },
  {
    icon: Code2,
    title: "Real Examples",
    desc: "Copy-ready, structured templates for code, writing, data, and analysis tasks.",
    c: "#fbbf24",
    f: "float-1",
  },
  {
    icon: Shield,
    title: "Best Practices",
    desc: "The principles that separate good prompts from exceptional ones.",
    c: "#fb7185",
    f: "float-2",
  },
  {
    icon: Trophy,
    title: "Gamified Learning",
    desc: "Earn XP, unlock achievements, and level up as you master each concept.",
    c: "#34d399",
    f: "float-3",
  },
];

function HomePage({ setPage, accent, game, dispatch }) {
  return (
    <div
      id="s-welcome"
      className="grid-bg"
      style={{ minHeight: "100vh", position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "30%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle,rgba(${BIOMES.home.rgb},.06),transparent)`,
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{ maxWidth: 900, margin: "0 auto", padding: "72px 24px 36px" }}
      >
        {/* Status */}
        <div
          className="fade-up"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 26,
          }}
        >
          <div
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: accent,
              boxShadow: `0 0 10px ${accent}`,
            }}
          />
          <span
            style={{
              fontFamily: "var(--f-mono)",
              fontSize: ".62rem",
              letterSpacing: ".15em",
              color: "rgba(255,255,255,.35)",
            }}
          >
            NEURAL_OS v3.0 · GAMIFIED · 6 MODULES
          </span>
        </div>
        {/* Hero */}
        <h1
          className="glitch-hero fade-up d1"
          data-t="PROMPT"
          style={{
            fontFamily: "var(--f-hero)",
            fontSize: "clamp(70px,14vw,148px)",
            color: "#fff",
            letterSpacing: "-.01em",
            lineHeight: 0.9,
            display: "block",
          }}
        >
          PROMPT
        </h1>
        <h1
          className="fade-up d2"
          style={{
            fontFamily: "var(--f-hero)",
            fontSize: "clamp(70px,14vw,148px)",
            color: accent,
            letterSpacing: "-.01em",
            lineHeight: 0.9,
            textShadow: `0 0 60px ${accent}44`,
            display: "block",
          }}
        >
          ENGINEERING
        </h1>
        <div className="fade-up d3" style={{ marginTop: 22 }}>
          <span
            className="typewriter"
            style={{
              fontFamily: "var(--f-mono)",
              fontSize: ".85rem",
              letterSpacing: ".04em",
              color: "rgba(255,255,255,.5)",
            }}
          >
            Master AI communication. Earn XP. Level up._
          </span>
        </div>
        {/* Stats */}
        <div
          className="fade-up d4"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 32,
            marginTop: 36,
            paddingTop: 28,
            borderTop: "1px solid rgba(255,255,255,.06)",
          }}
        >
          {[
            [6, "Modules"],
            [20, "Templates"],
            [7, "Achievements"],
            ["∞", "Possibilities"],
          ].map(([n, l]) => (
            <div key={l}>
              <div
                style={{
                  fontFamily: "var(--f-hero)",
                  fontSize: "1.8rem",
                  color: accent,
                  lineHeight: 1,
                }}
              >
                {n}
              </div>
              <div
                style={{
                  fontFamily: "var(--f-mono)",
                  fontSize: ".58rem",
                  letterSpacing: ".1em",
                  color: "rgba(255,255,255,.28)",
                  marginTop: 3,
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
        {/* CTAs */}
        <div
          className="fade-up d5"
          style={{ display: "flex", gap: 10, marginTop: 28 }}
        >
          <button
            onClick={() => {
              setPage("intro");
              window.scrollTo(0, 0);
            }}
            data-h
            className="shimmer-btn"
            style={{
              padding: "11px 24px",
              borderRadius: 8,
              fontFamily: "var(--f-mono)",
              fontSize: ".7rem",
              letterSpacing: ".1em",
              fontWeight: 700,
              color: "#050508",
              display: "flex",
              alignItems: "center",
              gap: 8,
              border: "none",
            }}
          >
            ENTER THE SYSTEM <ArrowRight size={14} />
          </button>
          <button
            onClick={() => {
              setPage("examples");
              window.scrollTo(0, 0);
            }}
            data-h
            style={{
              padding: "11px 24px",
              borderRadius: 8,
              fontFamily: "var(--f-mono)",
              fontSize: ".7rem",
              letterSpacing: ".1em",
              color: "rgba(255,255,255,.55)",
              background: "rgba(255,255,255,.04)",
              border: "1px solid rgba(255,255,255,.09)",
            }}
          >
            VIEW TEMPLATES
          </button>
        </div>
      </div>

      {/* XP onboarding callout */}
      <div
        id="s-overview"
        style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 24px" }}
      >
        <div
          className="fade-up"
          style={{
            padding: 20,
            borderRadius: 12,
            background: "rgba(255,215,0,.06)",
            border: "1px solid rgba(255,215,0,.14)",
            display: "flex",
            gap: 16,
            alignItems: "flex-start",
          }}
        >
          <Trophy
            size={20}
            style={{ color: "#ffd700", flexShrink: 0, marginTop: 2 }}
          />
          <div>
            <div
              style={{
                fontFamily: "var(--f-mono)",
                fontSize: ".65rem",
                letterSpacing: ".1em",
                color: "#ffd700",
                marginBottom: 6,
              }}
            >
              HOW XP WORKS
            </div>
            <p
              style={{
                fontSize: ".86rem",
                color: "rgba(255,255,255,.55)",
                lineHeight: 1.65,
              }}
            >
              Complete sections{" "}
              <span style={{ color: "#b8ff3c" }}>+{XP_TABLE.section}XP</span> ·
              Answer quizzes correctly{" "}
              <span style={{ color: "#b8ff3c" }}>+{XP_TABLE.quiz}XP</span> ·
              Copy templates{" "}
              <span style={{ color: "#b8ff3c" }}>+{XP_TABLE.copy}XP</span> ·
              Unlock achievements for bonus XP. Every 200 XP = new level. Reach{" "}
              <strong style={{ color: "#fff" }}>Master</strong> rank at 1000 XP.
            </p>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div
        id="s-modules"
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 24px 72px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
          gap: 14,
        }}
      >
        {HOME_CARDS.map((c, i) => (
          <div
            key={c.title}
            className={`glow-card fade-up d${i + 1} ${c.f}`}
            style={{ padding: 22 }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 9,
                background: `${c.c}16`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 14,
              }}
            >
              <c.icon size={17} style={{ color: c.c }} />
            </div>
            <div
              style={{
                fontFamily: "var(--f-mono)",
                fontSize: ".62rem",
                letterSpacing: ".1em",
                color: c.c,
                marginBottom: 7,
              }}
            >
              {c.title.toUpperCase()}
            </div>
            <p
              style={{
                fontSize: ".84rem",
                color: "rgba(255,255,255,.5)",
                lineHeight: 1.65,
              }}
            >
              {c.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
