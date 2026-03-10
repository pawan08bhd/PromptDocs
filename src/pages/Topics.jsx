import { AlignLeft, Layers, Brain, Cpu } from "lucide-react";
import { XP_TABLE } from "../data/topicsData.js";
import SectionDone from "../components/SectionDone.jsx";
import CodeBlock from "../components/CodeBlock.jsx";
import Quiz from "../components/Quiz.jsx";
import SHead from "../components/SHead.jsx";

const TYPES_DATA = [
  {
    id: "s-zeroshot",
    tag: "ZERO-SHOT",
    title: "Zero-Shot Prompts",
    color: "#00ffd5",
    icon: AlignLeft,
    desc: "Ask the model to perform a task without providing any examples. Relies entirely on the model's pre-trained knowledge.",
    when: "Straightforward tasks where the model has strong baseline knowledge.",
    code: `Translate the following English text to French:\n\n"The early bird catches the worm."`,
  },
  {
    id: "s-fewshot",
    tag: "FEW-SHOT",
    title: "Few-Shot Prompts",
    color: "#c084fc",
    icon: Layers,
    desc: "Provide a handful of input-output examples before the real task to guide the expected output format.",
    when: "Output format consistency matters or the task has nuanced requirements.",
    code: `Classify sentiment as POSITIVE, NEGATIVE, or NEUTRAL.\n\nText: "I love this product!"\nSentiment: POSITIVE\n\nText: "Worst experience ever."\nSentiment: NEGATIVE\n\nText: "It arrived on time."\nSentiment:`,
  },
  {
    id: "s-cot",
    tag: "CHAIN-OF-THOUGHT",
    title: "Chain-of-Thought (CoT)",
    color: "#fbbf24",
    icon: Brain,
    desc: "Prompt the model to show step-by-step reasoning before the final answer. Dramatically improves accuracy on complex tasks.",
    when: "Math, logical reasoning, and multi-step analysis tasks.",
    code: `Q: Roger has 5 tennis balls. He buys 2 cans of 3 balls each. How many total?\n\nA: Roger starts with 5. He buys 2 × 3 = 6 more.\n5 + 6 = 11. The answer is 11.`,
  },
  {
    id: "s-role",
    tag: "ROLE PROMPT",
    title: "Role / System Prompts",
    color: "#fb7185",
    icon: Cpu,
    desc: "Assign a persona or role to shape tone, expertise, and communication style throughout the entire conversation.",
    when: "Sustained interactions requiring consistent personality or domain expertise.",
    code: `You are an expert data scientist with 15 years of ML experience.\nYou explain complex concepts clearly and always provide Python code examples.\nBe concise but thorough. Say "I don't know" when uncertain.`,
  },
];

function TopicsPage({ accent, page, game, dispatch }) {
  return (
    <div style={{ maxWidth: 740, margin: "0 auto", padding: "56px 24px 80px" }}>
      <SHead
        num="02"
        label="CHAPTER TWO"
        title="TYPES OF PROMPTS"
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
        Different tasks call for different strategies. Understanding when to use
        each type is the first step toward consistently high-quality AI outputs.
      </p>
      {TYPES_DATA.map((t, i) => (
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
        q="Which prompt type is BEST for tasks requiring step-by-step mathematical reasoning?"
        opts={["Zero-Shot", "Few-Shot", "Chain-of-Thought", "Role Prompt"]}
        correct={2}
      />
    </div>
  );
}

export default TopicsPage;
