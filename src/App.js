//think of app js as the center of the app, or the wrapper compnent that houses all the other compnents

import React from "react";
import About from "./components/About";
import Nav from "./components/Nav";


function App() {
  return (
   <div>
     <Nav></Nav>
     <main>
       <About></About>
     </main>
   </div>
  );
}

export default App;
