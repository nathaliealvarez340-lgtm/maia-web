import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { ContactFormValues } from "@/lib/validations";

type ContactEmailProps = ContactFormValues & {
  submittedAt: string;
};

export function ContactEmail({
  name,
  company,
  email,
  service,
  message,
  submittedAt,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New MAIA inquiry from {name}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Text style={styles.kicker}>MAIA inquiry</Text>
          <Heading style={styles.heading}>New strategic project signal</Heading>
          <Text style={styles.intro}>
            A new contact request was submitted through the MAIA website.
          </Text>
          <Hr style={styles.hr} />
          <Section>
            <Field label="Name" value={name} />
            <Field label="Company" value={company} />
            <Field label="Email" value={email} />
            <Field label="Service of interest" value={service} />
            <Field label="Submitted at" value={submittedAt} />
          </Section>
          <Section style={styles.messageBox}>
            <Text style={styles.label}>Message</Text>
            <Text style={styles.message}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <Section style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </Section>
  );
}

const styles = {
  body: {
    margin: 0,
    backgroundColor: "#050505",
    color: "#F5F5F5",
    fontFamily:
      'Inter, Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  container: {
    margin: "0 auto",
    padding: "40px 24px",
    maxWidth: "640px",
    backgroundColor: "#0B0B0F",
    border: "1px solid rgba(255,255,255,0.1)",
  },
  kicker: {
    color: "#6D28D9",
    fontSize: "12px",
    letterSpacing: "0.22em",
    textTransform: "uppercase" as const,
  },
  heading: {
    color: "#F5F5F5",
    fontSize: "32px",
    lineHeight: "1.08",
    margin: "12px 0 16px",
  },
  intro: {
    color: "#A1A1AA",
    fontSize: "16px",
    lineHeight: "26px",
  },
  hr: {
    borderColor: "rgba(109,40,217,0.45)",
    margin: "28px 0",
  },
  row: {
    margin: "0 0 18px",
  },
  label: {
    color: "#A1A1AA",
    fontSize: "12px",
    margin: "0 0 5px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.12em",
  },
  value: {
    color: "#F5F5F5",
    fontSize: "16px",
    margin: 0,
  },
  messageBox: {
    marginTop: "24px",
    padding: "20px",
    backgroundColor: "#121218",
    border: "1px solid rgba(109,40,217,0.3)",
  },
  message: {
    color: "#F5F5F5",
    fontSize: "16px",
    lineHeight: "26px",
    whiteSpace: "pre-wrap" as const,
  },
};
