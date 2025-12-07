import PropTypes from "prop-types";

const tabs = [
  {
    id: "about",
    label: "About",
  },
  {
    id: "experience",
    label: "Experience",
  },
  {
    id: "projects",
    label: "Projects",
  },
];

const NavigationPanel = ({ activeTab, onChange }) => {
  return (
    <section className="flex flex-col gap-5">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold">Content</h2>
      </header>

      <div className="flex flex-col text-left text-sm">
        {tabs.map((tab, index) => {
          const isActive = tab.id === activeTab;
          const isLast = index === tabs.length - 1;
          return (
            <div key={tab.id} className="flex flex-col">
              <button
                type="button"
                onClick={() => onChange(tab.id)}
                className={`w-full px-2 py-2 text-left text-sm font-medium uppercase tracking-[0.2em] transition-colors ${
                  isActive
                    ? "text-accent"
                    : "text-foreground/80 hover:text-accent"
                }`}
              >
                <span className="text-base font-semibold text-foreground">
                  {tab.label}
                </span>
              </button>
              {!isLast && (
                <span className="my-1 w-full border-t border-dashed border-borderSubtle" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

NavigationPanel.propTypes = {
  activeTab: PropTypes.oneOf(tabs.map((tab) => tab.id)).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NavigationPanel;
