"use client";

import { useEffect, useState, useCallback } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Code2,
  Globe,
  ChevronUp,
  ChevronDown,
  User,
  Wrench,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { skills } from "@/i18n";
import PdfDownload from "./PdfDownload";
import SkillIcon from "./SkillIcons";
import LoadingScreen from "./LoadingScreen";

const NAV_ITEMS = [
  { id: "about", icon: User },
  { id: "skills", icon: Wrench },
  { id: "experience", icon: Briefcase },
  { id: "education", icon: GraduationCap },
] as const;

export default function Home() {
  const { locale, t, toggle } = useLanguage();
  const [activeSection, setActiveSection] = useState("about");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const toggleSection = useCallback((id: string) => {
    setCollapsed((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const expandAndNavigate = useCallback(
    (e: React.MouseEvent, id: string) => {
      e.preventDefault();
      if (collapsed[id]) {
        setCollapsed((prev) => ({ ...prev, [id]: false }));
        // Wait for expand animation before scrolling
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 50);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    },
    [collapsed]
  );

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sectionLabels: Record<string, string> = {
    about: t.sections.about,
    skills: t.sections.skills,
    experience: t.sections.experience,
    education: t.sections.education,
  };

  return (
    <LoadingScreen>
    <div className="flex min-h-screen">
      {/* Language toggle - fixed top right */}
      <button
        onClick={toggle}
        aria-label={
          locale === "en" ? "Switch to Romanian" : "Schimbă în Engleză"
        }
        className="fixed top-4 right-4 z-50 flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-full text-sm font-medium hover:bg-accent-light transition-colors shadow-sm"
      >
        <Globe className="w-4 h-4" />
        {locale === "en" ? "RO" : "EN"}
      </button>

      {/* Left sidebar nav */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 flex-col items-center border-r border-border bg-card/50 backdrop-blur-sm p-8 z-40">
        {/* Identity */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Matei Bărgău</h1>
          <p className="text-base text-accent font-medium mt-1">{t.title}</p>
        </div>

        {/* Nav links */}
        <nav
          className="w-full"
          aria-label={
            locale === "en" ? "Section navigation" : "Navigare secțiuni"
          }
        >
          <ul className="space-y-1">
            {NAV_ITEMS.map(({ id, icon: Icon }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => expandAndNavigate(e, id)}
                  aria-current={activeSection === id ? "true" : undefined}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    activeSection === id
                      ? "bg-accent text-white"
                      : "text-muted hover:text-accent hover:bg-accent-light"
                  }`}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                  {sectionLabels[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Spacer to push button down */}
        <div className="flex-1" />

        {/* Download CV */}
        <div className="flex flex-col items-center gap-2 mb-4">
          <PdfDownload />
          <span className="text-xs text-muted font-medium uppercase tracking-widest">
            {t.downloadCv}
          </span>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-card/80 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-4 h-14">
          <span className="text-sm font-bold">Matei Bărgău</span>
          <div className="flex items-center gap-2 pr-16">
            <PdfDownload />
          </div>
        </div>
        <div className="flex items-center gap-1 px-4 pb-2 overflow-x-auto">
          {NAV_ITEMS.map(({ id, icon: Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => expandAndNavigate(e, id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                activeSection === id
                  ? "bg-accent text-white"
                  : "text-muted hover:text-accent hover:bg-accent-light"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {sectionLabels[id]}
            </a>
          ))}
        </div>
      </div>

      {/* Contact card - fixed right side */}
      <ContactCard locale={locale} location={t.location} />

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label={locale === "en" ? "Back to top" : "Înapoi sus"}
        className={`fixed bottom-6 right-6 z-50 p-3 bg-accent text-white rounded-full shadow-lg transition-all duration-300 hover:opacity-90 ${
          showBackToTop
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* Main content */}
      <main
        id="main-content"
        role="main"
        className="w-full lg:ml-64 xl:mr-80 px-6 sm:px-12 lg:px-16 pt-28 lg:pt-16 pb-16 animate-fade-in"
      >
        {/* About */}
        <Section
          id="about"
          title={t.sections.about}
          icon={<Code2 className="w-6 h-6 text-accent" aria-hidden="true" />}
          collapsed={!!collapsed.about}
          onToggle={() => toggleSection("about")}
        >
          <p className="text-muted text-lg leading-loose text-justify">{t.summary}</p>
        </Section>

        {/* Skills */}
        <Section
          id="skills"
          title={t.sections.skills}
          icon={<Wrench className="w-6 h-6 text-accent" aria-hidden="true" />}
          collapsed={!!collapsed.skills}
          onToggle={() => toggleSection("skills")}
        >
          <div
            className="flex flex-wrap gap-3"
            role="list"
            aria-label="Technical skills"
          >
            {skills.map((skill) => (
              <span
                key={skill}
                role="listitem"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-light text-accent text-base font-medium rounded-full"
              >
                <SkillIcon name={skill} />
                {skill}
              </span>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section
          id="experience"
          title={t.sections.experience}
          icon={
            <Briefcase className="w-6 h-6 text-accent" aria-hidden="true" />
          }
          collapsed={!!collapsed.experience}
          onToggle={() => toggleSection("experience")}
        >
          <div className="space-y-14">
            {t.experience.map((exp, i) => (
              <ExperienceItem key={i} {...exp} />
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section
          id="education"
          title={t.sections.education}
          icon={
            <GraduationCap
              className="w-6 h-6 text-accent"
              aria-hidden="true"
            />
          }
          collapsed={!!collapsed.education}
          onToggle={() => toggleSection("education")}
        >
          <div className="space-y-10">
            {t.education.map((edu, i) => (
              <EducationItem key={i} {...edu} />
            ))}
          </div>
        </Section>

        {/* Footer */}
        <footer
          role="contentinfo"
          className="mt-24 pt-8 border-t border-border text-center text-sm text-muted"
        >
          <p>
            &copy; {new Date().getFullYear()} Matei Bărgău. {t.footer}
          </p>
        </footer>
      </main>
    </div>
    </LoadingScreen>
  );
}

function Section({
  id,
  title,
  icon,
  children,
  collapsed,
  onToggle,
  delay,
}: {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  collapsed: boolean;
  onToggle: () => void;
  delay?: number;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-20 lg:scroll-mt-8 ${delay ? `animate-fade-in animate-delay-${delay}` : ""}`}
    >
      <button
        onClick={onToggle}
        aria-expanded={!collapsed}
        aria-controls={`${id}-content`}
        className="w-full flex items-center gap-3 py-6 border-t border-border cursor-pointer group"
      >
        {icon}
        <h2
          id={`${id}-heading`}
          className="text-3xl font-bold flex-1 text-left"
        >
          {title}
        </h2>
        <span className="text-muted group-hover:text-accent transition-colors">
          {collapsed ? (
            <ChevronDown className="w-5 h-5" />
          ) : (
            <ChevronUp className="w-5 h-5" />
          )}
        </span>
      </button>
      <div
        id={`${id}-content`}
        className={`overflow-hidden transition-all duration-300 ${
          collapsed
            ? "max-h-0 opacity-0 mb-0"
            : "max-h-[5000px] opacity-100 mb-16"
        }`}
      >
        <div className="pt-4">{children}</div>
      </div>
    </section>
  );
}

function ExperienceItem({
  title,
  company,
  period,
  bullets,
}: {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}) {
  return (
    <article>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-accent text-lg font-medium">{company}</p>
        </div>
        <time className="text-sm text-muted font-mono mt-1 sm:mt-0">
          {period}
        </time>
      </div>
      <ul className="list-disc list-outside ml-5 space-y-3 text-muted text-[15px] leading-loose text-justify">
        {bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}

function EducationItem({
  institution,
  degree,
  period,
}: {
  institution: string;
  degree: string;
  period: string;
}) {
  return (
    <article className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
      <div>
        <h3 className="text-lg font-semibold">{institution}</h3>
        <p className="text-[15px] text-muted">{degree}</p>
      </div>
      <time className="text-sm text-muted font-mono mt-1 sm:mt-0 shrink-0">
        {period}
      </time>
    </article>
  );
}

function ContactCard({ locale, location }: { locale: string; location: string }) {
  return (
    <div className="hidden xl:block fixed top-16 right-8 z-30 w-64">
      <div className="bg-[#1e40af] dark:bg-[#1e3a5f] rounded-2xl p-6 shadow-sm">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-5">
          {locale === "en" ? "Contact" : "Contact"}
        </h2>

        <div className="space-y-4 text-sm">
          <a
            href="mailto:matei.bargau98@gmail.com"
            className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4 shrink-0 text-white" aria-hidden="true" />
            matei.bargau98@gmail.com
          </a>
          <a
            href="tel:+40765262714"
            className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 shrink-0 text-white" aria-hidden="true" />
            +40 765 262 714
          </a>
          <span className="flex items-center gap-3 text-white/80">
            <MapPin className="w-4 h-4 shrink-0 text-white" aria-hidden="true" />
            {location}
          </span>
        </div>

        <div className="flex gap-4 mt-5 pt-4 border-t border-white/20">
          <a
            href="https://www.linkedin.com/in/matei-b%C4%83rg%C4%83u/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-white/60 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://github.com/mateibargau"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-white/60 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
