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
          <TabletOrMobileNav />
          <div
            style={{
              width: "83%",
              height: "8%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              background:
                "linear-gradient(45deg, rgba(82, 7, 156, 0.55) 0%, rgba(22, 1, 44, 1) 35%, rgba(17, 0, 34, 1) 65%, rgba(89, 9, 168, 0.589) 100%)",
              color: "#E0AAFF",
              position: "sticky",
              zIndex: 1000,
              borderRadius: "40px 40px",
              margin: "5%",
              marginLeft: "8%",
            }}
          >
            <img
              src="/logo.png"
              alt="Logo"
              style={{ height: "40px", marginRight: "10px" }}
            />
            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>ASN</span>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
