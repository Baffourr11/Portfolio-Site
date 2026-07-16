import Image from "next/image";
import { pendingWork, projects, sectionIntros } from "@/data/site";
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
        {projects.map((project) => {
          const hasImage =
            Boolean(project.image) &&
            Boolean(project.imageWidth) &&
            Boolean(project.imageHeight);

          return (
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
                  hasImage ? undefined : { background: project.gradient }
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title}`}
              >
                <div className="project-visual-inner">
                  {hasImage ? (
                    <Image
                      src={project.image!}
                      alt={`${project.title} screenshot`}
                      width={project.imageWidth!}
                      height={project.imageHeight!}
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
          );
        })}
      </div>

      <aside className="pending-work" data-aos>
        <span className="pending-work-dot" aria-hidden="true" />
        <div className="pending-work-copy">
          <span className="pending-work-label mono">{pendingWork.label}</span>
          <h3>{pendingWork.title}</h3>
          <p>{pendingWork.description}</p>
        </div>
        <a href="#contact" className="pending-work-link mono">
          Get in touch →
        </a>
      </aside>
    </section>
  );
}
