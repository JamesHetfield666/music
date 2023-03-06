import "./assets/scss/app.scss";
import { Route, Routes } from "react-router-dom";

import Default from "./components/layout/Default.js";
import Page1 from "./pages/page1.js";
import Page2 from "./pages/page2.js";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Default />}>
          <Route path="page1" element={<Page1 />}></Route>
          <Route path="page2" element={<Page2 />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
