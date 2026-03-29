const en = {
  lang: "en" as string,
  title: "Full-stack Web Developer",
  location: "Bucharest, Romania",
  downloadCv: "Download CV",
  printCv: "Print CV",
  sections: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
  },
  summary:
    "Experienced full-stack developer with expertise in healthcare applications and enterprise document management, specializing in Django, Angular, and Java Spring Boot. Developed MCP tooling and AI-driven APIs over a Spring Boot document engine with ElasticSearch and BPMN 2.0 integration. Proficient in containerization, cloud infrastructure (AWS), and database management (PostgreSQL, Redis). Leading full implementation lifecycles from business analysis to delivery, including the ongoing CNAIR (National Company for Motorways and National Roads) backoffice portal. Successfully implemented embedded solutions using ESP32, migrated to multi-tenant architecture, and optimized caching systems. Strong technical leadership as a team lead and scrum master. Skilled in stakeholder communication and agile methodologies.",
  experience: [
    {
      title: "Fullstack Web Developer",
      company: "Soft31",
      period: "2022 - Present",
      bullets: [
        "Developed the MCP tool layer over a Java Spring Boot document engine for generating structured/unstructured documents and forms linked to BPMN 2.0 flows, serving as the API base for a conversational agent embedded in the application",
        "Built APIs for semantic search using ElasticSearch dense vector fields, data extraction from Rocker-templated structured documents, and OCR'd attachment content to power the agent's retrieval capabilities",
        "Created APIs for generating Jasper Reports via JasperServer, enabling the conversational agent to apply user-prompt-driven filters on report generation",
        "Leading the ongoing implementation of the CNAIR (National Company for Motorways and National Roads) backoffice portal in a B2B context: analysing client needs with Product Owners and Management Executives, mapping them into business flows using BPMN with Camunda engine, and coordinating a team of developers as team leader and scrum master",
        "Integrated IDPs (ROEID, EIDAS), Cloud Signature Consortium, and BPM engines (Bonita/Camunda); migrated frontend from Angular 9 to 18",
        "Maintained a Healthcare Observation web-app using Django ORM, REST Framework, and Angular 13+ with TypeScript",
        "Containerized project in Docker with CI/CD deployment pipelines in Jenkins on a Kubernetes architecture",
        "Leveraged AWS Cloud Services including S3, EC2, and RDS",
        "Handled reporting and auditing using PostgreSQL and JasperSoft Studio for report design",
        "Implemented a compact version of the application on an ESP32 device using ESP-IDF C/C++ framework with LVGL graphics",
        "Migrated the application from single-tenant to multi-tenant architecture using Keycloak IAM for realm mappings",
        "Refactored caching system using Redis, achieving 30x efficiency improvement",
        "Implemented Mirth Connect for HL7 message routing and processing",
      ],
    },
    {
      title: "Lead Programming Trainer",
      company: "Logiscool Romania",
      period: "2019 - 2022",
      bullets: [
        "Taught game programming and robotics courses for middle-to-high school students using JavaScript OOP and Python with Godot",
        "Coordinated activities, feedback sessions, and trainings for the Romanian network of trainers",
        "Improved curriculum materials for robotics, C++, and Python courses",
      ],
    },
  ],
  education: [
    {
      institution:
        "National University of Science and Technology POLITEHNICA Bucharest",
      degree: "Master of Business Administration Engineering",
      period: "2024 - Present",
    },
    {
      institution: "Bucharest Academy of Economic Studies",
      degree: "Bachelor of Economic Cybernetics",
      period: "2019 - 2022",
    },
    {
      institution: "Breda University of Applied Sciences",
      degree: "Bachelor of Game Programming",
      period: "2017 - 2019",
    },
    {
      institution: "George Coșbuc Bilingual College",
      degree:
        "Cambridge CAE C1 & Oracle Database Design and Programming with SQL Certificates",
      period: "2013 - 2017",
    },
  ],
  footer: "All rights reserved.",
};

export default en;
export type Dictionary = typeof en;
