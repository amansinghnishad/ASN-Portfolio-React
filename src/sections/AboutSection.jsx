import { about } from "../data/about";

const AboutSection = () => {
  return (
    <section className="flex h-full min-h-0 flex-col gap-6">
      <header>
        <p className="text-sm uppercase tracking-[0.3em] text-subtle">About</p>
        <h2 className="text-2xl font-semibold text-foreground">{about.name}</h2>
        <p className="text-sm text-muted">{about.title}</p>
      </header>

      <p className="text-sm leading-relaxed text-muted">{about.summary}</p>

      <ul className="grid gap-3 text-sm text-muted">
        {about.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="leading-6 text-muted">{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-subtle">
          Contact
        </p>
        <ul className="space-y-1 text-sm">
          {about.contact.map((entry) => (
            <li key={entry.label}>
              <a
                href={entry.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground"
              >
                <span className="font-medium text-foreground">
                  {entry.label}
                </span>
                <span className="text-xs text-subtle">{entry.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
