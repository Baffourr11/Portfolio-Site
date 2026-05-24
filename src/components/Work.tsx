import Image from "next/image";
import { projects, sectionIntros } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

export function Work() {
  return (
    <section id="work" className="section work">
      <SectionHeader
        label="/ work"
        title="Featured projects"
        intro={sectionIntros.work}
      />
      <div className="projects">
        {projects.map((project) => (
          <article
            key={project.id}
            className={`project${project.reverse ? " project-reverse" : ""}`}
            data-aos
            data-aos-delay={project.aosDelay}
          >
            <a
              href={project.href}
              className="project-visual"
              style={
                "image" in project && project.image
                  ? undefined
                  : { background: project.gradient }
              }
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title}`}
            >
              <div className="project-visual-inner">
                {"image" in project && project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="project-image"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <>
                    <span className="project-number mono">{project.id}</span>
                    <span className="project-view mono">View →</span>
                  </>
                )}
              </div>
            </a>
            <div className="project-info">
              <span className="project-meta mono">{project.meta}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a
                href={project.href}
                className="project-link mono"
                target="_blank"
                rel="noopener noreferrer"
              >
                View project →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
