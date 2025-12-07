import PropTypes from "prop-types";

import GlassPanel from "./components/GlassPanel";
import ResizableColumns from "./components/ResizableColumns";
import Dither from "./utils/Dither";

const Layout = ({ header, leftPanel, centerPanel, rightPanel, footer }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      <div className="relative z-10 grid min-h-screen grid-rows-[auto,1fr,auto] gap-4 p-4 text-foreground transition-colors duration-500 sm:gap-6 sm:p-6">
        <GlassPanel as="header">
          <div className="max-h-full overflow-y-auto scroll-smooth pr-1">
            {header}
          </div>
        </GlassPanel>

        <ResizableColumns
          className="min-h-0"
          panels={{
            left: (
              <GlassPanel className="flex h-full flex-col">
                <div className="flex-1 overflow-y-auto scroll-smooth pr-1">
                  {leftPanel}
                </div>
              </GlassPanel>
            ),
            center: (
              <GlassPanel className="flex h-full flex-col">
                <div className="flex-1 overflow-y-auto scroll-smooth pr-1">
                  {centerPanel}
                </div>
              </GlassPanel>
            ),
            right: (
              <GlassPanel className="flex h-full flex-col">
                <div className="flex-1 overflow-hidden min-h-[600px] sm:min-h-[70vh] sm:max-h-[85vh]">
                  {rightPanel}
                </div>
              </GlassPanel>
            ),
          }}
        />

        <GlassPanel as="footer">
          <div className="max-h-full overflow-y-auto scroll-smooth pr-1">
            {footer}
          </div>
        </GlassPanel>
      </div>
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
