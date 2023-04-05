import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StrictMode } from "react";
import Layout from "./pages/Layout/Layout";
import Overview from "./pages/Overview/Overview";
import Modify from "./pages/Modify/Modify";
import NoPage from "./pages/Nopage/Nopage";
import Start from "./pages/Start/Start";


export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Start />} />
          <Route path="/Overview" element={<Overview />}/>
          <Route path="/Modify" element={<Modify />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  
)
