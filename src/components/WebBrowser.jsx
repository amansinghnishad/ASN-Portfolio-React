import PropTypes from "prop-types";

const WebBrowser = ({ url, title }) => {
  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="flex items-center gap-2 border-b border-white/15 bg-white/10 px-4 py-2 text-xs text-slate-200">
        <div className="flex items-center gap-1">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <span className="truncate font-medium text-slate-100/90">{title}</span>
      </div>

      <div className="flex items-center gap-3 border-b border-white/10 bg-white/5 px-4 py-2 text-[11px] text-slate-300">
        <span className="hidden rounded-md bg-black/40 px-2 py-1 text-[10px] uppercase tracking-wide text-white/80 sm:inline">
          live
        </span>
        <span className="truncate rounded-md bg-white/5 px-3 py-1 text-slate-100/90 shadow-inner shadow-white/5">
          {url}
        </span>
      </div>

      <iframe
        src={url}
        title={title}
        loading="lazy"
        className="h-full w-full flex-1 bg-white/5"
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
