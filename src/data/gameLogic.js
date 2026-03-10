import { XP_TABLE, ACHIEVEMENTS } from "./topicsData.js";

const initGame = {
  xp: 0,
  completedSections: {},
  visitedPages: new Set(),
  achievements: [],
  quizCorrect: 0,
  copyCount: 0,
  chapterTimes: {},
  pendingAchievement: null,
  xpFloats: [],
};

function gameReducer(state, action) {
  switch (action.type) {
    case "EARN_XP": {
      const newXP = state.xp + action.amount;
      return {
        ...state,
        xp: newXP,
        xpFloats: [
          ...state.xpFloats,
          {
            id: Date.now(),
            amount: action.amount,
            x: action.x || 50,
            y: action.y || 50,
          },
        ],
      };
    }
    case "CLEAR_FLOAT":
      return {
        ...state,
        xpFloats: state.xpFloats.filter((f) => f.id !== action.id),
      };
    case "COMPLETE_SECTION": {
      const key = `${action.page}_${action.section}`;
      if (state.completedSections[key]) return state;
      return {
        ...state,
        completedSections: { ...state.completedSections, [key]: true },
      };
    }
    case "VISIT_PAGE": {
      const visited = new Set(state.visitedPages);
      visited.add(action.page);
      return { ...state, visitedPages: visited };
    }
    case "QUIZ_CORRECT":
      return { ...state, quizCorrect: state.quizCorrect + 1 };
    case "COPY_PROMPT":
      return { ...state, copyCount: state.copyCount + 1 };
    case "UNLOCK_ACHIEVEMENT": {
      if (state.achievements.includes(action.id)) return state;
      return {
        ...state,
        achievements: [...state.achievements, action.id],
        pendingAchievement: action.id,
      };
    }
    case "CLEAR_ACHIEVEMENT":
      return { ...state, pendingAchievement: null };
    default:
      return state;
  }
}

export { initGame, gameReducer };
