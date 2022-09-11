import { FunctionComponent } from "react";
import Footer from "../organisms/Footer";
import NavBar from "../organisms/Header";

interface TemplateHomePageProps {
  children: JSX.Element;
}

const Template: FunctionComponent<TemplateHomePageProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Template;