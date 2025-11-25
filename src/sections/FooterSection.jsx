import PropTypes from "prop-types";

import { socialLinks } from "../data/socialLinks";

const FooterSection = ({ name, technologies }) => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col gap-4 text-xs text-subtle">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span>
          © {year} {name}. Crafted with care.
        </span>
        <span
          aria-label="Social links"
          className="flex flex-wrap items-center gap-2 md:justify-end"
        >
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target={link.id === "email" ? "_self" : "_blank"}
              rel={link.id === "email" ? undefined : "noreferrer"}
              className="rounded-full border border-borderSubtle px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-subtle transition-colors hover:border-accent hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </span>
      </div>
    </footer>
  );
};

FooterSection.propTypes = {
  name: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string),
};

FooterSection.defaultProps = {
  technologies: [],
};

export default FooterSection;
