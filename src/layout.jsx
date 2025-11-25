import PropTypes from "prop-types";

import GlassPanel from "./components/GlassPanel";
import ResizableColumns from "./components/ResizableColumns";

const Layout = ({ header, leftPanel, centerPanel, rightPanel, footer }) => {
  return (
    <div className="grid min-h-screen max-h-screen grid-rows-[auto,1fr,auto] gap-6 bg-slate-950 text-slate-100 p-6">
      <GlassPanel as="header" className="overflow-hidden gap-1">
        <div className="max-h-full overflow-y-auto scroll-smooth pr-1">
          {header}
        </div>
      </GlassPanel>

      <ResizableColumns
        className="min-h-0 gap-1"
        panels={{
          left: (
            <GlassPanel className="flex h-full flex-col overflow-hidden">
              <div className="flex-1 overflow-y-auto scroll-smooth pr-1">
                {leftPanel}
              </div>
            </GlassPanel>
          ),
          center: (
            <GlassPanel className="flex h-full flex-col overflow-hidden">
              <div className="flex-1 overflow-y-auto scroll-smooth pr-1">
                {centerPanel}
              </div>
            </GlassPanel>
          ),
          right: (
            <GlassPanel className="flex h-full flex-col overflow-hidden p-0">
              <div className="flex-1 overflow-hidden">{rightPanel}</div>
            </GlassPanel>
          ),
        }}
      />

      <GlassPanel as="footer" className="overflow-hidden">
        <div className="max-h-full overflow-y-auto scroll-smooth pr-1">
          {footer}
        </div>
      </GlassPanel>
    </div>
  );
};

Layout.propTypes = {
  header: PropTypes.node,
  leftPanel: PropTypes.node,
  centerPanel: PropTypes.node,
  rightPanel: PropTypes.node,
  footer: PropTypes.node,
};

Layout.defaultProps = {
  header: null,
  leftPanel: null,
  centerPanel: null,
  rightPanel: null,
  footer: null,
};

export default Layout;
