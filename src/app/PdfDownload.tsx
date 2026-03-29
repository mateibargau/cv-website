"use client";

import { useRef, useCallback } from "react";
import { Download } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { skills } from "@/i18n";

export default function PdfDownload() {
  const { t } = useLanguage();
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownload = useCallback(async () => {
    const element = contentRef.current;
    if (!element) return;

    // Dynamically import html2pdf.js (client-only)
    const html2pdf = (await import("html2pdf.js")).default;

    html2pdf()
      .set({
        margin: [10, 10, 10, 10],
        filename: `CV_Matei_Bargau_${t.lang.toUpperCase()}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] },
      } as Record<string, unknown>)
      .from(element)
      .save();
  }, [t]);

  return (
    <>
      <button
        onClick={handleDownload}
        aria-label={t.downloadCv}
        title={t.downloadCv}
        className="w-16 h-16 mx-auto flex items-center justify-center bg-accent text-white rounded-full hover:scale-[1.015] active:scale-[0.98] transition-all cursor-pointer"
      >
        <Download className="w-6 h-6" />
      </button>

      {/* Hidden printable content */}
      <div className="fixed left-[-9999px] top-0">
        <div
          ref={contentRef}
          style={{
            width: "190mm",
            padding: "0",
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "11px",
            lineHeight: "1.4",
            color: "#000",
            background: "#fff",
          }}
        >
          {/* Header */}
          <div style={{ borderBottom: "2px solid #000", paddingBottom: "12px", marginBottom: "14px" }}>
            <div style={{ fontSize: "26px", fontWeight: 700 }}>Matei Bărgău</div>
            <div style={{ fontSize: "15px", fontWeight: 500, color: "#555", marginBottom: "8px" }}>
              {t.title}
            </div>
            <div style={{ fontSize: "10px", color: "#666", display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <span>matei.bargau98@gmail.com</span>
              <span>+40 765 262 714</span>
              <span>{t.location}</span>
              <span>linkedin.com/in/matei-bărgău</span>
              <span>github.com/mateibargau</span>
            </div>
          </div>

          {/* Summary */}
          <PrintSection title={t.sections.about}>
            <p style={{ color: "#444" }}>{t.summary}</p>
          </PrintSection>

          {/* Skills */}
          <PrintSection title={t.sections.skills}>
            <p style={{ color: "#444" }}>{skills.join(" · ")}</p>
          </PrintSection>

          {/* Experience */}
          <PrintSection title={t.sections.experience}>
            {t.experience.map((exp, i) => (
              <div key={i} style={{ marginBottom: i < t.experience.length - 1 ? "12px" : 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <div>
                    <span style={{ fontWeight: 700, fontSize: "12px" }}>{exp.title}</span>
                    <span style={{ color: "#666" }}> | {exp.company}</span>
                  </div>
                  <span style={{ fontSize: "10px", color: "#888", flexShrink: 0, marginLeft: "12px" }}>
                    {exp.period}
                  </span>
                </div>
                <ul style={{ margin: "4px 0 0 16px", paddingLeft: 0, listStyleType: "disc" }}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={{ color: "#444", marginBottom: "2px" }}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </PrintSection>

          {/* Education */}
          <PrintSection title={t.sections.education}>
            {t.education.map((edu, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px" }}>
                <div>
                  <span style={{ fontWeight: 700, fontSize: "12px" }}>{edu.institution}</span>
                  <span style={{ color: "#666" }}> — {edu.degree}</span>
                </div>
                <span style={{ fontSize: "10px", color: "#888", flexShrink: 0, marginLeft: "12px" }}>
                  {edu.period}
                </span>
              </div>
            ))}
          </PrintSection>
        </div>
      </div>
    </>
  );
}

function PrintSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <div
        style={{
          fontSize: "13px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "1px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "3px",
          marginBottom: "6px",
        }}
      >
        {title}
      </div>
      {children}
    </div>
  );
}
