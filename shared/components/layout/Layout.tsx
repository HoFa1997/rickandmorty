import { FunctionComponent } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

interface LayoutHomePageProps {
  children: JSX.Element;
}

const Layout: FunctionComponent<LayoutHomePageProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
