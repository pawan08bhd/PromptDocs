import { AlignLeft, Layers, Brain, Cpu } from "lucide-react";
import { XP_TABLE } from "../data/topicsData.js";
import SectionDone from "../components/SectionDone.jsx";
import CodeBlock from "../components/CodeBlock.jsx";
import Quiz from "../components/Quiz.jsx";
import SHead from "../components/SHead.jsx";

const TYPES_DATA = [
  {
    id: "s-instructional",
    tag: "INSTRUCTIONAL",
    title: "Instructional Prompts",
    color: "#00ffd5",
    icon: AlignLeft,
    desc: "Direct commands that tell the AI exactly what to do. Clear, specific instructions that leave little room for interpretation.",
    when: "When you need precise, predictable outputs for specific tasks.",
    code: `Write a professional email to a client about project delays. Include:
- Polite apology
- Explanation of reasons
- New timeline
- Offer to discuss further`,
  },
  {
    id: "s-conversational",
    tag: "CONVERSATIONAL",
    title: "Conversational Prompts",
    color: "#c084fc",
    icon: Layers,
    desc: "Natural language prompts that mimic human conversation. More flexible and context-aware than instructional prompts.",
    when: "For creative tasks, brainstorming, or when you want the AI to act as a conversation partner.",
    code: `Hey! I'm working on a blog post about sustainable living. I've got some ideas but I'm stuck on the introduction. Can you help me brainstorm some engaging opening lines that would hook readers interested in eco-friendly lifestyles?`,
  },
  {
    id: "s-creative",
    tag: "CREATIVE",
    title: "Creative Prompts",
    color: "#fbbf24",
    icon: Brain,
    desc: "Prompts designed to generate original content, ideas, or solutions. Encourages imagination and outside-the-box thinking.",
    when: "Writing stories, generating ideas, designing concepts, or solving problems creatively.",
    code: `Imagine you're a time traveler from the year 2147. You've just returned from a future where humanity has solved climate change. Write a short story about your journey back in time to convince people in 2024 to take action now.`,
  },
  {
    id: "s-analytical",
    tag: "ANALYTICAL",
    title: "Analytical Prompts",
    color: "#fb7185",
    icon: Cpu,
    desc: "Prompts that require logical reasoning, data analysis, or systematic evaluation of information.",
    when: "Analyzing data, making decisions, evaluating options, or solving complex problems.",
    code: `Analyze the following quarterly sales data and provide insights:

Q1: $125,000 (15% growth)
Q2: $142,000 (13.6% growth)
Q3: $138,000 (-2.8% decline)
Q4: $156,000 (13% growth)

What trends do you notice? What factors might explain the Q3 decline? What recommendations would you make for next year?`,
  },
];

function TypesPage({ accent, page, game, dispatch }) {
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
        q="Which prompt type is BEST for generating a creative story?"
        opts={["Instructional", "Conversational", "Creative", "Analytical"]}
        correct={2}
      />
    </div>
  );
}

export default TypesPage;
