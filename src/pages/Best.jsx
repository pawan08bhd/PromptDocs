import { Star, TrendingUp, Users, Award } from "lucide-react";
import { XP_TABLE } from "../data/topicsData.js";
import SectionDone from "../components/SectionDone.jsx";
import CodeBlock from "../components/CodeBlock.jsx";
import Quiz from "../components/Quiz.jsx";
import SHead from "../components/SHead.jsx";

const BEST_DATA = [
  {
    id: "s-iterative",
    tag: "ITERATIVE",
    title: "Iterative Refinement",
    color: "#00ffd5",
    icon: TrendingUp,
    desc: "The best prompt engineers don't get it right on the first try. They start with a basic prompt and iteratively improve it based on the AI's responses.",
    code: `Round 1: "Write a recipe"
Round 2: "Write a detailed recipe for chocolate chip cookies"
Round 3: "Write a detailed recipe for chocolate chip cookies for beginners, including timing and common mistakes to avoid"`,
  },
  {
    id: "s-testing",
    tag: "TESTING",
    title: "A/B Testing",
    color: "#c084fc",
    icon: Users,
    desc: "Test different versions of your prompts with the same task to see which performs better. Keep track of what works and what doesn't.",
    code: `Prompt A: "Summarize this article"
Prompt B: "Provide a 3-paragraph summary of this article, focusing on the main arguments and key evidence"

Compare results for clarity, completeness, and relevance.`,
  },
  {
    id: "s-templates",
    tag: "TEMPLATES",
    title: "Prompt Templates",
    color: "#fbbf24",
    icon: Star,
    desc: "Create reusable templates for common tasks. This saves time and ensures consistency across similar prompts.",
    code: `Template: Code Review
"Review this [language] code for:
- Bugs and errors
- Performance issues
- Code style and best practices
- Security vulnerabilities

Code:
[code here]

Provide specific recommendations with examples."`,
  },
  {
    id: "s-experimentation",
    tag: "EXPERIMENTATION",
    title: "Continuous Learning",
    color: "#fb7185",
    icon: Award,
    desc: "Stay curious and experiment with new techniques. The field of prompt engineering evolves rapidly, so keep learning from others and testing new approaches.",
    code: `📚 Study prompt engineering research papers
🤝 Join communities and share techniques
🧪 Test new prompting methods like chain-of-thought
📊 Track your success rates and improvement over time`,
  },
];

function BestPage({ accent, page, game, dispatch }) {
  return (
    <div style={{ maxWidth: 740, margin: "0 auto", padding: "56px 24px 80px" }}>
      <SHead
        num="05"
        label="CHAPTER FIVE"
        title="BEST PRACTICES & ADVANCED TECHNIQUES"
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
        Becoming a prompt engineering expert requires practice, experimentation,
        and continuous learning. These advanced techniques will take your skills
        to the next level.
      </p>
      {BEST_DATA.map((t, i) => (
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
        q="What's the most important practice for improving prompt engineering skills?"
        opts={[
          "Using complex vocabulary",
          "Iterative refinement",
          "Copying others' prompts",
          "Avoiding experimentation",
        ]}
        correct={1}
      />
    </div>
  );
}

export default BestPage;
