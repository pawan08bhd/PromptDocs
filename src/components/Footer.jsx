import { Terminal, Github, Twitter, Mail, ExternalLink } from "lucide-react";

function Footer() {
  return (
    <footer
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        padding: "40px 20px 20px",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "30px",
          marginBottom: "30px",
        }}
      >
        {/* Company Section */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "rgba(184, 255, 60, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Terminal size={16} style={{ color: "#b8ff3c" }} />
            </div>
            <span
              style={{
                fontFamily: "var(--f-hero)",
                fontSize: "1.2rem",
                color: "var(--accent)",
                letterSpacing: ".1em",
              }}
            >
              PROMPTDOCS
            </span>
          </div>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "0.9rem",
              lineHeight: "1.6",
              marginBottom: "16px",
            }}
          >
            Master the art of prompt engineering through interactive learning,
            gamified challenges, and comprehensive tutorials.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            <a
              href="#"
              style={{
                color: "var(--muted)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--muted)")}
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              style={{
                color: "var(--muted)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--muted)")}
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              style={{
                color: "var(--muted)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--muted)")}
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Learning Paths */}
        <div>
          <h3
            style={{
              color: "var(--text)",
              fontSize: "1rem",
              fontWeight: "600",
              marginBottom: "16px",
              fontFamily: "var(--f-body)",
            }}
          >
            Learning Paths
          </h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              "Zero-Shot Learning",
              "Few-Shot Techniques",
              "Chain-of-Thought",
              "Role-Based Prompts",
              "Context Engineering",
              "Advanced Patterns",
            ].map((item) => (
              <li key={item} style={{ marginBottom: "8px" }}>
                <a
                  href="#"
                  style={{
                    color: "var(--muted)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.target.style.color = "var(--muted)")}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools & Resources */}
        <div>
          <h3
            style={{
              color: "var(--text)",
              fontSize: "1rem",
              fontWeight: "600",
              marginBottom: "16px",
              fontFamily: "var(--f-body)",
            }}
          >
            Tools & Resources
          </h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              "Prompt Playground",
              "Template Library",
              "Performance Metrics",
              "Best Practices Guide",
              "API Documentation",
              "Community Forum",
            ].map((item) => (
              <li key={item} style={{ marginBottom: "8px" }}>
                <a
                  href="#"
                  style={{
                    color: "var(--muted)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.target.style.color = "var(--muted)")}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3
            style={{
              color: "var(--text)",
              fontSize: "1rem",
              fontWeight: "600",
              marginBottom: "16px",
              fontFamily: "var(--f-body)",
            }}
          >
            Company
          </h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              "About Us",
              "Careers",
              "Press Kit",
              "Contact",
              "Privacy Policy",
              "Terms of Service",
            ].map((item) => (
              <li key={item} style={{ marginBottom: "8px" }}>
                <a
                  href="#"
                  style={{
                    color: "var(--muted)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.target.style.color = "var(--muted)")}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          paddingTop: "20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            marginBottom: "12px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              color: "var(--muted)",
              fontSize: "0.85rem",
              fontFamily: "var(--f-mono)",
            }}
          >
            © 2024 PromptDocs. All rights reserved.
          </span>
          <span
            style={{
              color: "var(--muted)",
              fontSize: "0.85rem",
            }}
          >
            Built with ❤️ for prompt engineers
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          {["Cookie Policy", "Accessibility", "Sitemap", "Help Center"].map(
            (item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: "var(--muted)",
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--muted)")}
              >
                {item}
              </a>
            ),
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
