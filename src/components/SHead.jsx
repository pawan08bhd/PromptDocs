function SHead({ num, label, title, accent }) {
  return (
    <div style={{ position: "relative", marginBottom: 44 }}>
      <div
        className="ghost-num"
        style={{
          position: "absolute",
          top: -35,
          left: -16,
          zIndex: 0,
          userSelect: "none",
        }}
      >
        {num}
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <span className="tag fade-up">{label}</span>
        <h2
          className="fade-up d1"
          style={{
            fontFamily: "var(--f-hero)",
            fontSize: "clamp(2rem,4.5vw,3.5rem)",
            letterSpacing: ".04em",
            lineHeight: 1,
            marginTop: 14,
            color: "#fff",
          }}
        >
          {title}
        </h2>
        <div
          className="accent-line fade-up d2"
          style={{
            marginTop: 14,
            background: `linear-gradient(90deg,${accent},transparent)`,
          }}
        />
      </div>
    </div>
  );
}

export default SHead;
