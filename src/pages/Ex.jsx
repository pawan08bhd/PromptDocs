import { CheckCircle, XCircle, AlertTriangle, Lightbulb } from "lucide-react";
import { XP_TABLE } from "../data/topicsData.js";
import SectionDone from "../components/SectionDone.jsx";
import CodeBlock from "../components/CodeBlock.jsx";
import Quiz from "../components/Quiz.jsx";
import SHead from "../components/SHead.jsx";

const EX_DATA = [
  {
    id: "s-good-prompt",
    tag: "GOOD",
    title: "Clear & Specific",
    color: "#00ffd5",
    icon: CheckCircle,
    desc: "Good prompts are unambiguous, provide context, and specify exactly what you want. They include details about format, length, and purpose.",
    code: `Write a 500-word blog post about the benefits of meditation for stress reduction. Include:
- Introduction with a hook
- 3 main benefits with examples
- Scientific evidence
- Conclusion with call-to-action

Target audience: Busy professionals aged 25-45`,
  },
  {
    id: "s-bad-prompt",
    tag: "BAD",
    title: "Vague & Unclear",
    color: "#fb7185",
    icon: XCircle,
    desc: "Bad prompts are too general, lack context, or leave too much to interpretation. They often result in generic or off-target responses.",
    code: `Write about meditation.`,
  },
  {
    id: "s-common-mistakes",
    tag: "MISTAKES",
    title: "Common Mistakes",
    color: "#fbbf24",
    icon: AlertTriangle,
    desc: "Avoid these frequent errors that lead to poor AI responses: being too vague, not providing context, asking multiple questions at once, or not specifying output format.",
    code: `❌ "Tell me about AI"
✅ "Explain how machine learning algorithms work for image recognition, using simple analogies and real-world examples"

❌ "Write code and explain it"
✅ "Write a Python function that calculates factorial recursively, then explain each line with comments"`,
  },
  {
    id: "s-improvement-tips",
    tag: "TIPS",
    title: "Improvement Tips",
    color: "#c084fc",
    icon: Lightbulb,
    desc: "Use these strategies to craft better prompts: break complex tasks into steps, provide examples, specify constraints, and iterate on your prompts.",
    code: `🎯 Start with clear objectives
📝 Provide context and background
🔍 Include specific requirements
📋 Use examples when possible
🔄 Iterate and refine based on results`,
  },
];

function ExPage({ accent, page, game, dispatch }) {
  return (
    <div style={{ maxWidth: 740, margin: "0 auto", padding: "56px 24px 80px" }}>
      <SHead
        num="04"
        label="CHAPTER FOUR"
        title="EXAMPLES & BEST PRACTICES"
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
        Learning from examples is the fastest way to improve. See what works,
        what doesn't, and how to refine your approach.
      </p>
      {EX_DATA.map((t, i) => (
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
        q="What's the main difference between good and bad prompts?"
        opts={[
          "Length",
          "Clarity and specificity",
          "Use of emojis",
          "Number of questions",
        ]}
        correct={1}
      />
    </div>
  );
}

export default ExPage;
