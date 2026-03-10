import { useState } from "react";
import { HelpCircle } from "lucide-react";
import { XP_TABLE } from "../data/topicsData.js";

function Quiz({ q, opts, correct, page, game, dispatch, accent }) {
  const key = `${page}_s-quiz`;
  const [sel, setSel] = useState(null);
  const done = game.completedSections[key];
  const pick = (i, e) => {
    if (sel !== null || done) return;
    setSel(i);
    if (i === correct) {
      dispatch({ type: "QUIZ_CORRECT" });
      dispatch({
        type: "EARN_XP",
        amount: XP_TABLE.quiz,
        x: e.clientX,
        y: e.clientY,
      });
      dispatch({ type: "COMPLETE_SECTION", page, section: "s-quiz" });
      const qc = game.quizCorrect + 1;
      if (qc >= 5) dispatch({ type: "UNLOCK_ACHIEVEMENT", id: "quiz_ace" });
    }
  };
  const status = sel === null ? null : sel === correct ? "correct" : "wrong";
  return (
    <div id="s-quiz" className="quiz-wrap">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 16,
        }}
      >
        <HelpCircle size={16} style={{ color: accent }} />
        <span
          style={{
            fontFamily: "var(--f-mono)",
            fontSize: ".65rem",
            letterSpacing: ".12em",
            color: accent,
          }}
        >
          QUICK QUIZ · +{XP_TABLE.quiz}XP
        </span>
      </div>
      <p
        style={{
          fontSize: ".95rem",
          color: "rgba(255,255,255,.8)",
          marginBottom: 16,
          lineHeight: 1.6,
        }}
      >
        {q}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {opts.map((o, i) => (
          <button
            key={i}
            onClick={(e) => pick(i, e)}
            className={`quiz-opt ${sel === i ? (i === correct ? "correct" : "wrong") : sel !== null && i === correct ? "correct" : ""}`}
            disabled={sel !== null}
            data-h
          >
            {o}
          </button>
        ))}
      </div>
      {sel !== null && (
        <div
          style={{
            marginTop: 14,
            padding: "10px 14px",
            borderRadius: 8,
            background:
              status === "correct"
                ? "rgba(52,211,153,.08)"
                : "rgba(248,113,113,.08)",
            border: `1px solid ${status === "correct" ? "rgba(52,211,153,.25)" : "rgba(248,113,113,.25)"}`,
          }}
        >
          <span
            style={{
              fontSize: ".83rem",
              color: status === "correct" ? "#34d399" : "#f87171",
            }}
          >
            {status === "correct"
              ? `🎯 Correct! +${XP_TABLE.quiz} XP earned!`
              : "❌ Not quite — the highlighted answer is correct. Keep going!"}
          </span>
        </div>
      )}
    </div>
  );
}

export default Quiz;
