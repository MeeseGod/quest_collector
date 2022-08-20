import {HashRouter, Routes, Route} from "react-router-dom";
import MainPage from "./Pages/MainPage";

export default function App() {
  return  <div className="App">
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" exact element={<MainPage/>} />
      </Routes>
    </HashRouter>
  </div>
}