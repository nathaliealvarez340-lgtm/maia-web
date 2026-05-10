import { type Locale } from "@/i18n/config";

export type NewsItem = {
  title: string;
  source: string;
  publishedAt: string;
  url: string;
  category: string;
  language: Locale | "source";
  summary: Record<Locale, string>;
};

export const fallbackNews: NewsItem[] = [
  {
    title: "Certificaciones y formación continua elevan el criterio visual de los equipos creativos",
    source: "Domestika",
    publishedAt: "2026-05-04",
    url: "https://www.domestika.org/",
    category: "Diseño",
    language: "es",
    summary: {
      es: "La profesionalización del diseño ya no depende solo del portafolio: los equipos necesitan criterio, procesos y aprendizaje constante para sostener marcas más sólidas.",
      en: "Design maturity is no longer only about portfolio quality: teams need judgment, process and continuous learning to sustain stronger brands.",
      pt: "A maturidade em design já não depende apenas do portfólio: equipes precisam de critério, processo e aprendizado contínuo para sustentar marcas mais fortes.",
      it: "La maturità del design non dipende più solo dal portfolio: i team hanno bisogno di criterio, processo e apprendimento continuo per sostenere brand più solidi."
    }
  },
  {
    title: "La IA redefine la operación de empresas que buscan decidir con más velocidad",
    source: "Forbes",
    publishedAt: "2026-05-04",
    url: "https://www.forbes.com/",
    category: "IA",
    language: "source",
    summary: {
      es: "La ventaja no está en usar herramientas aisladas, sino en conectar IA con procesos, datos y responsabilidades claras dentro del negocio.",
      en: "The advantage is not in isolated tools, but in connecting AI with processes, data and clear responsibilities inside the business.",
      pt: "A vantagem não está em ferramentas isoladas, mas em conectar IA com processos, dados e responsabilidades claras dentro do negócio.",
      it: "Il vantaggio non è negli strumenti isolati, ma nel collegare IA, processi, dati e responsabilità chiare dentro il business."
    }
  },
  {
    title: "Presión económica obliga a las empresas a ordenar oferta, costos y canales",
    source: "El Economista",
    publishedAt: "2026-05-04",
    url: "https://www.eleconomista.com.mx/",
    category: "Economía",
    language: "es",
    summary: {
      es: "Cuando el mercado exige eficiencia, la claridad estratégica deja de ser estética: se vuelve una condición para vender, priorizar y proteger margen.",
      en: "When the market demands efficiency, strategic clarity stops being aesthetic and becomes a condition for selling, prioritizing and protecting margin.",
      pt: "Quando o mercado exige eficiência, clareza estratégica deixa de ser estética e vira condição para vender, priorizar e proteger margem.",
      it: "Quando il mercato richiede efficienza, la chiarezza strategica smette di essere estetica e diventa condizione per vendere, prioritizzare e proteggere margine."
    }
  },
  {
    title: "Los negocios con sistemas comerciales claros responden mejor a cambios de demanda",
    source: "Expansión",
    publishedAt: "2026-05-04",
    url: "https://expansion.mx/",
    category: "Negocios",
    language: "es",
    summary: {
      es: "Las empresas que documentan oferta, pipeline, mensajes y seguimiento tienen más capacidad de adaptación que las que dependen de memoria operativa.",
      en: "Companies that document offer, pipeline, messaging and follow-up adapt better than those depending on operational memory.",
      pt: "Empresas que documentam oferta, pipeline, mensagens e acompanhamento se adaptam melhor do que as que dependem de memória operacional.",
      it: "Le aziende che documentano offerta, pipeline, messaggi e follow-up si adattano meglio di quelle che dipendono dalla memoria operativa."
    }
  },
  {
    title: "La tecnología de crecimiento exige menos improvisación y más arquitectura",
    source: "Milenio",
    publishedAt: "2026-05-04",
    url: "https://www.milenio.com/",
    category: "Crecimiento",
    language: "es",
    summary: {
      es: "CRM, automatización y contenido solo escalan cuando existe una arquitectura previa: roles, datos, intención y medición.",
      en: "CRM, automation and content only scale when there is prior architecture: roles, data, intention and measurement.",
      pt: "CRM, automação e conteúdo só escalam quando existe arquitetura prévia: papéis, dados, intenção e medição.",
      it: "CRM, automazione e contenuti scalano solo quando esiste un'architettura previa: ruoli, dati, intenzione e misurazione."
    }
  }
];
