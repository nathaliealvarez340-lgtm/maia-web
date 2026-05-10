import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Method } from "@/components/sections/Method";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Method />
      <Experience />
      <Contact />
    </main>
  );
}
