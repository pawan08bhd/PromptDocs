import { Zap, Target, RotateCcw, Settings } from "lucide-react";
import { XP_TABLE } from "../data/topicsData.js";
import SectionDone from "../components/SectionDone.jsx";
import CodeBlock from "../components/CodeBlock.jsx";
import Quiz from "../components/Quiz.jsx";
import SHead from "../components/SHead.jsx";

const TECH_DATA = [
  {
    id: "s-temperature",
    tag: "TEMPERATURE",
    title: "Temperature",
    color: "#00ffd5",
    icon: Zap,
    desc: "Controls randomness in AI responses. Lower values (0.1-0.3) make outputs more focused and deterministic. Higher values (0.7-1.0) make them more creative and varied.",
    when: "Use low temperature for factual tasks, high for creative writing.",
    code: `Temperature: 0.2
Prompt: Explain quantum computing in simple terms.

Temperature: 0.8
Prompt: Write a poem about quantum computing.`,
  },
  {
    id: "s-max-tokens",
    tag: "MAX TOKENS",
    title: "Max Tokens",
    color: "#c084fc",
    icon: Target,
    desc: "Limits the length of AI responses. Each token is roughly 4 characters. Setting this prevents overly long responses and controls costs.",
    when: "For concise answers, summaries, or when you want to control response length.",
    code: `Max Tokens: 50
Prompt: Summarize the plot of Romeo and Juliet.

Max Tokens: 500
Prompt: Write a detailed analysis of Romeo and Juliet's themes.`,
  },
  {
    id: "s-system-prompt",
    tag: "SYSTEM PROMPT",
    title: "System Prompt",
    color: "#fbbf24",
    icon: Settings,
    desc: "Sets the AI's role or behavior for the entire conversation. Acts as initial instructions that influence all subsequent responses.",
    when: "When you want consistent behavior, specific expertise, or role-playing scenarios.",
    code: `System: You are an expert software developer with 10 years of experience. Always provide code examples and explain your reasoning.

User: How should I structure my React components?`,
  },
  {
    id: "s-few-shot",
    tag: "FEW-SHOT",
    title: "Few-Shot Learning",
    color: "#fb7185",
    icon: RotateCcw,
    desc: "Provides examples in the prompt to guide the AI's response pattern. Shows the AI exactly what kind of output you want.",
    when: "For consistent formatting, specific styles, or complex tasks with clear examples.",
    code: `Generate a product description for each item:

Example 1:
Product: Wireless Earbuds
Description: Experience crystal-clear audio with our premium wireless earbuds. Featuring 30-hour battery life and active noise cancellation.

Example 2:
Product: Smart Watch
Description: Track your fitness goals with our advanced smart watch. Includes heart rate monitoring, GPS, and 7-day battery life.

Product: Bluetooth Speaker
Description:`,
  },
];

function TechPage({ accent, page, game, dispatch }) {
  return (
    <div style={{ maxWidth: 740, margin: "0 auto", padding: "56px 24px 80px" }}>
      <SHead
        num="03"
        label="CHAPTER THREE"
        title="TECHNICAL PARAMETERS"
        accent={accent}
      />
      <p
        className="fade-up d1"
        style={{
          fontSize: ".96rem",
          lineHeight: 1.8,
          color: "rgba(255,255,255,.55)",
          marginBottom: 36,
        }}
      >
        Fine-tuning these parameters can dramatically improve your results. Each
        setting serves a specific purpose in controlling AI behavior.
      </p>
      {TECH_DATA.map((t, i) => (
        <div
          key={t.id}
          id={t.id}
          className={`fade-up d${i + 1}`}
          style={{
            marginBottom: 28,
            borderRadius: 14,
            background: "rgba(255,255,255,.02)",
            border: "1px solid rgba(255,255,255,.06)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "18px 20px",
              borderBottom: "1px solid rgba(255,255,255,.04)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: `${t.color}18`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <t.icon size={16} style={{ color: t.color }} />
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <h3
                    style={{
                      fontFamily: "var(--f-hero)",
                      fontSize: "1.2rem",
                      letterSpacing: ".04em",
                      color: "#fff",
                    }}
                  >
                    {t.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: "var(--f-mono)",
                      fontSize: ".55rem",
                      letterSpacing: ".1em",
                      padding: "2px 7px",
                      borderRadius: 3,
                      background: `${t.color}16`,
                      color: t.color,
                    }}
                  >
                    {t.tag}
                  </span>
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: ".86rem",
                lineHeight: 1.65,
                color: "rgba(255,255,255,.5)",
                marginBottom: 8,
              }}
            >
              {t.desc}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 6,
                fontSize: ".78rem",
                color: "rgba(255,255,255,.32)",
              }}
            >
              <span style={{ color: t.color, flexShrink: 0, marginTop: 2 }}>
                💡
              </span>
              <span>
                <strong style={{ color: "rgba(255,255,255,.5)" }}>
                  Best for:
                </strong>{" "}
                {t.when}
              </span>
            </div>
          </div>
          <div style={{ padding: 16 }}>
            <CodeBlock
              code={t.code}
              accent={t.color}
              page={page}
              game={game}
              dispatch={dispatch}
            />
            <SectionDone
              page={page}
              sectionId={t.id}
              game={game}
              dispatch={dispatch}
              accent={t.color}
            />
          </div>
        </div>
      ))}
      <Quiz
        page={page}
        game={game}
        dispatch={dispatch}
        accent={accent}
        q="Which parameter should you LOWER for more factual, consistent responses?"
        opts={[
          "Temperature",
          "Max Tokens",
          "System Prompt",
          "Few-Shot Learning",
        ]}
        correct={0}
      />
    </div>
  );
}

export default TechPage;
