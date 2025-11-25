import { about } from "../data/about";

const AboutSection = () => {
  return (
    <section className="flex h-full min-h-0 flex-col gap-6">
      <header>
        <p className="text-sm uppercase tracking-[0.3em] text-subtle">About</p>
        <h2 className="text-2xl font-semibold text-foreground">{about.name}</h2>
        <p className="text-sm text-muted">{about.title}</p>
      </header>
      <span className="block border-t border-dashed border-borderSubtle" />

      <p className="text-sm leading-relaxed text-muted">{about.summary}</p>

      <ul className="grid gap-3 text-sm text-muted">
        {about.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="leading-6 text-muted">{highlight}</span>
          </li>
        ))}
      </ul>
      <div className="rounded-2xl border border-borderSubtle bg-surface p-5 shadow-glass transition-colors">
        <h3 className="text-xs uppercase tracking-[0.3em] text-subtle">
          Tech Stack
        </h3>
        <ul className="mt-3 flex flex-wrap gap-2 text-sm text-muted">
          {about.techStack.map((item) => (
            <li
              key={item}
              className="rounded-full border border-borderSubtle bg-surfaceStrong px-3 py-1 text-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
