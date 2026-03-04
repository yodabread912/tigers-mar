import Link from "next/link";

const PROJECTS = Array.from({ length: 18 }, (_, index) => ({
  id: String(index + 1),
  name: `PROJECT NAME ${String(index + 1).padStart(2, "0")}`,
  location: "Lorem Ipsum Lorem Ipsum",
  client: "Lorem Ipsum Lorem Ipsum",
  industries: "Lorem Ipsum Lorem Ipsum",
  services: "Lorem Ipsum Lorem Ipsum",
}));

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = PROJECTS.find((item) => item.id === params.id) ?? PROJECTS[0];

  return (
    <main className="project-detail">
      <Link href="/projects" className="project-back" aria-label="Back to projects">
        &laquo;
      </Link>
      <div className="project-detail-inner">
        <div className="project-gallery">
          <button className="project-gallery-nav left" type="button" aria-label="Previous image">
            &lsaquo;
          </button>
          <div className="project-gallery-frame" aria-label="Project images" />
          <button className="project-gallery-nav right" type="button" aria-label="Next image">
            &rsaquo;
          </button>
        </div>

        <div className="project-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <h1 className="project-title-detail">{project.name}</h1>

        <div className="project-info-grid">
          <div>
            <h2>Location</h2>
            <p>{project.location}</p>
          </div>
          <div>
            <h2>Client</h2>
            <p>{project.client}</p>
          </div>
          <div>
            <h2>Industries</h2>
            <p>{project.industries}</p>
          </div>
          <div>
            <h2>Services</h2>
            <p>{project.services}</p>
          </div>
        </div>

        <div className="project-detail-body">
          <div className="project-detail-copy">
            <p>
              *Information/Details about the Project* Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Aenean commodo ligula eget dolor.
              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
              pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
          </div>
          <div className="project-detail-facts">
            <h3>Facts</h3>
            <ul>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
