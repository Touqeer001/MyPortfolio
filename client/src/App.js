import Layout from "./componet/Layout/Layout";
import Education from "./componet/pages/Education/Education";

import About from "./componet/pages/About/About.jsx";
import Project from "./componet/pages/Project/Project.jsx";
import TechStack from "./componet/pages/TechStack/TechStack";
import Contact from "./componet/pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./componet/context/ThemeContextt";

function App() {
  const[theme]=useTheme();
  return (
    <>
    <div id={theme}>
      <Layout></Layout>

      <div className="container">
        <About></About>
        <Education></Education>
        <TechStack></TechStack>
        <Project />
        <Contact></Contact>
      </div>
      <div className="footer mb-3 ms-3 ">
        <h5 className="text-center">
          Made with Touqeer ibn Khursheed &copy;2023
        </h5>
      </div>
      </div>
      <ScrollToTop
        smooth
        color="yellow"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
