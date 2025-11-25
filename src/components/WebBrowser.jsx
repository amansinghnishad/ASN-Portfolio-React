import PropTypes from "prop-types";

const WebBrowser = ({ url, title }) => {
  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="flex items-center gap-2 border-b border-borderSubtle bg-surfaceStrong px-4 py-2 text-xs text-muted">
        <div className="flex items-center gap-1">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <span className="truncate font-medium text-foreground">{title}</span>
      </div>

      <div className="flex items-center gap-3 border-b border-borderSubtle bg-surface px-4 py-2 text-[11px] text-muted">
        <span className="hidden rounded-md border border-borderSubtle bg-surfaceStrong px-2 py-[0.15rem] text-[10px] uppercase tracking-wide text-subtle sm:inline">
          live
        </span>
        <span className="truncate rounded-md border border-borderSubtle bg-surface px-3 py-1 text-foreground shadow-inner">
          {url}
        </span>
      </div>

      <iframe
        src={url}
        title={title}
        loading="lazy"
        className="h-full w-full flex-1 bg-surface"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div>
  );
};

WebBrowser.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};

WebBrowser.defaultProps = {
  url: "https://amansinghnishad.me",
  title: "Live Preview",
};

export default WebBrowser;
