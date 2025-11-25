import { about } from "../data/about";

const AboutSection = () => {
  return (
    <section className="flex h-full min-h-0 flex-col gap-6">
      <header>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          About
        </p>
        <h2 className="text-2xl font-semibold text-white">{about.name}</h2>
        <p className="text-sm text-slate-300">{about.title}</p>
      </header>

      <p className="text-sm leading-relaxed text-slate-300">{about.summary}</p>

      <ul className="grid gap-3 text-sm text-slate-200">
        {about.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
            <span className="leading-6 text-slate-300">{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Contact
        </p>
        <ul className="space-y-1 text-sm">
          {about.contact.map((entry) => (
            <li key={entry.label}>
              <a
                href={entry.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-slate-200 transition hover:text-white"
              >
                <span className="font-medium text-slate-100/90">
                  {entry.label}
                </span>
                <span className="text-xs text-slate-400">{entry.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
