import { Brain, Zap, MessageSquare } from "lucide-react";
import { BIOMES, XP_TABLE } from "../data/topicsData.js";
import SectionDone from "../components/SectionDone.jsx";
import CodeBlock from "../components/CodeBlock.jsx";
import Quiz from "../components/Quiz.jsx";
import SHead from "../components/SHead.jsx";

function IntroPage({ accent, page, game, dispatch }) {
  return (
    <div style={{ maxWidth: 740, margin: "0 auto", padding: "56px 24px 80px" }}>
      <SHead
        num="01"
        label="CHAPTER ONE"
        title="INTRODUCTION TO AI"
        accent={accent}
      />

      <div
        id="s-what-is-ai"
        className="fade-up d1"
        style={{ marginBottom: 36 }}
      >
        <h3
          style={{
            fontFamily: "var(--f-hero)",
            fontSize: "1.4rem",
            letterSpacing: ".06em",
            color: "#fff",
            marginBottom: 14,
          }}
        >
          WHAT IS AI?
        </h3>
        <p
          style={{
            fontSize: ".96rem",
            lineHeight: 1.8,
            color: "rgba(255,255,255,.6)",
            marginBottom: 12,
          }}
        >
          <strong style={{ color: "#fff" }}>
            Artificial Intelligence (AI)
          </strong>{" "}
          refers to the simulation of human intelligence in machines that are
          programmed to think and learn like humans. These systems can perform
          tasks that typically require human intelligence.
        </p>
        <p
          style={{
            fontSize: ".96rem",
            lineHeight: 1.8,
            color: "rgba(255,255,255,.6)",
          }}
        >
          Modern AI, particularly Large Language Models (LLMs), can understand
          and generate human-like text, answer questions, create content, and
          assist with complex problem-solving.
        </p>
        <SectionDone
          page={page}
          sectionId="s-what-is-ai"
          game={game}
          dispatch={dispatch}
          accent={accent}
        />
      </div>

      <div
        id="s-ai-evolution"
        className="fade-up d2"
        style={{ marginBottom: 36 }}
      >
        <h3
          style={{
            fontFamily: "var(--f-hero)",
            fontSize: "1.4rem",
            letterSpacing: ".06em",
            color: "#fff",
            marginBottom: 14,
          }}
        >
          AI EVOLUTION
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
            gap: 10,
            marginBottom: 16,
          }}
        >
          {[
            [
              "Rule-Based Systems",
              "Early AI used predefined rules and logic trees.",
              "#00ffd5",
            ],
            [
              "Machine Learning",
              "Systems that learn from data without explicit programming.",
              "#b8ff3c",
            ],
            [
              "Deep Learning",
              "Neural networks with multiple layers for complex pattern recognition.",
              "#c084fc",
            ],
            [
              "Large Language Models",
              "Transformers that understand and generate human language.",
              "#fb7185",
            ],
          ].map(([t, b, c]) => (
            <div key={t} className="glow-card" style={{ padding: 16 }}>
              <div
                style={{
                  fontFamily: "var(--f-mono)",
                  fontSize: ".6rem",
                  letterSpacing: ".1em",
                  color: c,
                  marginBottom: 6,
                }}
              >
                {t}
              </div>
              <p
                style={{
                  fontSize: ".8rem",
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,.48)",
                }}
              >
                {b}
              </p>
            </div>
          ))}
        </div>
        <SectionDone
          page={page}
          sectionId="s-ai-evolution"
          game={game}
          dispatch={dispatch}
          accent={accent}
        />
      </div>

      <div
        id="s-prompting-basics"
        className="fade-up d3"
        style={{ marginBottom: 36 }}
      >
        <h3
          style={{
            fontFamily: "var(--f-hero)",
            fontSize: "1.4rem",
            letterSpacing: ".06em",
            color: "#fff",
            marginBottom: 14,
          }}
        >
          PROMPTING BASICS
        </h3>
        <CodeBlock
          code={`Hello! I'm a helpful AI assistant. I can help you with:

• Writing and editing text
• Answering questions
• Solving problems
• Generating ideas
• And much more!

What would you like help with today?`}
          accent={accent}
          page={page}
          game={game}
          dispatch={dispatch}
        />
        <SectionDone
          page={page}
          sectionId="s-prompting-basics"
          game={game}
          dispatch={dispatch}
          accent={accent}
        />
      </div>

      <div
        id="s-why-matters"
        className="fade-up d4"
        style={{ marginBottom: 36 }}
      >
        <h3
          style={{
            fontFamily: "var(--f-hero)",
            fontSize: "1.4rem",
            letterSpacing: ".06em",
            color: "#fff",
            marginBottom: 14,
          }}
        >
          WHY IT MATTERS
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            marginBottom: 16,
          }}
        >
          {[
            [
              "Productivity",
              "AI can automate repetitive tasks and boost efficiency.",
              "#00ffd5",
            ],
            [
              "Creativity",
              "Enhances human creativity with new perspectives and ideas.",
              "#b8ff3c",
            ],
            [
              "Accessibility",
              "Makes complex information more accessible to everyone.",
              "#c084fc",
            ],
            [
              "Innovation",
              "Accelerates research and development across all fields.",
              "#fbbf24",
            ],
          ].map(([t, b, c]) => (
            <div
              key={t}
              style={{
                display: "flex",
                gap: 14,
                padding: "12px 16px",
                borderRadius: 9,
                background: "rgba(255,255,255,.02)",
                border: "1px solid rgba(255,255,255,.05)",
                borderLeft: `3px solid ${c}`,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--f-mono)",
                  fontSize: ".6rem",
                  color: c,
                  opacity: 0.65,
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                💡
              </span>
              <div>
                <div
                  style={{
                    fontFamily: "var(--f-mono)",
                    fontSize: ".68rem",
                    letterSpacing: ".08em",
                    color: "#fff",
                    marginBottom: 3,
                  }}
                >
                  {t}
                </div>
                <p
                  style={{
                    fontSize: ".8rem",
                    color: "rgba(255,255,255,.42)",
                    lineHeight: 1.6,
                  }}
                >
                  {b}
                </p>
              </div>
            </div>
          ))}
        </div>
        <SectionDone
          page={page}
          sectionId="s-why-matters"
          game={game}
          dispatch={dispatch}
          accent={accent}
        />
      </div>

      <Quiz
        page={page}
        game={game}
        dispatch={dispatch}
        accent={accent}
        q="What is the primary difference between traditional programming and AI?"
        opts={[
          "AI learns from data",
          "AI uses electricity",
          "AI is faster",
          "AI is more expensive",
        ]}
        correct={0}
      />
    </div>
  );
}

export default IntroPage;
