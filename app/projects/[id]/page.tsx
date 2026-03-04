import Link from "next/link";

function getSearchParam(
  value: string | string[] | undefined,
  fallback: string,
) {
  if (typeof value === "string" && value.trim().length > 0) {
    return value;
  }

  return fallback;
}

async function resolveValue<T>(value: T | Promise<T> | undefined) {
  if (value === undefined) {
    return undefined;
  }

  return await value;
}

export default async function ProjectDetailPage({
  params,
  searchParams,
}: {
  params?: { id?: string } | Promise<{ id?: string }>;
  searchParams?:
    | { [key: string]: string | string[] | undefined }
    | Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await resolveValue(params);
  const resolvedSearchParams = await resolveValue(searchParams);

  const safeId =
    typeof resolvedParams?.id === "string" ? resolvedParams.id : "1";
  const safeSearchParams = resolvedSearchParams ?? {};
  const fallbackName = `PROJECT NAME ${safeId.padStart(2, "0")}`;

  const project = {
    name: getSearchParam(safeSearchParams.name, fallbackName),
    location: getSearchParam(safeSearchParams.location, "Not specified"),
    industries: getSearchParam(safeSearchParams.type, "General Construction"),
    services: "Lorem ipsum",
    image: getSearchParam(safeSearchParams.image, ""),
  };

  return (
    <main className="project-detail">
      <Link
        href="/projects"
        className="project-back"
        aria-label="Back to projects"
      >
        &laquo;
      </Link>
      <div className="project-detail-inner">
        <div className="project-gallery">
          <button
            className="project-gallery-nav left"
            type="button"
            aria-label="Previous image"
          >
            &lsaquo;
          </button>
          <div className="project-gallery-frame" aria-label="Project images">
            {project.image ? (
              <img
                src={project.image}
                alt={project.name}
                className="project-gallery-image"
              />
            ) : null}
          </div>
          <button
            className="project-gallery-nav right"
            type="button"
            aria-label="Next image"
          >
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
              *Information/Details about the Project* Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
              massa quis enim.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
