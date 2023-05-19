import { AboutSection } from "../About";
import { KnowledgeSection } from "../Knowledge";
import { ProjectSection } from "../Projects";
import { Contact } from "../Contact";

export const Main = () => {
  return (
    <main>
      <div id="about"></div>
      <AboutSection />
      <div id="knowledge"></div>
      <KnowledgeSection />
      <div id="projects"></div>
      <ProjectSection />
      <div id="contact"></div>
      <Contact />
    </main>
  );
};
