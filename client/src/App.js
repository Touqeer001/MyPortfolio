import Layout from "./componet/Layout/Layout";
import Education from "./componet/pages/Education/Education";

import About from "./componet/pages/About/About.jsx";
import Project from "./componet/pages/Project/Project.jsx";
import TechStack from "./componet/pages/TechStack/TechStack";



function App() {
  return (
    <>
<Layout></Layout>
<div className="container">
<About></About>
<Education></Education>
<TechStack></TechStack>
<Project/>

</div>





    
    </>
  );
}

export default App;
