import en from "./en";
import ro from "./ro";
import type { Dictionary } from "./en";

export type Locale = "en" | "ro";
export type { Dictionary };

export const dictionaries: Record<Locale, Dictionary> = { en, ro };

export const skills = [
  "Django",
  "Angular",
  "TypeScript",
  "Python",
  "Java Spring Boot",
  "RAG",
  "Semantic Search",
  "MCP",
  "ElasticSearch",
  "PostgreSQL",
  "Redis",
  "BPMN / Camunda",
  "JasperServer",
  "Docker",
  "Kubernetes",
  "AWS",
  "Jenkins",
  "Portainer",
  "Argo CD",
  "Git",
  "REST APIs",
  "ESP32 / C++",
  "Keycloak",
  "HL7 / Mirth Connect",
  "Jira / Agile",
];
