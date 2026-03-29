"use client";

import {
  SiDjango,
  SiAngular,
  SiTypescript,
  SiPython,
  SiSpringboot,
  SiElasticsearch,
  SiPostgresql,
  SiRedis,
  SiCamunda,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiPortainer,
  SiArgo,
  SiGit,
  SiCplusplus,
  SiJira,
  SiKeycloak,
} from "react-icons/si";
import {
  Brain,
  Search,
  Plug,
  FileBarChart,
  Cloud,
  Globe,
  Heart,
  Zap,
} from "lucide-react";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

type IconEntry =
  | { type: "si"; icon: IconType }
  | { type: "lucide"; icon: LucideIcon };

const skillIconMap: Record<string, IconEntry> = {
  Django: { type: "si", icon: SiDjango },
  Angular: { type: "si", icon: SiAngular },
  TypeScript: { type: "si", icon: SiTypescript },
  Python: { type: "si", icon: SiPython },
  "Java Spring Boot": { type: "si", icon: SiSpringboot },
  RAG: { type: "lucide", icon: Brain },
  "Semantic Search": { type: "lucide", icon: Search },
  MCP: { type: "lucide", icon: Plug },
  ElasticSearch: { type: "si", icon: SiElasticsearch },
  PostgreSQL: { type: "si", icon: SiPostgresql },
  Redis: { type: "si", icon: SiRedis },
  "BPMN / Camunda": { type: "si", icon: SiCamunda },
  JasperServer: { type: "lucide", icon: FileBarChart },
  Docker: { type: "si", icon: SiDocker },
  Kubernetes: { type: "si", icon: SiKubernetes },
  AWS: { type: "lucide", icon: Cloud },
  Jenkins: { type: "si", icon: SiJenkins },
  Portainer: { type: "si", icon: SiPortainer },
  "Argo CD": { type: "si", icon: SiArgo },
  Git: { type: "si", icon: SiGit },
  "REST APIs": { type: "lucide", icon: Globe },
  "ESP32 / C++": { type: "si", icon: SiCplusplus },
  Keycloak: { type: "si", icon: SiKeycloak },
  "HL7 / Mirth Connect": { type: "lucide", icon: Heart },
  "Jira / Agile": { type: "si", icon: SiJira },
};

export default function SkillIcon({ name }: { name: string }) {
  const entry = skillIconMap[name];
  if (!entry) return <Zap className="w-4 h-4" />;

  if (entry.type === "si") {
    const Icon = entry.icon;
    return <Icon size={16} />;
  }

  const Icon = entry.icon;
  return <Icon className="w-4 h-4" />;
}
