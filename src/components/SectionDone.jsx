import { CheckCircle2, Zap } from "lucide-react";
import { XP_TABLE } from "../data/topicsData.js";

function SectionDone({
  page,
  sectionId,
  label = "Mark Section Complete",
  game,
  dispatch,
  accent,
}) {
  const key = `${page}_${sectionId}`;
  const done = game.completedSections[key];
  const earn = (e) => {
    if (done) return;
    dispatch({ type: "COMPLETE_SECTION", page, section: sectionId });
    dispatch({
      type: "EARN_XP",
      amount: XP_TABLE.section,
      x: e.clientX,
      y: e.clientY,
    });
    // Check first_blood
    const total = Object.keys(game.completedSections).length;
    if (total === 0)
      dispatch({ type: "UNLOCK_ACHIEVEMENT", id: "first_blood" });
    // Half-way
    if (total === 2) dispatch({ type: "UNLOCK_ACHIEVEMENT", id: "half_way" });
  };
  return (
    <button
      className={`sec-complete-btn ${done ? "done" : ""}`}
      onClick={earn}
      data-h
    >
      {done ? (
        <>
          <CheckCircle2 size={14} /> COMPLETED +{XP_TABLE.section}XP
        </>
      ) : (
        <>
          <Zap size={14} style={{ color: accent }} /> {label}
        </>
      )}
    </button>
  );
}

export default SectionDone;
