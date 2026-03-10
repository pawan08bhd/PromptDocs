import { Award } from "lucide-react";
import { BIOMES, XP_TABLE } from "../data/topicsData.js";
import SectionDone from "../components/SectionDone.jsx";
import CodeBlock from "../components/CodeBlock.jsx";
import Quiz from "../components/Quiz.jsx";
import SHead from "../components/SHead.jsx";

function ArticlePage({ accent, page, game, dispatch }) {
  return (
    <div style={{ maxWidth: 740, margin: "0 auto", padding: "56px 24px 80px" }}>
      <SHead
        num="01"
        label="CHAPTER ONE"
        title="INTRODUCTION TO PROMPT ENGINEERING"
        accent={accent}
      />

      <div id="s-what" className="fade-up d1" style={{ marginBottom: 36 }}>
        <h3
          style={{
            fontFamily: "var(--f-hero)",
            fontSize: "1.4rem",
            letterSpacing: ".06em",
            color: "#fff",
            marginBottom: 14,
          }}
        >
          WHAT IS PROMPT ENGINEERING?
        </h3>
        <p
          style={{
            fontSize: ".96rem",
            lineHeight: 1.8,
            color: "rgba(255,255,255,.6)",
            marginBottom: 12,
          }}
        >
          <strong style={{ color: "#fff" }}>Prompt Engineering</strong> is the
          practice of designing, structuring, and iterating on inputs given to
          large language models to elicit precise, useful, and reliable outputs.
          It sits at the intersection of linguistics, cognitive science, and
          software engineering.
        </p>
        <p
          style={{
            fontSize: ".96rem",
            lineHeight: 1.8,
            color: "rgba(255,255,255,.6)",
          }}
        >
          Unlike traditional programming where you write explicit logic, prompt
          engineering is about <em>communicating intent</em> — guiding a
          probabilistic system toward a useful response through carefully chosen
          words, structure, and context.
        </p>
        <SectionDone
          page={page}
          sectionId="s-what"
          game={game}
          dispatch={dispatch}
          accent={accent}
        />
      </div>

      <div id="s-why" className="fade-up d2" style={{ marginBottom: 36 }}>
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
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
            gap: 10,
            marginBottom: 16,
          }}
        >
          {[
            [
              "Output Quality",
              "The difference between mediocre and exceptional AI output is usually just the prompt.",
              "#00ffd5",
            ],
            [
              "Cost Efficiency",
              "Better prompts mean fewer retries, lower token usage, and reduced API costs.",
              "#b8ff3c",
            ],
            [
              "Reliability",
              "Structured prompts yield consistent, predictable results at production scale.",
              "#c084fc",
            ],
            [
              "Safety",
              "Precise instructions reduce hallucinations and enforce behavioral guardrails.",
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
          sectionId="s-why"
          game={game}
          dispatch={dispatch}
          accent={accent}
        />
      </div>

      <div id="s-anatomy" className="fade-up d3" style={{ marginBottom: 36 }}>
        <h3
          style={{
            fontFamily: "var(--f-hero)",
            fontSize: "1.4rem",
            letterSpacing: ".06em",
            color: "#fff",
            marginBottom: 14,
          }}
        >
          ANATOMY OF A PROMPT
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
              "01",
              "Context",
              "Background the model needs to understand the task.",
              "#00ffd5",
            ],
            [
              "02",
              "Instruction",
              "A clear directive: exactly what the model must do.",
              "#b8ff3c",
            ],
            [
              "03",
              "Input Data",
              "The content to process — text, code, numbers.",
              "#c084fc",
            ],
            [
              "04",
              "Output Format",
              "How the response should be structured (JSON, table, essay).",
              "#fbbf24",
            ],
            [
              "05",
              "Constraints",
              "Rules, tone, length, style, or domain restrictions.",
              "#fb7185",
            ],
          ].map(([n, t, b, c]) => (
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
                {n}
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
          sectionId="s-anatomy"
          game={game}
          dispatch={dispatch}
          accent={accent}
        />
      </div>

      <div id="s-example" className="fade-up d4" style={{ marginBottom: 36 }}>
        <h3
          style={{
            fontFamily: "var(--f-hero)",
            fontSize: "1.4rem",
            letterSpacing: ".06em",
            color: "#fff",
            marginBottom: 14,
          }}
        >
          FULL EXAMPLE
        </h3>
        <CodeBlock
          accent={accent}
          page={page}
          game={game}
          dispatch={dispatch}
          code={`[CONTEXT]\nYou are a technical writer with expertise in APIs and developer documentation.\n\n[INSTRUCTION]\nSummarize the following API documentation for a non-technical business stakeholder.\n\n[CONSTRAINTS]\n- Use plain language, no jargon\n- Maximum 150 words\n- Use bullet points for key capabilities\n- End with one sentence on business value\n\n[INPUT DATA]\n"""\n{paste your API documentation here}\n"""`}
        />
        <SectionDone
          page={page}
          sectionId="s-example"
          label="I Understood This"
          game={game}
          dispatch={dispatch}
          accent={accent}
        />
      </div>

      <div
        id="s-summary"
        className="fade-up"
        style={{
          padding: 22,
          borderRadius: 12,
          background: `rgba(${BIOMES.intro.rgb},.07)`,
          border: `1px solid rgba(${BIOMES.intro.rgb},.2)`,
          marginBottom: 8,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 10,
          }}
        >
          <Award size={14} style={{ color: accent }} />
          <span
            style={{
              fontFamily: "var(--f-mono)",
              fontSize: ".6rem",
              letterSpacing: ".12em",
              color: accent,
            }}
          >
            MODULE COMPLETE
          </span>
        </div>
        <p
          style={{
            fontSize: ".86rem",
            lineHeight: 1.7,
            color: "rgba(255,255,255,.58)",
          }}
        >
          Prompt engineering is{" "}
          <strong style={{ color: "#fff" }}>structured communication</strong>.
          Provide context, clear instructions, explicit format requirements, and
          constraints. Every chapter ahead builds on this foundation.
        </p>
        <SectionDone
          page={page}
          sectionId="s-summary"
          label="Chapter Complete! Claim XP"
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
        q="Which element of a prompt tells the model HOW to format its response?"
        opts={["Context", "Instruction", "Output Format", "Constraints"]}
        correct={2}
      />
    </div>
  );
}

export default ArticlePage;
