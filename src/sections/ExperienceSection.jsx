import { experiences } from "../data/experience";

const ExperienceSection = () => {
  return (
    <section className="flex h-full min-h-0 flex-col gap-4">
      <header>
        <p className="text-sm uppercase tracking-[0.3em] text-subtle">
          Experience
        </p>
        <h2 className="text-2xl font-semibold text-foreground">
          Selected Roles
        </h2>
      </header>

      <ol className="space-y-4 text-sm">
        {experiences.map((item) => (
          <li
            key={`${item.role}-${item.company}`}
            className="rounded-2xl border border-borderSubtle bg-surfaceStrong p-4 shadow-glass transition-colors"
          >
            <div className="flex flex-wrap items-end justify-between gap-2 text-xs uppercase tracking-[0.2em] text-subtle">
              <span>{item.period}</span>
              <span>{item.location}</span>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-foreground">
              {item.role}
            </h3>
            <p className="text-sm text-accent">{item.company}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {item.summary}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="leading-6">{highlight}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ExperienceSection;
