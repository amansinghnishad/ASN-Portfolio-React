import { useMediaQuery } from "react-responsive";
import DesktopNav from "./DesktopNav";
import TabletOrMobileNav from "./TabletOrMobileNav";

const Navbar = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 850px)",
  });

  return (
    <>
      {isDesktopOrLaptop ? (
        <DesktopNav />
      ) : (
        <>
          <TabletOrMobileNav />{" "}
          <div
            style={{
              width: "90%",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 20px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              background: "rgba(0, 0, 0, 0.3)",
              backdropFilter: "blur(10px)",
              color: "#e5e5e5",
              position: "sticky",
              zIndex: 1000,
              borderRadius: "16px",
              margin: "20px auto",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <img
              src="/logo.png"
              alt="Logo"
              style={{ height: "32px", marginRight: "10px" }}
            />
            <span style={{ fontSize: "1.1rem", fontWeight: "600" }}>ASN</span>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
