import { useState, useEffect, useReducer } from "react";
import { Menu, X } from "lucide-react";
import { BIOMES } from "./data/topicsData.js";
import { initGame, gameReducer } from "./data/gameLogic.js";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import Progress from "./components/Progress.jsx";
import NeuralCanvas from "./components/NeuralCanvas.jsx";
import Cursor from "./components/Cursor.jsx";
import XPFloats from "./components/XPFloats.jsx";
import AchievementToast from "./components/AchievementToast.jsx";
import HomePage from "./pages/Home.jsx";
import IntroPage from "./pages/Intro.jsx";
import TypesPage from "./pages/Types.jsx";
import TechPage from "./pages/Tech.jsx";
import ExPage from "./pages/Ex.jsx";
import BestPage from "./pages/Best.jsx";
import TopicsPage from "./pages/Topics.jsx";
import ArticlePage from "./pages/Article.jsx";

export default function App() {
  const [page, setPage] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [game, dispatch] = useReducer(gameReducer, initGame);
  const biome = BIOMES[page] || BIOMES.home;

  // Update CSS accent variable on biome change
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", biome.color);
    document.documentElement.style.setProperty("--accent-rgb", biome.rgb);
  }, [biome]);

  // Track page visits & award XP for first visit
  useEffect(() => {
    if (!game.visitedPages.has(page)) {
      dispatch({ type: "VISIT_PAGE", page });
      const isFirst = game.visitedPages.size === 0;
      dispatch({
        type: "EARN_XP",
        amount: 100,
        x: window.innerWidth / 2,
        y: 80,
      });
      if (isFirst) dispatch({ type: "UNLOCK_ACHIEVEMENT", id: "first_blood" });
    }
    // Explorer achievement
    const newSize =
      game.visitedPages.size + (game.visitedPages.has(page) ? 0 : 1);
    if (newSize >= 3) dispatch({ type: "UNLOCK_ACHIEVEMENT", id: "explorer" });
    window.scrollTo(0, 0);
    setSidebarOpen(false);
  }, [page]);

  // Check completionist
  useEffect(() => {
    const chapters = [
      "home",
      "intro",
      "types",
      "tech",
      "ex",
      "best",
      "topics",
      "article",
    ];
    const allDone = chapters.every((p) => {
      const subs = BIOMES[p] ? [] : []; // simplified
      return subs.some((s) => game.completedSections[`${p}_${s.id}`]);
    });
    if (allDone) dispatch({ type: "UNLOCK_ACHIEVEMENT", id: "completionist" });
  }, [game.completedSections]);

  const renderPage = () => {
    const props = { accent: biome.color, page, game, dispatch, setPage };
    switch (page) {
      case "home":
        return <HomePage {...props} />;
      case "intro":
        return <IntroPage {...props} />;
      case "types":
        return <TypesPage {...props} />;
      case "tech":
        return <TechPage {...props} />;
      case "ex":
        return <ExPage {...props} />;
      case "best":
        return <BestPage {...props} />;
      case "topics":
        return <TopicsPage {...props} />;
      case "article":
        return <ArticlePage {...props} />;
      default:
        return <HomePage {...props} />;
    }
  };

  return (
    <div
      className="noise-after"
      style={{ minHeight: "100vh", background: "var(--void)" }}
    >
      <NeuralCanvas rgb={biome.rgb} />
      <Cursor color={biome.color} />
      <XPFloats floats={game.xpFloats} dispatch={dispatch} />
      {game.pendingAchievement && (
        <AchievementToast
          achieveId={game.pendingAchievement}
          dispatch={dispatch}
          accent={biome.color}
        />
      )}
      <Navbar
        page={page}
        setPage={setPage}
        biome={biome}
        game={game}
        dispatch={dispatch}
      />
      <Progress />
      <Sidebar page={page} game={game} isOpen={sidebarOpen} />

      <div className="content-area">
        <div key={page} className="fade-in">
          {renderPage()}
        </div>
      </div>

      <Footer />

      {/* Mobile sidebar toggle */}
      <button
        className="sidebar-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        data-h
      >
        {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
      </button>
    </div>
  );
}
