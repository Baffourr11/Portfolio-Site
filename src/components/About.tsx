import { sectionIntros, site, skillGroups } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="section about">
      <SectionHeader
        label="/ about"
        title="A bit about me"
        intro={sectionIntros.about}
      />
      <div className="about-grid" data-aos data-aos-delay={100}>
        <div className="about-content">
          <p className="about-lead">
            I&apos;m a software developer, graphic designer, and frontend
            designer focused on building fast, accessible digital experiences.
          </p>
          <p>
            I work across the stack — from UI/UX in Figma to web apps with React
            and Next.js, and mobile with Flutter. I use Supabase and Firebase for
            backend and love turning designs into clean, maintainable code all
            while exploring graphic designing using Photoshop.
          </p>
          <p className="about-location mono">{site.location}</p>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-group">
              <h3 className="mono">{group.title}</h3>
              <ul className="skill-chips">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
