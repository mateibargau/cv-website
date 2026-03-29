"use client";

const KEYWORDS = [
  "Java Spring Boot",
  "Spring Boot",
  "Django ORM",
  "REST Framework",
  "Angular 13+",
  "Angular 9",
  "Angular 18",
  "Angular",
  "TypeScript",
  "JavaScript OOP",
  "Python",
  "Django",
  "MCP",
  "ElasticSearch",
  "BPMN 2.0",
  "BPMN",
  "Camunda",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "Jenkins",
  "Keycloak IAM",
  "Keycloak",
  "ESP32",
  "ESP-IDF",
  "C/C++",
  "C++",
  "LVGL",
  "Rocker",
  "OCR",
  "JasperServer",
  "JasperSoft Studio",
  "Jasper Reports",
  "Mirth Connect",
  "HL7",
  "CNAIR",
  "Bonita",
  "Camunda",
  "ROEID",
  "EIDAS",
  "Cloud Signature Consortium",
  "S3",
  "EC2",
  "RDS",
  "Git",
  "Jira",
  "Godot",
  "Portainer",
  "Argo CD",
  "RAG",
  "B2B",
  "CI/CD",
];

// Sort by length descending so longer matches take priority
const sortedKeywords = [...KEYWORDS].sort((a, b) => b.length - a.length);

const pattern = new RegExp(
  `(${sortedKeywords.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
  "g"
);

export default function BoldKeywords({ text }: { text: string }) {
  const parts = text.split(pattern);
  return (
    <>
      {parts.map((part, i) =>
        sortedKeywords.includes(part) ? (
          <strong key={i} className="text-foreground font-semibold">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
