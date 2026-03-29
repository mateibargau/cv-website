import type { Dictionary } from "./en";

const ro: Dictionary = {
  lang: "ro",
  title: "Dezvoltator Web Full-stack",
  location: "București, România",
  downloadCv: "Descarcă CV",
  printCv: "Printează CV",
  sections: {
    about: "Despre mine",
    skills: "Competențe",
    experience: "Experiență profesională",
    education: "Educație",
  },
  summary:
    "Dezvoltator full-stack cu experiență în aplicații din domeniul sănătății și management de documente enterprise, specializat în Django, Angular și Java Spring Boot. Am dezvoltat tooling MCP și API-uri bazate pe AI peste un motor de documente Spring Boot cu integrare ElasticSearch și BPMN 2.0. Competențe avansate în containerizare, infrastructură cloud (AWS) și administrarea bazelor de date (PostgreSQL, Redis). Am condus cicluri complete de implementare de la analiză de business până la livrare, inclusiv portalul backoffice CNAIR (Compania Națională de Autostrăzi și Drumuri Naționale), aflat în curs de implementare. Am implementat cu succes soluții embedded folosind ESP32, am migrat la o arhitectură multi-tenant și am optimizat sistemele de caching. Leadership tehnic solid ca team lead și scrum master. Abilități de comunicare cu stakeholderii și experiență în metodologii agile.",
  experience: [
    {
      title: "Dezvoltator Web Fullstack",
      company: "Soft31",
      period: "2022 - Prezent",
      bullets: [
        "Am dezvoltat layerul de tooling MCP peste un motor de documente Java Spring Boot pentru generarea de documente structurate/nestructurate și formulare legate de fluxuri BPMN 2.0, servind ca bază API pentru un agent conversațional integrat în aplicație",
        "Am construit API-uri pentru căutare semantică folosind câmpuri dense vector în ElasticSearch, extragerea datelor din documente structurate cu template-uri Rocker și conținut OCR din atașamente, pentru capabilitățile de retrieval ale agentului",
        "Am creat API-uri pentru generarea de rapoarte Jasper prin JasperServer, permițând agentului conversațional să aplice filtre bazate pe promptul utilizatorului",
        "Conduc implementarea în curs a portalului backoffice CNAIR (Compania Națională de Autostrăzi și Drumuri Naționale) într-un context B2B: analizez nevoile clientului cu Product Owners și directori executivi, le mapez în fluxuri de business folosind BPMN cu motorul Camunda și coordonez o echipă de dezvoltatori ca team leader și scrum master",
        "Am integrat IDP-uri (ROEID, EIDAS), Cloud Signature Consortium și motoare BPM (Bonita/Camunda); am migrat frontend-ul de la Angular 9 la 18",
        "Am întreținut o aplicație web de Observație Medicală folosind Django ORM, REST Framework și Angular 13+ cu TypeScript",
        "Am containerizat proiectul în Docker cu pipeline-uri CI/CD în Jenkins pe o arhitectură Kubernetes",
        "Am utilizat servicii AWS Cloud inclusiv S3, EC2 și RDS",
        "Am gestionat raportarea și auditul folosind PostgreSQL și JasperSoft Studio pentru design de rapoarte",
        "Am implementat o versiune compactă a aplicației pe un dispozitiv ESP32 folosind framework-ul ESP-IDF C/C++ cu biblioteca LVGL pentru grafică",
        "Am migrat aplicația de la o arhitectură single-tenant la multi-tenant folosind Keycloak IAM pentru maparea realm-urilor",
        "Am refactorizat sistemul de caching folosind Redis, obținând o îmbunătățire de 30x a eficienței",
        "Am implementat Mirth Connect pentru rutarea și procesarea mesajelor HL7",
      ],
    },
    {
      title: "Trainer Principal Programare",
      company: "Logiscool România",
      period: "2019 - 2022",
      bullets: [
        "Am predat cursuri de programare jocuri și robotică pentru elevi de gimnaziu și liceu folosind JavaScript OOP și Python cu Godot",
        "Am coordonat activități, sesiuni de feedback și traininguri pentru rețeaua de traineri din România",
        "Am îmbunătățit materialele curriculare pentru cursurile de robotică, C++ și Python",
      ],
    },
  ],
  education: [
    {
      institution:
        "Universitatea Națională de Știință și Tehnologie POLITEHNICA București",
      degree: "Master în Ingineria Administrării Afacerilor",
      period: "2024 - Prezent",
    },
    {
      institution: "Academia de Studii Economice din București",
      degree: "Licență în Cibernetică Economică",
      period: "2019 - 2022",
    },
    {
      institution: "Breda University of Applied Sciences",
      degree: "Licență în Programarea Jocurilor",
      period: "2017 - 2019",
    },
    {
      institution: "Colegiul Bilingv George Coșbuc",
      degree:
        "Certificate Cambridge CAE C1 și Oracle Database Design and Programming with SQL",
      period: "2013 - 2017",
    },
  ],
  footer: "Toate drepturile rezervate.",
};

export default ro;
