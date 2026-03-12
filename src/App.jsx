import { useState } from "react";

const T = ({ en, zh, lang }) => {
  if (lang === "en") return en;
  if (lang === "zh") return zh;
  return <>{en}<span style={{ color: "#8A7E6E", fontSize: "0.92em", marginLeft: 6 }}>{zh}</span></>;
};

const colors = {
  navy: "#1B3A5C",
  red: "#A31F34",
  gold: "#B8880E",
  green: "#267348",
  purple: "#53378A",
};

const Tag = ({ type, children }) => {
  const styles = {
    g: { background: "#E4F2E8", color: colors.green },
    a: { background: "#FFF4D4", color: "#6E5A18" },
    p: { background: "#ECE4F6", color: colors.purple },
    r: { background: "#FCE6E6", color: colors.red },
  };
  return (
    <span style={{ ...styles[type], display: "inline-block", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 4, letterSpacing: 0.3, verticalAlign: "middle" }}>
      {children}
    </span>
  );
};

const Badge = ({ color, children }) => (
  <span style={{ background: color, color: "#fff", fontSize: 9, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase", padding: "2px 8px", borderRadius: 3, marginLeft: 6, verticalAlign: "middle" }}>
    {children}
  </span>
);

const Card = ({ children, style }) => (
  <div style={{ background: "#fff", border: "1px solid #DDD8CE", borderRadius: 14, padding: "24px 26px", marginBottom: 16, overflowWrap: "break-word", ...style }}>
    {children}
  </div>
);

const Callout = ({ type, children }) => {
  const s = {
    w: { background: "#FFFAEF", border: "1px solid #E6D2A0", color: "#6E5A18" },
    i: { background: "#EDF3FA", border: "1px solid #BED0E6", color: "#164272" },
    g: { background: "#EDF7F0", border: "1px solid #ACD8BC", color: "#185838" },
  };
  return <div style={{ ...s[type], borderRadius: 11, padding: "15px 20px", margin: "14px 0", fontSize: 13, lineHeight: 1.76 }}>{children}</div>;
};

const SectionHead = ({ letter, bg, title }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22, paddingBottom: 12, borderBottom: "2px solid #DDD8CE" }}>
    <div style={{ width: 38, height: 38, borderRadius: 9, background: bg, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 800, flexShrink: 0 }}>{letter}</div>
    <div>{title}</div>
  </div>
);

const ScriptBox = ({ label, color, children }) => (
  <div style={{ background: "#fff", border: "1px solid #DDD8CE", borderLeft: `5px solid ${color}`, borderRadius: 14, padding: "24px 26px", marginBottom: 16, position: "relative" }}>
    <div style={{ position: "absolute", top: -10, left: 18, background: "#F9F5EE", padding: "1px 10px", fontSize: 10, fontWeight: 700, letterSpacing: 0.8, textTransform: "uppercase", borderRadius: 4, border: "1px solid #DDD8CE", color }}>{label}</div>
    <div style={{ fontSize: 14, lineHeight: 1.9, color: "#3E3828" }}>{children}</div>
  </div>
);

const Step = ({ n, title, children }) => (
  <div style={{ display: "flex", gap: 18, marginBottom: 20, alignItems: "flex-start" }}>
    <div style={{ width: 34, height: 34, borderRadius: "50%", background: colors.navy, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, flexShrink: 0 }}>{n}</div>
    <div><div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{title}</div><div style={{ fontSize: 13, color: "#625A4A", lineHeight: 1.76 }}>{children}</div></div>
  </div>
);

const Comment = ({ label, children, note }) => (
  <div style={{ background: "#fff", borderLeft: `4px solid ${colors.purple}`, borderRadius: "0 12px 12px 0", padding: "15px 20px", marginBottom: 12 }}>
    <div style={{ fontSize: 11, fontWeight: 700, color: colors.purple, letterSpacing: 0.5, marginBottom: 4 }}>{label}</div>
    <div style={{ fontSize: 13.5, color: "#3E3828", lineHeight: 1.76 }}>{children}</div>
    {note && <div style={{ fontSize: 12, color: "#6E5A18", marginTop: 5, paddingTop: 5, borderTop: "1px dashed #DDD8CE" }}>{note}</div>}
  </div>
);

const QA = ({ n, q, a, lang }) => (
  <div style={{ background: n % 2 === 0 ? "#FEFCF8" : "#fff", border: "1px solid #DDD8CE", borderRadius: 12, padding: "16px 20px", marginBottom: 14, display: "flex", gap: 14 }}>
    <div style={{ width: 28, height: 28, borderRadius: 7, background: colors.gold, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, flexShrink: 0 }}>{n}</div>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: colors.navy, marginBottom: 6 }}>{q}</div>
      <div style={{ fontSize: 13.5, color: "#3E3828", lineHeight: 1.76 }}>{a}</div>
    </div>
  </div>
);

const TBRow = ({ ch, name, strength, desc, isLast }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "13px 0", borderBottom: isLast ? "none" : "1px solid #DDD8CE" }}>
    <span style={{ background: "#ECE4F6", color: colors.purple, fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 5, whiteSpace: "nowrap" }}>{ch}</span>
    <div>
      <strong>{name}</strong>
      <span style={{ fontSize: 9.5, fontWeight: 700, borderRadius: 3, padding: "2px 7px", marginLeft: 6, background: strength === "Strong" ? "#E4F2E8" : "#FFF4D4", color: strength === "Strong" ? colors.green : "#6E5A18" }}>{strength}</span>
      <p style={{ fontSize: 12, color: "#625A4A", marginTop: 2 }}>{desc}</p>
    </div>
  </div>
);

const Dv = () => <div style={{ height: 2, background: "linear-gradient(90deg, transparent, #DDD8CE, transparent)", margin: "40px 0" }} />;

export default function App() {
  const [lang, setLang] = useState("both");

  const t = (en, zh) => <T en={en} zh={zh} lang={lang} />;
  const te = (en, zh) => lang === "zh" ? zh : lang === "en" ? en : `${en} ${zh}`;

  const spectrumData = [
    { label: "Product Push", zh: "產品推銷", ex: "Staples · Domino's · Zappos", bg: "#E8B4B4", color: "#6B1818", dir: "← SELL" },
    { label: "Convenience", zh: "便利性", ex: "GasBuddy · Foursquare", bg: "#EDDCAA", color: "#6B4D0A" },
    { label: "Entertainment", zh: "娛樂", ex: "Chipotle Scarecrow", bg: "#C8E0B4", color: "#2E5414" },
    { label: "Product Assist", zh: "產品輔助", ex: "Kraft iFood · Ikea · ColorSnap", bg: "#B4CCE4", color: "#163A5C" },
    { label: "Benevolent", zh: "善意服務", ex: "Sea Tow · North Face · Columbia · Car Seat Helper", bg: "#B4E0C8", color: "#164A2E", dir2: "HELP →" },
  ];

  return (
    <div style={{ background: "#F9F5EE", minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans TC', sans-serif", color: "#261F10", lineHeight: 1.82, fontSize: 14 }}>
      {/* Lang Toggle */}
      <div style={{ position: "sticky", top: 0, zIndex: 200, background: "rgba(249,245,238,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #DDD8CE", padding: "8px 24px", display: "flex", justifyContent: "flex-end" }}>
        <div style={{ display: "flex", background: "#fff", border: "1px solid #DDD8CE", borderRadius: 8, overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.07)" }}>
          {[["both", "EN/中"], ["en", "EN"], ["zh", "中"]].map(([k, label]) => (
            <button key={k} onClick={() => setLang(k)} style={{ padding: "7px 15px", fontSize: 12, fontWeight: 700, cursor: "pointer", border: "none", borderRight: k !== "zh" ? "1px solid #DDD8CE" : "none", background: lang === k ? colors.navy : "transparent", color: lang === k ? "#fff" : "#625A4A", transition: "all 0.15s" }}>{label}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 840, margin: "0 auto", padding: "20px 24px 48px" }}>
        {/* Hero */}
        <div style={{ background: `linear-gradient(135deg, ${colors.navy} 0%, #2E5B88 50%, ${colors.red} 100%)`, borderRadius: 18, padding: "44px 38px 34px", marginBottom: 32, color: "#fff", position: "relative", overflow: "hidden" }}>
          <h1 style={{ fontSize: 25, fontWeight: 800, lineHeight: 1.38, marginBottom: 7 }}>&ldquo;The Case for &lsquo;Benevolent&rsquo; Mobile Apps&rdquo;</h1>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.75)" }}>Urban &amp; Sultan — MIT Sloan Management Review, Winter 2015, Vol. 56, No. 2</div>
          <div style={{ display: "inline-block", marginTop: 14, background: "rgba(255,255,255,0.14)", fontSize: 10.5, fontWeight: 700, letterSpacing: 1.3, textTransform: "uppercase", padding: "5px 16px", borderRadius: 20, color: "rgba(255,255,255,0.88)" }}>MKTG 6200 — Professor Fareena Sultan (Co-Author)</div>
        </div>

        {/* TOC */}
        <Card>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: "#8E8574", marginBottom: 12 }}>{t("Guide Structure", "章節架構")}</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px 24px" }}>
            {[
              ["A", colors.navy, "Opening Scripts", "開場腳本"],
              ["B", colors.green, "Core Argument", "核心論點"],
              ["C", colors.purple, "Article Logic Flow", "文章邏輯流程"],
              ["D", colors.gold, "Benevolence Spectrum", "善意光譜"],
              ["E", colors.navy, "Two Empirical Studies", "兩項實證研究"],
              ["F", colors.gold, "Five Managerial Steps", "五大管理步驟"],
              ["G", colors.purple, "Ready-to-Use Comments", "課堂短評論"],
              ["H", colors.red, "Cold-Call Q&A", "問答準備"],
              ["I", colors.purple, "K&K Connections", "教科書連結"],
              ["J", colors.green, "Final Cheat Sheet", "最終速記"],
            ].map(([l, bg, en, zh]) => (
              <div key={l} style={{ display: "flex", alignItems: "center", gap: 10, padding: "4px 0", fontSize: 13 }}>
                <span style={{ width: 22, height: 22, borderRadius: 6, background: bg, color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, flexShrink: 0 }}>{l}</span>
                {t(en, zh)}
              </div>
            ))}
          </div>
        </Card>

        {/* Alert */}
        <div style={{ background: "#FFF9F0", border: "1px solid #EAD6B8", borderLeft: `4px solid ${colors.red}`, borderRadius: 12, padding: "20px 24px", marginBottom: 32, fontSize: 14, lineHeight: 1.78 }}>
          <div style={{ color: colors.red, fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>{t("Course Context", "課堂脈絡")}</div>
          <div>{t(<><strong>Professor Sultan is a co-author.</strong> She knows every detail. Expect precise mastery of concepts, mechanisms, evidence, and managerial implications.</>, <><strong>Sultan 教授是本文共同作者。</strong>她對每個細節都有第一手了解。課堂期待你準確掌握概念、機制、證據與管理意涵。</>)}</div>
          {[["g", "ARTICLE", "What the article explicitly states", "文章明確寫了什麼"],
            ["a", "INFERENCE", "Reasonable managerial implication", "合理推出的管理意涵"],
            ["p", "EXTENSION", 'Textbook — "The article shows X. From K&K, I\'d connect to Y."', '教科書延伸 —「文章顯示 X，從 K&K 角度我連結到 Y。」']
          ].map(([type, label, en, zh]) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 7, fontSize: 13 }}>
              <Tag type={type}>{label}</Tag> {t(en, zh)}
            </div>
          ))}
        </div>

        {/* A: Opening */}
        <div style={{ marginBottom: 44 }}>
          <SectionHead letter="A" bg={colors.navy} title={<div><div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1.3, textTransform: "uppercase", color: "#8E8574" }}>Section A</div><h2 style={{ fontSize: 18, fontWeight: 700 }}>{t("Opening Scripts", "開場腳本")}</h2></div>} />
          <ScriptBox label="ENGLISH · 30–45 sec" color={colors.navy}>
            <p>This article argues that mobile apps should not be viewed only as direct selling tools. Urban and Sultan propose that firms can build trust through &ldquo;benevolent&rdquo; apps — apps that help consumers solve problems or make decisions without focusing narrowly on an immediate sale. The key mechanism is trust: the authors say trust is built on competence, confidence, and benevolence, and that mobile apps are especially effective at signaling benevolence. They support this with two studies — Liberty Mutual in the U.S. and Suruga Bank in Japan — both showing that benevolent apps can improve trust, consideration, and preference. The main takeaway is that a mobile app should be part of a broader brand and trust strategy, not just a digital promotion tool.</p>
          </ScriptBox>
          <ScriptBox label="中文 · 30–45 秒" color={colors.green}>
            <p>這篇文章主張 mobile apps 不應只被視為 direct selling tools。Urban 與 Sultan 提出企業可透過「benevolent apps」建立 trust——先幫消費者解決問題或做決策，而不是只盯著 immediate sale。核心機制是 trust，由 competence、confidence、benevolence 構成，mobile apps 特別適合傳達 benevolence。作者用美國 Liberty Mutual 與日本 Suruga Bank 兩個 studies 支持論點。最大 takeaway：mobile app 應是 brand strategy 和 trust strategy 的一部分。</p>
          </ScriptBox>
          <div style={{ height: 18 }} />
          <ScriptBox label="ENGLISH · 60–90 sec" color={colors.navy}>
            <p>What I found most important is that the article reframes mobile marketing from a transaction lens to a trust lens. The authors contrast push apps — designed to generate sales and promote deals — with benevolent apps, which help consumers in ways not directly tied to an immediate sale. Their argument is not that firms should stop selling. It is that if an app clearly advances the customer's interests, it strengthens the benevolence component of trust, which then improves consideration, preference, and willingness to buy.</p>
            <p style={{ marginTop: 10 }}>The strongest example is Liberty Mutual. The company does not sell moving insurance, yet it developed an app to help people who were moving — a digital safe for recording valuables and a box inventory tool. The app still had a brand capture mechanism on the final screen linking users to agents, so it was not anti-commercial — it was customer value first, with a credible bridge back to the brand.</p>
            <p style={{ marginTop: 10 }}>The article supports this with two studies using pre/post measurement and control conditions. In these forced-exposure settings, the benevolent apps produced stronger incremental effects than specific control media. But the authors do not claim apps replace other media — they say apps should be part of an optimized media mix. I would also note that the evidence mainly captures attitudes, consideration, preference, and purchase intent rather than long-run realized sales, so I see this as strong support for strategic value, not final proof.</p>
          </ScriptBox>
        </div>

        <Dv />

        {/* B: Core */}
        <div style={{ marginBottom: 44 }}>
          <SectionHead letter="B" bg={colors.green} title={<div><div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1.3, textTransform: "uppercase", color: "#8E8574" }}>Section B</div><h2 style={{ fontSize: 18, fontWeight: 700 }}>{t("Core Argument", "核心論點")}</h2></div>} />

          <Card>
            <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              <Tag type="g">ARTICLE</Tag> {t("What is a Benevolent App?", "什麼是善意型 App？")} <Badge color={colors.red}>KEY DEFINITION</Badge>
            </h3>
            <p style={{ fontSize: 14, color: "#3E3828", lineHeight: 1.82 }}>
              {t(
                <>Apps whose value is <strong>not directly tied to selling products</strong>, but to <strong>advancing consumers' interests</strong> and advocating for their needs <strong>ahead of the company's short-term profit</strong>.</>,
                <>善意型 App 的價值<strong>不直接綁在產品銷售上</strong>，而是<strong>推進消費者利益</strong>，把顧客需求放在公司短期獲利前面。</>
              )}
            </p>
          </Card>

          <Card>
            <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}><Tag type="g">ARTICLE</Tag> Push Apps vs. Benevolent Apps</h3>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <div style={{ flex: 1, minWidth: 220, background: "#FDF0F0", border: "1px solid #EABCBC", borderRadius: 12, padding: 18 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: colors.red, marginBottom: 6 }}>PUSH APPS</div>
                <p style={{ fontSize: 13 }}>{t(<>Staples, Domino's, Zappos<br/>Goal: generate sales, promote deals<br/>Starting point: company's selling objective</>, <>Staples、Domino's、Zappos<br/>目標：促進銷售、推送優惠<br/>出發點：公司的銷售目標</>)}<br/><span style={{ color: "#6E5A18", fontSize: 11, fontWeight: 700 }}>→ Selling orientation</span></p>
              </div>
              <div style={{ flex: 1, minWidth: 220, background: "#EDF7F0", border: "1px solid #ACD8BC", borderRadius: 12, padding: 18 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: colors.green, marginBottom: 6 }}>BENEVOLENT APPS</div>
                <p style={{ fontSize: 13 }}>{t(<>Sea Tow, North Face, Columbia<br/>Goal: help customers, build trust<br/>Starting point: customer's need/difficulty</>, <>Sea Tow、North Face、Columbia<br/>目標：幫助顧客、建立信任<br/>出發點：顧客的需求/困難</>)}<br/><span style={{ color: "#6E5A18", fontSize: 11, fontWeight: 700 }}>→ Customer orientation</span></p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              <Tag type="g">ARTICLE</Tag> {t("Core Mechanism: Trust", "核心機制：信任")} <Badge color={colors.red}>KEY MECHANISM</Badge>
            </h3>
            <p style={{ fontSize: 13, marginBottom: 16 }}>{t(<>Trust is built on three factors (Bart, Shankar, <strong>Sultan</strong> &amp; Urban, 2005 — <Tag type="r">Sultan's prior research</Tag>):</>, <>信任建立在三個因素上（Bart, Shankar, <strong>Sultan</strong> &amp; Urban, 2005 — <Tag type="r">Sultan 教授的先前研究</Tag>）：</>)}</p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", margin: "20px 0" }}>
              {[
                { icon: "🏆", name: "Competence", zh: "能力", desc: ["High-quality product/service", "提供高品質產品/服務"], color: colors.navy },
                { icon: "🤝", name: "Confidence", zh: "信心", desc: ["Customers believe the company", "顧客相信公司會負責"], color: colors.gold },
                { icon: "💚", name: "Benevolence", zh: "善意", desc: ["Provider has customer's interests in mind", "企業把顧客利益放心上"], color: colors.green },
              ].map(f => (
                <div key={f.name} style={{ flex: 1, minWidth: 170, background: "#F3EEE6", border: "1px solid #DDD8CE", borderTop: `4px solid ${f.color}`, borderRadius: 12, padding: "22px 16px", textAlign: "center" }}>
                  <div style={{ fontSize: 28 }}>{f.icon}</div>
                  <h4 style={{ fontSize: 14, fontWeight: 700, color: f.color, margin: "8px 0 6px" }}>{f.name}{lang !== "en" && <><br/><span style={{ fontSize: 13, color: "#625A4A" }}>{f.zh}</span></>}</h4>
                  <p style={{ fontSize: 12, color: "#625A4A" }}>{t(f.desc[0], f.desc[1])}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 14 }}>{t(<>Key claim: <strong>mobile apps are especially effective at signaling benevolence</strong>.</>, <>關鍵主張：<strong>mobile apps 特別適合傳達 benevolence</strong>。</>)}</p>
            <Callout type="w">{t(<>Trust must be sustained by <strong>quality service</strong> and <strong>transparent communication</strong>. Cannot compensate for weak products indefinitely.</>, <>信任須由<strong>品質服務</strong>與<strong>透明溝通</strong>持續強化。無法永遠替弱產品擦屁股。</>)}</Callout>
          </Card>

          <Card style={{ borderLeft: `5px solid ${colors.gold}` }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}><Tag type="g">ARTICLE</Tag> Sea Tow — {t("Anchor Example", "錨定案例")}</h3>
            <p><strong>Sea Tow Service International</strong> (Southold, NY) — {t("boater emergency towing & rescue.", "提供船主緊急拖吊與救援服務。")}</p>
            <p style={{ marginTop: 8 }}><strong>{t("Free App:", "免費 App：")}</strong> {t("tide tables · marine weather · GPS · speed", "潮汐表、海洋天氣、GPS 座標、速度")}</p>
            <p style={{ marginTop: 8 }}>{t(<><strong>Counterintuitive:</strong> Safety info might reduce accidents = less demand? Article argues opposite — consumers sense benevolence → more trust → choose Sea Tow in emergencies.</>, <><strong>反直覺：</strong>安全資訊降低事故＝削弱需求？文章反論——消費者感受善意 → 更信任 → 緊急時選 Sea Tow。</>)}</p>
            <p style={{ marginTop: 8 }}>{t(<>App retains <strong>emergency help slider</strong> → customer welfare first, commercial relevance in background. <strong>Not anti-commercial.</strong></>, <>App 保留 <strong>emergency help slider</strong> → 先 customer welfare，再保留商業連結。<strong>並非反商業。</strong></>)}</p>
          </Card>
        </div>

        <Dv />

        {/* C: Logic Flow */}
        <div style={{ marginBottom: 44 }}>
          <SectionHead letter="C" bg={colors.purple} title={<div><div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1.3, textTransform: "uppercase", color: "#8E8574" }}>Section C</div><h2 style={{ fontSize: 18, fontWeight: 700 }}>{t("Article Logic Flow", "文章邏輯流程")}</h2></div>} />
          <Card style={{ textAlign: "center", padding: "32px 22px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#8E8574", letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 22 }}>{t("Causal Path — The Article's Core Argument", "因果路徑 — 文章核心論證")}</div>
            {[[
              { text: "Benevolent App", sub: t("Helps, not sells", "幫助而非銷售"), bg: "#EDE4F6", color: colors.purple, border: "#D4C4EE" },
              { text: t("Signals Benevolence", "傳達善意"), bg: "#EDE4F6", color: colors.purple, border: "#D4C4EE" },
              { text: "Trust ↑", sub: t("Trust rises", "信任提升"), bg: "#DCE8F4", color: colors.navy, border: "#ACC4DC" },
            ], [
              { text: "Trust ↑", bg: "#DCE8F4", color: colors.navy, border: "#ACC4DC" },
              { text: "Consideration ↑", sub: t("Brand considered", "品牌考慮"), bg: "#E4F2E8", color: colors.green, border: "#AAD6BC" },
              { text: "Preference ↑", sub: t("Brand preferred", "品牌偏好"), bg: "#E4F2E8", color: colors.green, border: "#AAD6BC" },
              { text: "Purchase Intent ↑", sub: t("Willingness to buy", "購買意圖"), bg: "#FFF4DA", color: "#7A5A08", border: "#E4D29C" },
            ]].map((row, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
                {row.map((node, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    {j > 0 && <span style={{ color: "#8E8574", fontSize: 18 }}>→</span>}
                    <div style={{ padding: "12px 18px", borderRadius: 10, fontSize: 12.5, fontWeight: 600, background: node.bg, color: node.color, border: `1px solid ${node.border}`, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, minWidth: 100 }}>
                      {node.text}
                      {node.sub && <small style={{ fontSize: 10, fontWeight: 400, opacity: 0.65 }}>{node.sub}</small>}
                    </div>
                  </div>
                ))}
              </div>
            ))}
            <div style={{ fontSize: 11, color: "#8E8574", marginTop: 16, fontStyle: "italic", lineHeight: 1.6 }}>
              {t("Evidence mainly captures attitudes/intent, not long-run realized sales.", "文章 evidence 主要停留在態度與意向層面，而非長期已實現銷售。")}
            </div>
          </Card>
        </div>

        <Dv />

        {/* D: Spectrum */}
        <div style={{ marginBottom: 44 }}>
          <SectionHead letter="D" bg={colors.gold} title={<div><div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1.3, textTransform: "uppercase", color: "#8E8574" }}>Section D</div><h2 style={{ fontSize: 18, fontWeight: 700 }}>{t("Benevolence Spectrum", "善意光譜")}</h2></div>} />
          <div style={{ display: "flex", borderRadius: 12, overflow: "hidden", margin: "18px 0", fontWeight: 600, textAlign: "center", border: "1px solid #DDD8CE" }}>
            {spectrumData.map((s, i) => (
              <div key={i} style={{ padding: "18px 8px", flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, background: s.bg, color: s.color, fontSize: 12 }}>
                {s.dir && <div style={{ fontSize: 9, opacity: 0.6, letterSpacing: 0.6, fontWeight: 700 }}>{s.dir}</div>}
                <strong>{s.label}</strong>
                {lang !== "en" && <div style={{ fontSize: 10, opacity: 0.7 }}>{s.zh}</div>}
                <div style={{ fontSize: 10.5, opacity: 0.8, lineHeight: 1.5, fontWeight: 500 }}>{s.ex}</div>
                {s.dir2 && <div style={{ fontSize: 9, opacity: 0.6, letterSpacing: 0.6, fontWeight: 700 }}>{s.dir2}</div>}
              </div>
            ))}
          </div>
          <Callout type="i">{t(<>Not binary. Managers have <strong>strategic flexibility</strong>. Trust strategy → far right. Promo → evolve left to right.</>, <>非二元。Manager 有<strong>策略彈性</strong>。信任策略 → 最右端。促銷導向 → 從左往右演進。</>)}</Callout>
          <Callout type="w"><span style={{ fontSize: 12 }}>{t(<>Nationwide discussed in text but <strong>not plotted on the spectrum figure</strong>.</>, <>Nationwide 在正文討論但<strong>未出現在光譜圖上</strong>。</>)}</span></Callout>
        </div>

        <Dv />

        {/* E: Studies */}
        <div style={{ marginBottom: 44 }}>
          <SectionHead letter="E" bg={colors.navy} title={<div><div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1.3, textTransform: "uppercase", color: "#8E8574" }}>Section E</div><h2 style={{ fontSize: 18, fontWeight: 700 }}>{t("Two Empirical Studies", "兩項實證研究")}</h2></div>} />

          <Card style={{ borderLeft: `5px solid ${colors.navy}` }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>Study #1: Liberty Mutual — "Dubble Wrap" <Badge color={colors.navy}>BEST EXAMPLE</Badge></h3>
            <p><strong>Company:</strong> Liberty Mutual, Boston | <strong>Target:</strong> {t("People moving", "搬家中的人")} | <strong>Features:</strong> Digital safe + Box inventory</p>
            <Callout type="g">{t(<><strong>Key Insight:</strong> Sells auto/homeowners/property insurance — <strong>does NOT sell moving insurance</strong>. Purest benevolence.</>, <><strong>關鍵洞見：</strong>賣汽車/房屋/財產保險——<strong>不賣搬家保險</strong>。最純粹的善意展示。</>)}</Callout>
            <p style={{ fontSize: 13 }}>{t(<><strong>Goodwill-capture:</strong> Final screen links to agents. Items catalogued → simplifies application. <strong>Customer value first + credible bridge.</strong></>, <><strong>善意轉化：</strong>最後一頁連結 agents。物品已編目 → 簡化申請。<strong>先 customer value，再 credible bridge。</strong></>)}</p>
            <p style={{ fontSize: 12, color: "#8E8574", marginTop: 8 }}><strong>Design:</strong> 2010 · 750 iPhone · 550 app | 100 website ctrl | 100 TV ctrl · Pre/post</p>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0, fontSize: 13, margin: "14px 0", borderRadius: 10, overflow: "hidden", border: "1px solid #DDD8CE" }}>
              <thead><tr>{["Metric", "Before", "After", "Change"].map(h => <th key={h} style={{ background: "#F3EEE6", color: colors.navy, fontWeight: 700, padding: "12px 16px", textAlign: "left", fontSize: 12 }}>{h}</th>)}</tr></thead>
              <tbody>
                {[["Consideration (1-10)", "5.4", "6.7", "+24%"],
                  ["Purchase likelihood (1-5)", "2.9", "3.3", "+14%"],
                ].map(([m, b, a, c], i) => (
                  <tr key={i}><td style={{ padding: "12px 16px", borderTop: "1px solid #DDD8CE" }}>{m}</td><td style={{ padding: "12px 16px", borderTop: "1px solid #DDD8CE" }}>{b}</td><td style={{ padding: "12px 16px", borderTop: "1px solid #DDD8CE" }}>{a}</td><td style={{ padding: "12px 16px", borderTop: "1px solid #DDD8CE", color: colors.green, fontWeight: 700, fontSize: 14 }}>{c}</td></tr>
                ))}
                <tr><td style={{ padding: "12px 16px", borderTop: "1px solid #DDD8CE" }}>Combined sales potential</td><td colSpan={2} style={{ padding: "12px 16px", borderTop: "1px solid #DDD8CE", textAlign: "center" }}>1.24 × 1.14</td><td style={{ padding: "12px 16px", borderTop: "1px solid #DDD8CE", color: colors.green, fontWeight: 700, fontSize: 14 }}>= 1.41 → +41%</td></tr>
                <tr><td style={{ padding: "12px 16px", borderTop: "1px solid #DDD8CE" }}>Preference (100-pt)</td><td style={{ padding: "12px 16px", borderTop: "1px solid #DDD8CE" }}>9.2%</td><td style={{ padding: "12px 16px", borderTop: "1px solid #DDD8CE" }}>17%</td><td style={{ padding: "12px 16px", borderTop: "1px solid #DDD8CE", color: colors.green, fontWeight: 700, fontSize: 14 }}>≈ 2×</td></tr>
                <tr><td style={{ padding: "12px 16px", borderTop: "1px solid #DDD8CE" }}>vs. TV/website</td><td colSpan={3} style={{ padding: "12px 16px", borderTop: "1px solid #DDD8CE", color: "#6E5A18", fontWeight: 700 }}>+60% consideration · +34% preference (forced-exposure)</td></tr>
              </tbody>
            </table>
          </Card>

          <Card style={{ borderLeft: `5px solid ${colors.green}` }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>Study #2: Suruga Bank — {t("Housing/Financial App", "住宅/財務規劃 App")}</h3>
            <p><strong>Company:</strong> Suruga Bank, Shizuoka, Japan | <strong>Features:</strong> {t("Home selection + budget advisor + loan info", "住宅選擇 + 預算顧問 + 貸款資訊")}</p>
            <Callout type="w"><span style={{ fontSize: 12 }}>{t(<><strong>App name varies:</strong> "Dream Mover" vs "Dream Move." Safest: <strong>"Suruga Bank's housing and financial-planning app."</strong></>, <><strong>App 名稱不一致：</strong>正文 "Dream Mover"，研究框 "Dream Move"。最穩：<strong>「駿河銀行的住宅及財務規劃 App」。</strong></>)}</span></Callout>
            <p style={{ fontSize: 12, color: "#8E8574" }}><strong>Design:</strong> 2013 · 1,500 · 500 app | 500 article ctrl | 500 ad ctrl · Pre/post</p>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0, fontSize: 13, margin: "14px 0", borderRadius: 10, overflow: "hidden", border: "1px solid #DDD8CE" }}>
              <thead><tr><th style={{ background: "#F3EEE6", color: colors.navy, fontWeight: 700, padding: "12px 16px", textAlign: "left", fontSize: 12 }}>Metric</th><th style={{ background: "#F3EEE6", color: colors.navy, fontWeight: 700, padding: "12px 16px", textAlign: "left", fontSize: 12 }}>Result</th></tr></thead>
              <tbody>
                {[
                  [te("Trust attributes", "信任屬性"), <span style={{ color: colors.green, fontWeight: 700 }}>{te("All sig. improved (p < .01)", "全部顯著改善 (p < .01)")}</span>],
                  ["Consideration", <span style={{ color: colors.green, fontWeight: 700, fontSize: 14 }}>4.34 → 14.16 = 2.26×</span>],
                  ["Preference (100-pt)", <span style={{ color: colors.green, fontWeight: 700, fontSize: 14 }}>0.99 → 3.04 = 3×</span>],
                  ["vs. print ad", <span style={{ color: "#6E5A18", fontWeight: 700 }}>&gt;2× {te("effective (forced-exposure)", "有效（forced-exposure）")}</span>],
                ].map(([m, r], i) => (
                  <tr key={i}><td style={{ padding: "12px 16px", borderTop: "1px solid #DDD8CE" }}>{m}</td><td style={{ padding: "12px 16px", borderTop: "1px solid #DDD8CE" }}>{r}</td></tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#8E8574" }}>{t(<><strong>Cross-cultural:</strong> U.S. + Japan both positive → diverse cultural contexts → global brands.</>, <><strong>跨文化：</strong>美日均正面 → 多元文化適用 → 全球品牌。</>)}</p>
          </Card>

          <div style={{ fontSize: 15, fontWeight: 700, margin: "24px 0 12px" }}>{t("Key Numbers at a Glance", "關鍵數字速查")} <Badge color={colors.red}>MEMORIZE</Badge></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            {[
              ["+24%", colors.navy, "LM Consider.", "5.4→6.7"],
              ["+41%", colors.green, "LM Sales Pot.", "1.24×1.14"],
              ["2.26×", colors.gold, "Suruga Cons.", "4.34→14.16"],
              ["3×", colors.purple, "Suruga Pref.", "0.99→3.04"],
            ].map(([v, c, l1, l2]) => (
              <div key={l1} style={{ background: "#fff", border: "2px solid #DDD8CE", borderRadius: 14, padding: "22px 12px", textAlign: "center" }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: c, lineHeight: 1.15 }}>{v}</div>
                <div style={{ fontSize: 11, color: "#625A4A", marginTop: 6, fontWeight: 500 }}>{l1}<br/>{l2}</div>
              </div>
            ))}
          </div>
        </div>

        <Dv />

        {/* F: Steps */}
        <div style={{ marginBottom: 44 }}>
          <SectionHead letter="F" bg={colors.gold} title={<div><div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1.3, textTransform: "uppercase", color: "#8E8574" }}>Section F</div><h2 style={{ fontSize: 18, fontWeight: 700 }}>{t("Five Managerial Steps", "五大管理步驟")}</h2></div>} />
          <Callout type="i">{t(<>Sultan emphasizes <strong>action orientation</strong>. These are the article's direct prescriptions.</>, <>Sultan 教授重視 <strong>action orientation</strong>。以下是文章的直接管理建議。</>)}</Callout>
          <Step n={1} title={t("Decide Benevolence Level", "決定善意程度")}>{t(<>What info do customers need? What service? How to simplify? Be unique, useful, tech-backed. <strong>Clear brand link</strong>. Trust → far right. Promo → left to right.</>, <>顧客需要什麼資訊？什麼服務？如何簡化？獨特、有用、有技術支撐。<strong>保留清楚品牌連結</strong>。信任策略 → 最右端。促銷 → 從左往右。</>)}</Step>
          <Step n={2} title={t("Design Like a New Product", "像新產品一樣設計")}>{t(<>Not an IT task. <strong>Go/no-go steps</strong>, focus groups. LM: heavy vs. light → chose simpler. Suruga: 3 focus groups.</>, <>不是 IT 任務。<strong>Go/no-go 決策點</strong>、焦點座談。LM：完整版 vs. 精簡版 → 選精簡。駿河：3 場焦點座談。</>)}</Step>
          <Step n={3} title={t("Test with Users", "與用戶測試")}>{t(<><strong>Flawless & relevant</strong> — glitches undermine trust. Know how app creates value + <strong>psychological brand link</strong>. May need 2.0.</>, <><strong>完美且相關</strong>——故障會傷害信任。了解 App 如何創造價值 + 建立<strong>品牌心理連結</strong>。可能需要 2.0。</>)}</Step>
          <Step n={4} title={t("Launch with Marketing Support", "配合行銷支援上市")}>{t("= launching new product. Awareness not automatic. Dedicated budget. 1M+ apps → invisible without advertising.", "如同新產品上市。知名度不會自動產生。專門預算。百萬+ App → 無廣告則隱形。")}</Step>
          <Step n={5} title={t("Link to Overall Media Strategy", "連結整體媒體策略")}>{t(<>Part of trust-building strategy. Article: <strong>"other media also important"</strong> → optimized mix. <span style={{ color: colors.red, fontWeight: 700 }}>Do NOT say "apps replace traditional media."</span></>, <>作為信任策略一部分。文章：<strong>「其他媒體也很重要」</strong> → 最佳化媒體組合。<span style={{ color: colors.red, fontWeight: 700 }}>不要說「App 取代傳統媒體」。</span></>)}</Step>
        </div>

        <Dv />

        {/* G: Comments */}
        <div style={{ marginBottom: 44 }}>
          <SectionHead letter="G" bg={colors.purple} title={<div><div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1.3, textTransform: "uppercase", color: "#8E8574" }}>Section G</div><h2 style={{ fontSize: 18, fontWeight: 700 }}>{t("Ready-to-Use Comments", "課堂短評論")}</h2></div>} />
          <Comment label="1 — Mechanism">{t(<>Gives a <strong>mechanism</strong>. Benevolence strengthens trust → brands must enter <strong>consideration set</strong>.</>, <>提供 <strong>mechanism</strong>。Benevolence 強化 trust → 品牌必須先進入 <strong>consideration set</strong>。</>)}</Comment>
          <Comment label="2 — Still Strategic">{t(<><strong>Not anti-business.</strong> LM created a <strong>bridge</strong> to other products. Customer value first, not without business relevance.</>, <><strong>並非反商業。</strong>LM 為其他保險產品建立 <strong>bridge</strong>。先 customer value，但仍有商業關聯。</>)}</Comment>
          <Comment label="3 — Spectrum">{t(<>Managers pick the <strong>right level</strong> for brand and competitive context. Not binary.</>, <>Manager 依品牌與競爭情境選擇<strong>適合的善意程度</strong>。非二元。</>)}</Comment>
          <Comment label="4 — Qualification">{t(<>Strong evidence but mainly <strong>attitudes/intent</strong>. Strategic potential, not final proof of long-run sales.</>, <>Evidence 強但主要測<strong>態度/意向</strong>。是 strategic potential 的強支持，非長期 sales 的最終 proof。</>)}</Comment>
          <Comment label={<>5 — Reframing <Tag type="p">EXTENSION</Tag></>} note={t("Your course extension, not article language.", "你的課程延伸，不是文章原話。")}>{t(<>Partly <strong>product design</strong> (utility), partly <strong>communication</strong> (trust), partly <strong>CRM</strong> (pre-sale relationship).</>, <>部分是<strong>產品設計</strong>（utility）、部分是<strong>溝通</strong>（信任）、部分是 <strong>CRM</strong>（售前關係）。</>)}</Comment>
        </div>

        <Dv />

        {/* H: QA */}
        <div style={{ marginBottom: 44 }}>
          <SectionHead letter="H" bg={colors.red} title={<div><div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1.3, textTransform: "uppercase", color: "#8E8574" }}>Section H</div><h2 style={{ fontSize: 18, fontWeight: 700 }}>{t("Cold-Call Q&A", "問答準備")}</h2></div>} />
          <QA n={1} q={t("What is a benevolent app?", "什麼是善意型 App？")} a={t("Value not tied to selling but to helping consumers — advancing their interests ahead of short-term profit.", "價值不綁在 selling 上，而是幫消費者做決策，consumer interests 優先。")} />
          <QA n={2} q={t("How different from push app?", "和 push app 有何不同？")} a={t(<>Push = sales + deals. Benevolent = help first. <strong>Selling vs. customer orientation.</strong></>, <>Push = 銷售+促銷。Benevolent = 先幫顧客。<strong>Selling vs. customer orientation。</strong></>)} />
          <QA n={3} q={t("Key mechanism?", "核心機制？")} a={t(<><strong>Trust</strong> = competence + confidence + benevolence. Apps signal benevolence → trust ↑ → consider/prefer/buy ↑.</>, <><strong>Trust</strong> = competence + confidence + benevolence。Apps 傳達 benevolence → trust ↑ → 考慮/偏好/購買 ↑。</>)} />
          <QA n={4} q={t("Evidence?", "有何證據？")} a={t("Two studies, pre/post + controls. LM: +24% consider, +14% purchase, pref ≈2×. Suruga: 2.26× consider, 3× pref. Forced-exposure.", "兩項研究，前後測+控制組。LM：+24% 考慮、+14% 購買、偏好 ≈2×。駿河：考慮 2.26×、偏好 3×。Forced-exposure。")} />
          <QA n={5} q={t("What should managers do?", "Manager 該怎麼做？")} a={t(<>5 steps: level → NPD design → test → launch w/ budget → media strategy. <strong>Not standalone.</strong></>, <>五步：善意程度 → NPD 設計 → 測試 → 行銷支援上市 → 媒體策略。<strong>非獨立策略。</strong></>)} />
          <QA n={6} q={<>{t("Limitations?", "研究限制？")} <Tag type="a">CRITICAL THINKING</Tag></>} a={t(<>Forced-exposure; attitudes/intent not long-run sales. "Strong indications" not proof. Benevolence must be <strong>credible</strong>.</>, <>Forced-exposure；態度/意向而非長期 sales。「Strong indications」非最終 proof。Benevolence 必須<strong>可信</strong>。</>)} />
          <QA n={7} q={t("Why Liberty Mutual strongest?", "為何 Liberty Mutual 最具代表性？")} a={t(<><strong>Doesn't sell moving insurance.</strong> Purest benevolence. Benefit = trust + downstream brand effects.</>, <><strong>不賣搬家保險。</strong>最純粹的善意展示。好處 = 信任 + 下游品牌效果。</>)} />
          <QA n={8} q={t("Cross-cultural?", "跨文化適用？")} a={t(<>U.S. + Japan both positive. <strong>Diverse cultural contexts</strong> → global brands.</>, <>美日均正面。<strong>多元文化情境</strong> → 全球品牌適用。</>)} />
        </div>

        <Dv />

        {/* I: Textbook */}
        <div style={{ marginBottom: 44 }}>
          <SectionHead letter="I" bg={colors.purple} title={<div><div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1.3, textTransform: "uppercase", color: "#8E8574" }}>Section I</div><h2 style={{ fontSize: 18, fontWeight: 700 }}>{t("Kotler & Keller Connections", "教科書連結")}</h2></div>} />
          <Callout type="w"><span style={{ fontSize: 12 }}>{t(<><strong>Course extension, not article language.</strong> Frame: <em>"The article shows X. From K&K, I'd connect to Y."</em></>, <><strong>課程延伸，非文章原話。</strong>句型：<em>「文章顯示 X。從 K&K 角度，我連結到 Y。」</em></>)}</span></Callout>
          <Card>
            <TBRow ch="Ch.11" name="IMC / Media Mix" strength="Strong" desc={t("Step 5 explicitly discusses overall media spend.", "第五步明確討論整體媒體支出。")} />
            <TBRow ch="Ch.10" name="NPD Process" strength="Strong" desc={t('Step 2: "design like new product, go/no-go."', "第二步：「像新產品設計，有 go/no-go。」")} />
            <TBRow ch="Ch.5" name="Consumer Decision Journey" strength="Strong" desc={t("Studies measure consideration → preference → purchase intent.", "研究測量 consideration → preference → purchase intent。")} />
            <TBRow ch="Ch.8" name="CBBE" strength="Extension" desc={t("Logic consistent but doesn't use Keller's terms.", "邏輯一致但未用 Keller 術語。")} />
            <TBRow ch="Ch.4" name="CRM & Loyalty" strength="Extension" desc={t("Trust-building relates to loyalty.", "信任建立與忠誠度相關。")} />
            <TBRow ch="Ch.7" name="Positioning" strength="Extension" desc={t("Benevolent app as differentiation.", "善意 App 作為差異化策略。")} isLast />
          </Card>
        </div>

        <Dv />

        {/* J: Cheat Sheet */}
        <div style={{ marginBottom: 44 }}>
          <SectionHead letter="J" bg={colors.green} title={<div><div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1.3, textTransform: "uppercase", color: "#8E8574" }}>Section J</div><h2 style={{ fontSize: 18, fontWeight: 700 }}>{t("Final Cheat Sheet", "最終速記")}</h2></div>} />
          <div style={{ background: "#fff", border: `2px solid ${colors.navy}`, borderRadius: 16, padding: "28px 30px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px 28px" }}>
              {[
                [t("Core Idea", "核心觀點"), t(<>Apps build <strong>trust</strong>, not just sales</>, <>App 建立<strong>信任</strong>，不只推銷</>)],
                [t("Trust", "信任公式"), <strong>Competence + Confidence + Benevolence</strong>],
                [t("Benevolent App", "善意 App"), t("Helps first; sells later if at all", "先幫助；之後才談銷售")],
                [t("Spectrum", "光譜"), "Push → Conv → Ent → Assist → Benevolent"],
                [t("Best Example", "最佳案例"), t(<><strong>Liberty Mutual</strong> — no moving insurance</>, <><strong>Liberty Mutual</strong> — 不賣搬家險</>)],
                [t("Anchor", "錨定案例"), t(<><strong>Sea Tow</strong> — safety + emergency slider</>, <><strong>Sea Tow</strong> — 安全 + 緊急滑桿</>)],
                ["Evidence", "LM (U.S. 750) + Suruga (JP 1500)"],
                ["LM", "+24% consider · +14% buy · +41% combined · pref ≈2×"],
                ["Suruga", "Consider 2.26× · Pref 3×"],
                [t("Cross-Cultural", "跨文化"), t("U.S. + Japan → global brands", "美日 → 全球品牌")],
                [t("5 Steps", "五步驟"), "Level → NPD → Test → Launch → Media mix"],
                [t("Media", "媒體提醒"), t(<>NOT "replace" → optimized mix</>, <>不是「取代」→ 最佳化組合</>)],
                [t("Critique", "批判"), t(<>Attitudes/intent not sales. "Strong indications."</>, <>態度/意向非 sales。「Strong indications」。</>)],
                [t("Caveat", "提醒"), t("Must be credible. Can't fix weak products.", "必須可信。無法替弱產品擦屁股。")],
              ].map(([k, v], i) => (
                <div key={i} style={{ display: "flex", gap: 10, padding: "6px 0", fontSize: 13, lineHeight: 1.55, borderBottom: "1px dotted #DDD8CE" }}>
                  <span style={{ color: colors.navy, fontWeight: 700, minWidth: 115, flexShrink: 0 }}>{k}</span>
                  <span style={{ color: "#3E3828" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
