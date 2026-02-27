import Link from "next/link";

const PROJECTS = [
  {
    id: 1,
    name: "Project Name",
    location: "Location",
    area: "20 m2",
    status: "Complete",
  },
  {
    id: 2,
    name: "Project Name",
    location: "Location",
    area: "20 m2",
    status: "Complete",
  },
  {
    id: 3,
    name: "Project Name",
    location: "Location",
    area: "20 m2",
    status: "Complete",
  },
  {
    id: 4,
    name: "Project Name",
    location: "Location",
    area: "20 m2",
    status: "Complete",
  },
  {
    id: 5,
    name: "Project Name",
    location: "Location",
    area: "20 m2",
    status: "Complete",
  },
  {
    id: 6,
    name: "Project Name",
    location: "Location",
    area: "20 m2",
    status: "Complete",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="projects" aria-labelledby="projects-heading">
        <div className="container projects-inner">
          <h1 id="projects-heading" className="projects-title">
            Projects
          </h1>
          <p className="projects-subtitle">
            Showcasing our portfolio of successful construction projects across
            the Philippines
          </p>

          <div className="projects-toolbar">
            <div className="projects-search-wrap">
              <input
                type="text"
                placeholder="Search Projects"
                className="projects-search"
                aria-label="Search projects"
              />
            </div>
            <select className="projects-filter" aria-label="Filter projects">
              <option>All Projects</option>
            </select>
          </div>

          <div className="projects-grid">
            {PROJECTS.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="project-card project-card-link"
              >
                <div className="project-thumb" aria-hidden="true" />
                <div className="project-content">
                  <h3>{project.name}</h3>
                  <p className="project-location">
                    Location: {project.location}
                  </p>
                  <p className="project-area">Area: {project.area}</p>
                  <span className="project-status">{project.status}</span>
                </div>
              </Link>
            ))}
          </div>

          <nav className="projects-pagination" aria-label="Projects pagination">
            <button type="button" className="pager-link">
              Previous
            </button>
            <button
              type="button"
              className="pager-number active"
              aria-current="page"
            >
              1
            </button>
            <button type="button" className="pager-number">
              2
            </button>
            <button type="button" className="pager-number">
              3
            </button>
            <span className="pager-ellipsis">...</span>
            <button type="button" className="pager-link">
              Next
            </button>
          </nav>
        </div>
      </section>
    </main>
  );
}
